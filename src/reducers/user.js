import * as types from './../constants/ActionType';

let defaultState = {
    //user_login : false,
    full_name : '',
    email : '',
    password : '',
    phone : '',
    address : '',
    data_register: {}
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
            //console.log(action.payload);
            return  {
                ...state,
                data_user: action.payload 
            }
        default:
            return state;
    }
}
export default user;