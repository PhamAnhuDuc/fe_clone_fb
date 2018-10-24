import * as types from './../constants/ActionType';


let defaultState = {
	post: {},
	allPost : []
};
function insertPost(listPost, post){
    let tmp = listPost.slice();
    tmp.unshift(post);
    return tmp;
}
const post = (state = defaultState, action) => {
	switch(action.type){
		case types.POST_CONTENT:
			state.post = action.data.post;
			state.allPost.post = insertPost(state.allPost.post, state.post);
			return {...state};
		case types.SHOW_All_POST:
			console.table(action.dataPost.post)
			state.allPost = action.dataPost

		return {...state};
		default:
			return state;
	}
}

export default post;