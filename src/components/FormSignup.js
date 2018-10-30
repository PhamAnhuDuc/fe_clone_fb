import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actRegisterRequest } from './../actions/index';
import Validate from './../libs/Validate.js';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

class FormSignup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			full_name : '',
			email : '',
			password : '',
			password_confirm: '',
			phone : '',
			address : ''
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
		let {full_name,email,password,password_confirm,phone,address} = this.state;
		let userRegister = {
			full_name : full_name,
			email : email,
			password : password,
			password_confirm: password_confirm,
			phone : phone,
			address : address
		}
		
		this.form.validateAll();
		if ( this.checkBtn.context._errors.length === 0 ) {
			this.props.onAddUserRegister(userRegister);
        }
	}
	
	render() {
		let {message} = this.props;
        return (
            <Form className="form-horizontal" onSubmit={this.onSave} ref={c => { this.form = c }} >
                <div className="form-group">
					<label htmlFor="full_name3" className="col-sm-2 control-label">Full Name</label>
					<div className="col-sm-6">
						<Input name="full_name" 
							value={this.state.full_name} type="text" className="form-control" id="full_name3" placeholder="Your Full Name"
							onChange={this.handleChange} 
							validations={[Validate.required, Validate.minLength]}
						/>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="email3" className="col-sm-2 control-label">Email</label>
					<div className="col-sm-6">
						<Input name="email" validations={[Validate.required, Validate.minLength, Validate.email]} value={this.state.email} onChange={this.handleChange} type="email" className="form-control" id="email3" placeholder="Your Email" />
					</div>
					{message === undefined ? '' : message.email}
				</div>
                <div className="form-group">
					<label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
					<div className="col-sm-6">
						<Input name="password" validations={[Validate.required, Validate.minLength]} value={this.state.password} onChange={this.handleChange}  type="text" className="form-control" id="inputPassword3" placeholder="Password" />
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="inputPassword4" className="col-sm-2 control-label">Password confirm</label>
					<div className="col-sm-6">
						<Input name="password_confirm" validations={[Validate.required, Validate.minLength]} value={this.state.password_confirm} onChange={this.handleChange}  type="text" className="form-control" id="inputPassword4" placeholder="Password confirm" />
					</div>
						{message === undefined ? '' : message.password_confirm}
				</div>
                <div className="form-group">
					<label htmlFor="phone3" className="col-sm-2 control-label">Phone</label>
					<div className="col-sm-6">
						<Input name="phone" validations={[Validate.required, Validate.minLength,Validate.validateInputPhone]} value={this.state.phone} onChange={this.handleChange}  type="text" className="form-control" id="phone3" placeholder="Your Phone" />
					</div>
				</div>
                <div className="form-group">
					<label htmlFor="address3" className="col-sm-2 control-label">Address:</label>
					<div className="col-sm-6">
						<Input name="address" validations={[Validate.required, Validate.minLength]} value = {this.state.address} onChange={this.handleChange} type="text" className="form-control" id="address3" placeholder="Your Address" />
					</div>
				</div>
                <div className="form-group">
                    <div className="col-sm-10 col-sm-offset-2">
                        <button type="submit" className="btn btn-success">Sign Up</button>
						<CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                    </div>
                </div>
            </Form>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddUserRegister : (userRegister) => {
			dispatch(actRegisterRequest(userRegister));
		}
	}
}
const mapStateToProps = state => {
    return {
        message: state.user.messages
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FormSignup);