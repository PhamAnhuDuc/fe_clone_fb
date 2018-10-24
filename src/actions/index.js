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
    return dispatch => {
        return callApi('user/register', 'POST', userRegister).then(res => {
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
    return dispatch => {
        return callApi('user/login', 'POST', userLogin).then(res => {
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
export const actPostRequest = (post) => {
    //console.log(post);
    
    return dispatch => {
        return callApi('post', 'POST', post, {'access-token': localStorage.getItem('access-token')}).then(res => {
            dispatch(actPost(res.data));
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

//SEARCH REQUEST
export const getSearchRequest = (search,sortBy) => {
    let name = sortBy;
    return dispatch => {
        return callApi(`user/search?${name}=${search}`, 'GET', null).then(res => {
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
    return dispatch => {
        return callApi(`user/add-friend/${id}`, 'GET', null, {'access-token': localStorage.getItem('access-token')}).then(res => {
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
    return dispatch => {
        return callApi(`user/delete-friend/${id}`, 'DELETE', null, {'access-token': localStorage.getItem('access-token')}).then(res => {
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
    return dispatch => {
        return callApi(`user/get-user/${id}`, 'GET', null, {'access-token': localStorage.getItem('access-token')}).then(res => {
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

