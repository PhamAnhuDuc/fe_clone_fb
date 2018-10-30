//API POST Bài viết
import * as types from './../constants/ActionType';
import callApi from './../utils/index';

export const actPostRequest =  (post) => {
    
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
