import * as types from './../constants/ActionType';
import callApi from './../utils/index';

// export const actChangeNotify = (style, title, content) => {
// 	return {
// 		type : types.CHANGE_NOTIFY,
// 		style, title, content
// 	}
// }
// export const actHideNotify = () => {
// 	return {
// 		type : types.HIDE_NOTIFY,
// 	}
// }
//API - all 
export const actRegisterRequest = (userRegister) => {
    return async dispatch => {
        return await callApi('user/register', 'POST', userRegister).then(res => {
            dispatch(actRegister(res.data));
            //console.log(res);
        })
    }
}
//hành động đăng kí và truyền vào thông tin để đăng kí
export const actRegister = (userRegister) => {
    return {
        type : types.USER_REGISTER,
        payload: userRegister
    }
}

//API 
export const actLoginRequest = (userLogin) => {
    return async dispatch => {
        return await callApi('user/login', 'POST', userLogin).then(res => {
            dispatch(actLogin(res.data));
        })
    }
}
//hành động đăng kí và truyền vào thông tin để đăng kí
export const actLogin = (userLogin) => {
    
    return {
        type : types.USER_LOGIN,
        payload: userLogin
    }
}

export const actLogout = () => {
	return {
		type : types.USER_LOGOUT
	}
}



//API POST Bài viết
export const actPostRequest =  (post) => {
    return dispatch => {
        return callApi('post', 'POST', post, {'access-token': localStorage.getItem('access-token')}).then(res => {
            if(res === undefined) {
                res = {};
            }
             dispatch(actPost(res.data));
        })
    }
}

export const actPost = (data) => {
	return {
        type : types.POST_CONTENT,
        data,
	}
}

// api GET LITS FIEND

export const getAllListFriend = () => {
    return  async dispatch => {
        return await callApi('list-friend', 'GET', null, {'access-token': localStorage.getItem('access-token')}).then(res => {
            dispatch(actListFriend(res.data));
        })
    }
}

export const actListFriend = (listFriend) => {
    // console.log(listFriend);
    return {
        type : types.SHOW_LIST_FRIEND,
        listFriend
    }
}

//GET ALL POST

export const getAllPostRequest = (id) => {
    return async dispatch => {
        return await callApi(`all-post/${id}`, 'GET', null, null).then(res => {
            dispatch(actGetAllPost(res.data));     
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
    return async dispatch => {
        return await callApi(`user/search?${name}=${search}`, 'GET', null).then(res => {
            dispatch(actSearch(res.data));
        })
    }
}

export const actSearch = (search) => {
    return {
        type : types.SEARCH,
        search
    }
}

//ADD FRIEND REQUEST
export const addFriendRequest = (id) => {
    return async dispatch => {
        return await callApi(`user/add-friend/${id}`, 'GET', null, {'access-token': localStorage.getItem('access-token')}).then(res => {
            dispatch(actAddFriend(res.data));
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
