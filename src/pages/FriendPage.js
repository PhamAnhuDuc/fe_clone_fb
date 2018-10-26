import React, { Component } from 'react';
import FormPost from './../components/FormPost';
import ContentPost from './../components/ContentPost';
import {connect } from 'react-redux';
import { actGetUserRequest , getAllPostRequest , addFriendRequest} from './../actions/index';
import { Redirect } from 'react-router-dom';

class FriendPage extends Component {
    constructor(props){
        super(props);
        this.props.getInfo(this.props.match.params.id);
        this.props.getAllPost(this.props.match.params.id);
    }
    handlerAdd = (id) => {
        this.props.onAdd(this.props.match.params.id);
    }

    render() { 
        let {data, isNewPost } = this.props;
        let checkRelationShip = this.props.isFriend;
        
        data = data ? data : '';
        if(data.user === null) {
            return  <Redirect to="/profile" />;
        } 
        let postDatas = this.props.postDatas;
        return (
            <div className="media">
                <div className="media-left">
                    <img src="/images/test1.jpg" className="media-object" style={{width: 160}} alt ="test1.jpg"  />
                    <div>Name : </div>  
                    <h5>{data ? data.user.full_name : ''}</h5>
                    <div>Email : </div>
                    <h5>{data ? data.user.email : ''}</h5>
                    <div>Phone : </div>
                    <h5>{data ? data.user.phone : ''}</h5>
                </div>
                <div className="media-body">
                    <div className="page-header">
                        {
                            localStorage.getItem('isLogIn') ?
                                checkRelationShip === '' ?
                                    ''
                                :   checkRelationShip === true ?
                                        <FormPost />
                                    :  <button onClick={()=> this.handlerAdd(this.props.match.params.id)} className="btn btn-success post-form">ADD FRIEND</button>
                            : ''
                        }
                        
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">Nội dung bài Post</div>
                        <div className="panel-body">
                            {this.showPost(postDatas,  data ? data.user.email :'' , isNewPost )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    showPost = (postDatas , email, isNewPost) => {
        let result = null;
        postDatas = postDatas ? this.props.postDatas : []; 

		if(postDatas.length > 0){
			result = postDatas.map((postData, index ) => {  
				return (
					<ContentPost postData = {postData} index = {index} key={index} email = {email} isNewPost = {isNewPost}/>
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
        },
        onAdd : (id) => {
            dispatch(addFriendRequest(id));
        }
    }
}
const mapStateToProps = (state) => {
    return {
        data : state.user.getUser,
        postDatas  : state.post.allPost,
        isNewPost : state.post.isNewPost,
        isFriend : state.user.isFriend,
    }
}
export default connect(mapStateToProps,mapDispathToProps)(FriendPage);
