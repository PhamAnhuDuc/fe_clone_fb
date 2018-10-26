import * as types from './../constants/ActionType';


let defaultState = {
	infoPost: {},
	listComment: [],
	allPost : [],
	isNewPost : false,
	isNewComment : false,
};
function insertPost(listPost, post){
    let tmp = listPost.slice();
    tmp.unshift(post);
    return tmp;
}

function insertComment(listComment, comment){
	listComment = listComment ? listComment : [];
	let tmp = listComment.slice();
	tmp.push(comment);
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

		case types.GET_INFO_POST:
			state.infoPost = action.getPost
			state.listComment = action.getPost.comment;
			return {...state};

		case types.SEND_COMMENT:
			state.listComment = insertComment(state.listComment, action.comment);
			state.isNewComment = true;
			// console.log(state.infoPost);
		return {...state};

		default:
			return state;
	}
}

export default post;