import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FormPost from './FormPost';
import ContentPost from './ContentPost';
import { actLogout ,getAllPostRequest } from './../actions/index';

class YourWall extends Component {

    // constructor(props){
    //     super(props);
    //     this.props.getAllPost(33);
    // }
    componentDidMount(){
        this.props.getAllPost(33);
    }
    handleLogOut = (e) => {
        this.props.LogOut();
    }

    render() {
        
        
        let isLogin = localStorage.getItem("isLogIn");
        if(isLogin !== 'true') {
            return <Redirect to='/signin'/>;
        }
        let postDatas = this.props.postDatas;
        return(
            <div>
                <div className="page-header">
                <FormPost/>
                <button onClick={this.handleLogOut} type="submit" className="btn btn-danger">LOGOUT</button>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">Nội dung bài Post</div>
                    <div className="panel-body">
                        {this.showPost(postDatas)}
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

const mapDispatchToProps = (dispatch, props) => {
    return {
        LogOut : () => {
            dispatch(actLogout());
        },
        getAllPost : (id) => {
            dispatch(getAllPostRequest(id));
        }
        
    }
}
const mapStateToProps = state => {
    return {
        isLogin2 : state.user.isLogin,
        postDatas  : state.post.allPost.post,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(YourWall);