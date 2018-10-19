import * as types from './../constants/ActionType';



let defaultState = {
    isLogin : false,
    info: {
        full_name : '',
        email : '',
        password : '',
        phone : '',
        address : '',
    }
}

const user = (state = defaultState, action) => {
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
            localStorage.setItem("isLogIn", 'false');
            localStorage.setItem("idUserLogin", '');
            state.info = { full_name : '', email : '', password : '', phone : '', address : '' };
            return {
                ...state,
            }
        default:
            return state;
    }
}
export default user;