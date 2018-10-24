import React, { Component } from 'react';
import FormPost from './../components/FormPost';
import ContentPost from './../components/ContentPost';
import {connect } from 'react-redux';
import { actGetUserRequest , getAllPostRequest} from './../actions/index';


class FriendPage extends Component {
    constructor(props){
        super(props);
        this.props.getInfo(this.props.match.params.id);
        this.props.getAllPost(this.props.match.params.id);
    }

    render() { 
        let {data} = this.props;
        let postDatas = this.props.postDatas;
        return (
            <div className="media">
                <div className="media-left">
                    <img src="/images/test1.jpg" className="media-object" style={{width: 160}} />
                    <div>Name : </div>  
                    <h5>{data ? data.user.full_name : ''}</h5>
                    <div>Email : </div>
                    <h5>{data ? data.user.email : ''}</h5>
                    <div>Phone : </div>
                    <h5>{data ? data.user.phone : ''}</h5>
                </div>
                <div className="media-body">
                    <div className="page-header">
                        <FormPost/>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">Nội dung bài Post</div>
                        <div className="panel-body">
                            {this.showPost(postDatas)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    showPost = (postDatas) => {
        let result = null;
        postDatas = postDatas ? this.props.postDatas : []; 

		if(postDatas.length > 0){
			result = postDatas.map((postData, index ) => {  
				return (
					<ContentPost postData = {postData} index = {index} key={index}/>
				);
			});
		}
		return result;
	}
}

const mapDispathToProps = (dispatch , props) => {
    return {
        getInfo : (id) => {
            dispatch(actGetUserRequest(id));
        },
        getAllPost : (id) => {
            dispatch(getAllPostRequest(id));
        }
    }
}
const mapStateToProps = (state) => {
    return {
        data : state.user.getUser,
        postDatas  : state.post.allPost.post,
    }
}
export default connect(mapStateToProps,mapDispathToProps)(FriendPage);
