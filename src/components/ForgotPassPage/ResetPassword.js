import React, { Component } from 'react';

import Validate from './../../libs/Validate.js';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { actResetPasswordRequest } from './../../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
           'access_token' : '',
           'password' : '',
           'password_confirmation': '',
           'flag': true,
        }
    }
    handleChange = (event) => {
        const target = event.target;   
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
            'flag': false,
        });
    }
    
    onSave = (event) => {
        event.preventDefault();
        let {access_token,password,password_confirmation} = this.state;
        let passwordObj = {
            access_token : access_token,
            newPassword : password,
            newPasswordConfirm : password_confirmation,
        }
        
        this.form.validateAll();
        if ( this.checkBtn.context._errors.length === 0 ) {
            this.props.onResetPassword(passwordObj);
        }
    }

    

    render() {
        let {message} = this.props;
        if (this.state.flag === true) {
            if(message) {
                alert(message);
            }
        }
        return(
            <Form name="userForm" onSubmit={this.onSave} ref={c => { this.form = c }}  >
                <div className="panel-body second-body">
                    <label>Access Token :</label>
                        <div className="form-group">
                            <Input onChange={this.handleChange}  validations={[Validate.required, Validate.minLength]} className="form-control" name="access_token" placeholder="access_token" required type="text" />
                        </div>
                    <label>Password:</label>
                    <div className="form-group">
                        <Input onChange={this.handleChange}  validations={[Validate.required, Validate.minLength]} className="form-control" name="password" placeholder="New PassWord" required type="password" />
                    </div>
                    <div className="form-group">
                        <Input onChange={this.handleChange}  validations={[Validate.required, Validate.minLength]} className="form-control" name="password_confirmation" placeholder="Re-type New Password" required type="password" />
                    </div>
                </div>
                <div className="panel-footer text-center">
                    <button className="btn btn-primary" type="submit">Change Password</button>
                    <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                </div>
            </Form>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onResetPassword : (data) => {
            dispatch(actResetPasswordRequest(data));
        }
    }
}

const mapStateToProps = state => {
    return {
        message : state.user.messageForgotPass
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(ResetPassword);