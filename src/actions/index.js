import * as types from './../constants/ActionType';
import callApi from './../utils/index';

//API 
export const actRegisterRequest = (userRegister) => {
    return dispatch => {
        return callApi('user/register', 'POST', userRegister).then(res => {
            dispatch(actRegister(res.data));
        })
    }
}
//hành động đăng kí và truyền vào thông tin để đăng kí
export const actRegister = (userRegister) => {
    return {
        type : types.USER_REGISTER,
        payload: userRegister
    }
}

//API 
export const actLoginRequest = (userLogin) => {
    return dispatch => {
        return callApi('user/login', 'POST', userLogin).then(res => {
            dispatch(actLogin(res.data));
        })
    }
}
//hành động đăng kí và truyền vào thông tin để đăng kí
export const actLogin = (userLogin) => {
    return {
        type : types.USER_LOGIN,
        payload: userLogin
    }
}