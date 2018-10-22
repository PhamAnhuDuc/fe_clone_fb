import * as types from './../constants/ActionType';

var findIndex = (friends, id) => {
    var result = -1;
    friends.forEach((friend, index) => {
        if (friend.id === id) {
            result = index;
        }
    });
    console.log(result);
    
    return result;
}


let defaultState = {
    isLogin : false,
    // info: {
    //     full_name : '',
    //     email : '',
    //     password : '',
    //     phone : '',
    //     address : '',
    // },
    resultSearch:'',
    friendship: '',
    listFriend: ''
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
            if(action.payload.user){
                localStorage.setItem("isLogIn", 'true');
                localStorage.setItem("access-token", action.payload.user.access_token);
                localStorage.setItem("idUserLogin", action.payload.user.id);
            }
            return  {
                ...state,
                data_user: action.payload 
            }
        case types.USER_LOGOUT: 
            localStorage.removeItem("access-token");
            localStorage.removeItem("isLogIn");
            localStorage.removeItem("idUserLogin");
            //state.info = { full_name : '', email : '', password : '', phone : '', address : '' };
            return {
                ...state,
            }

        case types.SEARCH: 
            return {
                ...state,
                resultSearch : action.search.users
               
            }

        case types.ADD_FRIEND: 
            //console.log(action.flag);
            //console.log(action.id.flag);
            return {
                ...state,
                friendship : action.id.flag
            }
        case types.SHOW_LIST_FRIEND: 
            //console.log(action.listFriend.friends);
            state = action.listFriend.friends;
            
            
            return {
                ...state,
                listFriend: action.listFriend.friends
               
            }    
        case types.DELETE_FRIEND:
            
            index = findIndex(state.listFriend,id);
            state.listFriend.splice(index, 1);
            alert(index);
            console.log(state);
            
            // listFriend = listFriend.splice(index, 1);
            // console.log(listFriend)
            return {
                ...state,
               
            }
        
        default:
            return state;
    }
}
export default user;