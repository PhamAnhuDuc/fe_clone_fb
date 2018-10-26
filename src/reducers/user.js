import * as types from './../constants/ActionType';

var findIndex = (friends, id) => {
    var result = -1;
    friends.forEach((friend, index) => {
        if (friend.id === id) {
            result = index;
        }
    });
    return result;
}

function deleteFriend(listFriend, index){
    let tmp = listFriend.slice();
    tmp.splice(index, 1);
    return tmp;
}

let defaultState = {
    isLogin : '',
    resultSearch: [],
    friendship: '',
    listFriend: '',
    messages: '',
    getUser: '' ,
    isFriend : '',
}

const user = (state = defaultState, action) => {
    var index = -1;
    var { id } = action;
    switch (action.type) {
        case types.USER_REGISTER :
            if (action.userRegister.error) {
                var messages = action.userRegister.detail;
            }
            state.messages = messages;
            return {
                ...state,
                // user_login: action.userRegister,
            }

        case types.USER_LOGIN:
            if(action.userLogin.id){
                state.isLogin = true;
                localStorage.setItem("isLogIn", 'true');
                localStorage.setItem("access-token", action.userLogin.access_token);
                localStorage.setItem("idUserLogin", action.userLogin.id);
                localStorage.setItem("emailLogin", action.userLogin.email);
                state.resultSearch = [];
            }
            return  {
                ...state,
            }
        case types.USER_LOGOUT: 
            localStorage.removeItem("access-token");
            localStorage.removeItem("isLogIn");
            localStorage.removeItem("idUserLogin");
            localStorage.removeItem("emailLogin");
            state.isLogin = false;
            state.resultSearch = [];
            return {
                ...state,
            }

        case types.SEARCH: 
            state.resultSearch = action.search;
            return {...state}

        case types.ADD_FRIEND: 
            state.isFriend = true;
            return {
                ...state,
                friendship : action.id.flag
            }
        case types.SHOW_LIST_FRIEND:  
            state.listFriend = action.listFriend;
            return {
                ...state
            }    
        case types.DELETE_FRIEND:
            
            index = findIndex(state.listFriend,id);
            state.listFriend = deleteFriend(state.listFriend, index);
            // state.listFriend = state.listFriend.filter((friend, i) => i !== index);
            return {
                ...state,
            }
        case types.GET_USER:
            state.getUser = action.user;
            state.isFriend = action.user.flag ? true : false;
            return {...state}
        default:
            return state;
    }
}
export default user;