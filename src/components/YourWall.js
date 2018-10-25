import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FormPost from './FormPost';
import ContentPost from './ContentPost';
import { actLogout ,getAllPostRequest, actGetUserRequest } from './../actions/index';

class YourWall extends Component {
    componentDidMount(){
        this.props.getAllPost(localStorage.getItem("idUserLogin"));
        this.props.getInfo(localStorage.getItem("idUserLogin"));
    }
    handleLogOut = (e) => {
        this.props.LogOut();
    }

    render() {
        let {data, isNewPost } = this.props;
        let isLogin = localStorage.getItem("isLogIn");
        if(isLogin !== 'true') {
            return <Redirect to='/signin'/>;
        }
        let email = data ? data.user.email :'';
        console.log(postDatas);
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
                        {this.showPost(postDatas,email, isNewPost)}
                    </div>
                </div>
            </div>
            
        );


    }
    showPost = (postDatas, email , isNewPost) => {
        
        let result = null;
        postDatas = postDatas ? this.props.postDatas : []; 

		if(postDatas.length > 0){
			result = postDatas.map((postData, index ) => {  
				return (
					<ContentPost postData = {postData} index = {index} key={index} email = {email} isNewPost = {isNewPost} />
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
        },
        getInfo : (id) => {
            dispatch(actGetUserRequest(id));
        },
    }
}
const mapStateToProps = state => {
    // console.log(state.user);
    
    return {
        data : state.user.getUser,
        isNewPost : state.post.isNewPost,
        postDatas  : state.post.allPost.post,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(YourWall);