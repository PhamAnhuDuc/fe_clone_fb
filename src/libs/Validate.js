import React from 'react';
import { isEmail, isEmpty } from 'validator';
class Validate {
    static validateInputPhone = (value) => {
        if(Number.isInteger(parseInt(value))){
            const regexp = /^\d{10,11}$/; 
            if(regexp.exec(value) === null){
                return <small className="form-text text-danger">Số điện thoại phải có 10 - 11 chữ số.</small>;
            }
        }else{
            return <small className="form-text text-danger">bạn cần nhập số điện thoại</small>;
        }
    }

    static  required = (value) => {
        if (isEmpty(value)) {
            return <small className="form-text text-danger">This field is required</small>;
        }
    }
    static email = (value) => {
        if (!isEmail(value)) {
            return <small className="form-text text-danger">Invalid email format</small>;
        }
    }
      
    static minLength = (value) => {
        if (value.trim().length < 6) {
            return <small className="form-text text-danger">Password must be at least 6 characters long</small>;
        }
    }
}


export default Validate;