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
    resultSearch:[],
    friendship: '',
    listFriend: '',
    messages: '',
    getUser: '' ,
    isFriend : false

}

const user = (state = defaultState, action) => {
    var index = -1;
    var { id } = action;
    switch (action.type) {
        case types.USER_REGISTER :
            if (action.payload.error) {
                var messages = action.payload.detail;
            }
            return {
                ...state,
                user_login: action.payload,
                messages : messages
            }
        case types.USER_LOGIN:
            state = action.payload.message;
            //console.log(action.payload.message);
            if(action.payload.user.id){
                localStorage.setItem("isLogIn", 'true');
                localStorage.setItem("access-token", action.payload.user.access_token);
                localStorage.setItem("idUserLogin", action.payload.user.id);
                localStorage.setItem("emailLogin", action.payload.user.email);
            }
            return  {
                ...state,
                messages : action.payload.message
            }
        case types.USER_LOGOUT: 
            localStorage.removeItem("access-token");
            localStorage.removeItem("isLogIn");
            localStorage.removeItem("idUserLogin");
            localStorage.removeItem("emailLogin");
            state.isLogin = false;
            return {
                ...state,
            }

        case types.SEARCH: 
            return {
                ...state,
                resultSearch : action.search.users
               
            }

        case types.ADD_FRIEND: 
            state.isFriend = true;
            return {
                ...state,
                friendship : action.id.flag
            }
        case types.SHOW_LIST_FRIEND: 
            state = action.listFriend.friends;
            
            return {
                ...state,
                listFriend: action.listFriend.friends
               
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