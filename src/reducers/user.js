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
            //console.log('aaa');
            if(action.payload.message === 'Login Success'){
                state.isLogin = true;
                localStorage.setItem("isLogIn", 'true');
            }
            return  {
                ...state,
                data_user: action.payload 
            }
        case types.USER_LOGOUT: 
            state.isLogin = false;
            localStorage.setItem("isLogIn", 'false');
            state.info = { full_name : '', email : '', password : '', phone : '', address : '' };
            return {...state}
        default:
            return state;
    }
}
export default user;