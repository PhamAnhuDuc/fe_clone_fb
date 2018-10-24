import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actLoginRequest } from './../actions/index';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';

const required = (value) => {
	if (isEmpty(value)) {
		return <small className="form-text text-danger">This field is required</small>;
	}
  }
  
  const email = (value) => {
	if (!isEmail(value)) {
		return <small className="form-text text-danger">Invalid email format</small>;
	}
  }
  
  const minLength = (value) => {
	if (value.trim().length < 6) {
		return <small className="form-text text-danger">Password must be at least 6 characters long</small>;
	}
  }

  
class FormSignin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email : '',
			password : ''
		}
	}
	handleChange = (event) => {
		const target = event.target;    // input selectbox
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}
	handleSubmit = (event) => {
		let { email, password } = this.state;
		let userLogin = {
			email : email,
			password : password
		}
		event.preventDefault();
		this.form.validateAll();
        if ( this.checkBtn.context._errors.length === 0 ) {
			this.props.onLogin(userLogin);
        }
	}
	
    render() {
		return (
			<Form className="form-horizontal" onSubmit={this.handleSubmit} ref={c => { this.form = c }} >
				<div className="form-group">
					<label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
					<div className="col-sm-6">
						<Input  validations={[required, minLength, email]} name="email" value={this.state.email} onChange={this.handleChange} type="text" className="form-control" id="inputEmail3" placeholder="Email" />
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
					<div className="col-sm-6">
						<Input name="password" value={this.state.password} onChange={this.handleChange} validations={[required, minLength]} type="text" className="form-control" id="inputPassword3" placeholder="Password" />
					</div>
				</div>

				<div className="form-group">
					<div className="col-sm-offset-2 col-sm-6">
						<button type="submit" className="btn btn-success">Sign in</button>
						<CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
					</div>
				</div>
			</Form>
		);
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onLogin : (userLogin) => {
			dispatch(actLoginRequest(userLogin));
		},
	}
}
export default connect(null,mapDispatchToProps)(FormSignin);


