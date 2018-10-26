import * as types from './../constants/ActionType';
import callApi from './../utils/index';

//API - all 
export const actRegisterRequest = (userRegister) => {
    return dispatch => {
        return callApi('user/register', 'POST', userRegister).then(res => {
            res = res ? res.data : '';
            if (res.id) {
                alert('Register success. Please active email....!');
            }   
            dispatch(actRegister(res));
        })
    }
}
//hành động đăng kí và truyền vào thông tin để đăng kí
export const actRegister = (userRegister) => {
    return {
        type : types.USER_REGISTER,
        userRegister,
    }
}

//API 
export const actLoginRequest = (userLogin) => {
    return dispatch => {
        return callApi('user/login', 'POST', userLogin).then(res => {
            
            let userLogin = '';
            if (res && res.data) {
                userLogin = res.data.user;
            }
            if (!userLogin.id) {
                alert(res.data.message);
            }
            dispatch(actLogin(userLogin));
        })
    }
}
//hành động đăng kí và truyền vào thông tin để đăng kí
export const actLogin = (userLogin) => {
    return {
        type : types.USER_LOGIN,
        userLogin,
    }
}

// LOGOUT
export const actLogout = () => {
	return {
		type : types.USER_LOGOUT
	}
}

//API POST Bài viết
export const actPostRequest =  (post) => {
    console.log(post);
    
    return dispatch => {
        return callApi('post', 'POST', post, {'access-token': localStorage.getItem('access-token')}).then(res => {
            res = res ? res.data : '';
            dispatch(actPost(res));
        })
    }
}

export const actPost = (post) => {
	return {
        type : types.POST_CONTENT,
        post,
	}
}

// api GET LITS FIEND

export const getAllListFriend = () => {
    return dispatch => {
        return callApi('list-friend', 'GET', null, {'access-token': localStorage.getItem('access-token')}).then(res => {
            if (res && res.data) {
                res = res.data.listFriend;
            }
            dispatch(actListFriend(res));
        })
    }
}

export const actListFriend = (listFriend) => {
    return {
        type : types.SHOW_LIST_FRIEND,
        listFriend,
    }
}

//GET ALL POST

export const getAllPostRequest = (id) => {
    return async dispatch => {
        return await callApi(`all-post/${id}`, 'GET', null, null).then(res => {
            res = res ? res.data : '';
            dispatch(actGetAllPost(res));     
        })
    }
}

export const actGetAllPost = (dataPost) => {
    return {
        type : types.SHOW_All_POST,
        dataPost
    }
}


//SEARCH REQUEST
export const getSearchRequest = (search,sortBy) => {
    let name = sortBy;
    return dispatch => {
        return callApi(`user/search?${name}=${search}`, 'GET', null).then(res => {
            res = res ? res.data : '';
            dispatch(actSearch(res));
        })
    }
}

export const actSearch = (search) => {
    return {
        type : types.SEARCH,
        search,
    }
}

//ADD FRIEND REQUEST
export const addFriendRequest = (id) => {
    return dispatch => {
        return callApi(`user/add-friend/${id}`, 'GET', null, {'access-token': localStorage.getItem('access-token')}).then(res => {
            res = res ? res.data : '';
            dispatch(actAddFriend(res));
            alert(res.message);
        })
    }
}

export const actAddFriend = (id) => {
    return {
        type : types.ADD_FRIEND,
        id
    }
}
// API DELETE
export const deleteRequest = (id) => {
    return async dispatch => {
        return await callApi(`user/delete-friend/${id}`, 'DELETE', null, {'access-token': localStorage.getItem('access-token')}).then(res => {
            dispatch(actDeleteFriend(id,res.data)); 
        })
    }
}

export const actDeleteFriend = (id ,data) => {
    return {
        type : types.DELETE_FRIEND,
        id,
        payload : data
    }
}

// get 1 user 
export const actGetUserRequest = (id) => {
    return async dispatch => {
        return await callApi(`user/get-user/${id}`, 'GET', null, {'access-token': localStorage.getItem('access-token')}).then(res => {
            dispatch(actGetUser(res.data));
        })
    }
}
export const actGetUser = (user) => {
	return {
        type : types.GET_USER,
        user,
	}
}

//GET INOF POST
export const getInfoPostRequest = (id) => {
    return dispatch => {
        return  callApi(`post/${id}`, 'GET', null, null).then(res => {
            res = res ? res.data : '';
            dispatch(actGetInfoPost(res));
        })
    }
}
export const actGetInfoPost = (getPost) => {
	return {
        type : types.GET_INFO_POST,
        getPost,
	}
}

//API Send Commetn 


export const sendCommetnRequest = (comment) => {
    return dispatch => {
        return  callApi('post/comment', 'POST', comment, {'access-token': localStorage.getItem('access-token')}).then(res => {
            let comment = '';
            if (res && res.data) {
                comment = res.data.comment;
            }
            dispatch(actSendComment(comment));
        })
    }
}
export const actSendComment = (comment) => {
	return {
        type : types.SEND_COMMENT,
        comment,
	}
}


//API Comment POST
// export const actCommentPostRequest =  (post) => {
//     return dispatch => {
//         return callApi('post/comment', 'POST', post, {'access-token': localStorage.getItem('access-token')}).then(res => {
//              dispatch(actCommentPost(res.data));
//         })
//     }
// }

// export const actCommentPost = (data) => {
// 	return {
//         type : types.POST_ARTICLE_CONTENT,
//         data,
// 	}
// }
