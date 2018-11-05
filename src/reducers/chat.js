import * as types from './../constants/ActionType';

let defaultState = {
	isShowChat : false,
};
const chat = (state = defaultState, action) => {
	switch(action.type){
		case types.OPEN_CHAT:
			return true;
		case types.CLOSE_CHAT:
			return false;
		default:
			return state;
	}
}

export default chat;