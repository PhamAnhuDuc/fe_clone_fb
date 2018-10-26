import * as types from './../constants/ActionType';


let defaultState = {
	post: {},
	allPost : [],
	isNewPost : false,
};
function insertPost(listPost, post){
    let tmp = listPost.slice();
    tmp.unshift(post);
    return tmp;
}
const post = (state = defaultState, action) => {
	switch(action.type){
		case types.POST_CONTENT:
			state.isNewPost = true;
			action = action.post ? action.post : '';
			state.allPost = insertPost(state.allPost, action.post);
			return {...state};

		case types.SHOW_All_POST:
			state.allPost = action.dataPost
			return {...state};

		default:
			return state;
	}
}

export default post;