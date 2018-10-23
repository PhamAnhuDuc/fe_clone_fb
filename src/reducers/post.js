import * as types from './../constants/ActionType';

let defaultState = {
	content : '',
    fileImage:'',
};
const post = (state = defaultState, action) => {
	switch(action.type){
        case types.POST_CONTENT:
            
			return {...state};
		default:
			return state;
	}
}

export default post;