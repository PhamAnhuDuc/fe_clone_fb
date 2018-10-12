import * as types from './../constants/ActionType';

let defaultState = {
    user_login : false,
    // full_name : '',
    // email : '',
    // password : '',
    // phone : '',
    // address : '',
    data_register: {}
}

const user = (state = defaultState, action) => {
    //let {style = 'info', title, content} = action;
    switch (action.type) {
        case types.USER_REGISTER :
            if (action.payload.user) {
                alert('ok');
            }
            
            if (action.payload.error) {
                var messages = [];
                if (action.payload.detail['password']) {
                    action.payload.detail['password'].forEach((value) => {
                        messages.push(value);
                    });
                }

                if (action.payload.detail['email']) {
                    action.payload.detail['email'].forEach((value) => {
                        messages.push(value);
                    });
                }

                if (action.payload.detail['phone']) {
                    action.payload.detail['phone'].forEach((value) => {
                        messages.push(value);
                    });
                }

                if (action.payload.detail['address']) {
                    action.payload.detail['address'].forEach((value) => {
                        messages.push(value);
                    });
                }
                console.log(messages);
            }
            return {
                ...state,
                user_login: action.payload 
            }
        case types.USER_LOGIN:
            console.log(action.payload);
            return  {
                ...state,
                data_user: action.payload 
            }
        default:
            return state;
    }
}
export default user;