import * as types from './../constants/ActionType';
import callApi from './../utils/index';



export const actChangeNotify = (style, title, content) => {
	return {
		type : types.CHANGE_NOTIFY,
		style, title, content
	}
}

//API - all 
export const actRegisterRequest = (userRegister) => {
    return dispatch => {
        return callApi('user/register', 'POST', userRegister).then(res => {
            dispatch(actRegister(res.data));
            //console.log(res);
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

export const actLogout = () => {
	return {
		type : types.USER_LOGOUT
	}
}