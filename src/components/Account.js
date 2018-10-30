import React, { Component } from 'react';
import Validate from './../libs/Validate.js';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { actChangePassWordRequest } from './../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Sandwiches extends Component {
    constructor(props) {
        super(props);
        this.state = {
           'current_password' : '',
           'password' : '',
           'password_confirmation': ''
        }
    }
    handleChange = (event) => {
        const target = event.target;   
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    
    onSave = (event) => {
        event.preventDefault();
        let {current_password,password,password_confirmation} = this.state;
        let passwordObj = {
            passwordCurrent : current_password,
            newPassword : password,
            newPasswordConfirm : password_confirmation,
        }
        
        this.form.validateAll();
        if ( this.checkBtn.context._errors.length === 0 ) {
            this.props.onChangePassWord(passwordObj);
        }
    }
    render() {
        let isLogin = localStorage.getItem("isLogIn");
        if(isLogin !== 'true') {
            return <Redirect to='/signin'/>;
        }
        return(
            <Form name="userForm" onSubmit={this.onSave} ref={c => { this.form = c }}  >
                <div className="panel panel-default">
                <div className="panel-heading text-center">
                    <h3 className="panel-title">Account</h3>
                    <p>Edit and set up your account and change your password here</p>
                </div>
                <div className="panel-body">
                    <label>Email:</label> 
                    <div className="form-group">
                    <div className="input-group">
                        <input className="form-control" name="email" required type="text" disabled defaultValue="admin@gmail.com" id="disableEmail" />
                        <span className="input-group-btn">
                                <i className="fa fa-pencil" />
                        </span>  
                    </div>
                    </div>
                </div>
                <div className="panel-body second-body">
                    <label>Password:</label>
                    <div className="form-group">
                        <Input onChange={this.handleChange}  validations={[Validate.required, Validate.minLength]} className="form-control" name="current_password" placeholder="Current password" required type="password" />
                    </div>
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
                </div>
          </Form>
        );
    }
}
const mapDispatchToProps = (dispatch , props) => {
    return {
        onChangePassWord : (passwordObj) => {
            dispatch(actChangePassWordRequest(passwordObj));
        }
    }
}
export default connect(null, mapDispatchToProps) (Sandwiches);