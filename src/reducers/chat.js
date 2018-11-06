import * as types from './../constants/ActionType';

let defaultState = {
	isShowChat : false,
	listChat: [],
};
function insertChat(listChat, idChat){
	let tmp = listChat.slice();
	if (tmp.indexOf(idChat) === -1) {
		tmp.push(idChat);
	}
	while (tmp.length > 4) {
		tmp.shift();
	}
    return tmp;
}

var findIndex = (listChat, id) => {
    var result = -1;
    listChat.forEach((chat, index) => {
        if (chat === id) {
            result = index;
        }
    });
    return result;
}

function removeChat(listChat, index){
    let tmp = listChat.slice();
    tmp.splice(index, 1);
    return tmp;
}

const chat = (state = defaultState, action) => {
	switch(action.type){
		case types.OPEN_CHAT:
			state.listChat = insertChat(state.listChat, action.id);
			
			return {...state};
		case types.CLOSE_CHAT:
			let index = findIndex(state.listChat, action.id);
			state.listChat = removeChat(state.listChat, index);
			return {...state};
		default:
			return state;
	}
}

export default chat;