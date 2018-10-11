import * as types from './../constants/ActionType';

//hành động đăng kí và truyền vào thông tin để đăng kí
export const actRegister = (userRegister) => {
    return {
        type : types.USER_REGISTER,
        userRegister
    }
}