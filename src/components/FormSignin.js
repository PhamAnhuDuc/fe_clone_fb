import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actLoginRequest } from './../actions/index';

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
		this.props.onLogin(userLogin);
		event.preventDefault();
	}
	
    render() {
		return (
			<form className="form-horizontal" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
					<div className="col-sm-6">
						<input name="email" value={this.state.email} onChange={this.handleChange} type="text" className="form-control" id="inputEmail3" placeholder="Email" />
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
					<div className="col-sm-6">
						<input name="password" value={this.state.password} onChange={this.handleChange} type="text" className="form-control" id="inputPassword3" placeholder="Password" />
					</div>
				</div>

				<div className="form-group">
					<div className="col-sm-offset-2 col-sm-6">
						<button type="submit" className="btn btn-success">Sign in</button>
					</div>
				</div>
			</form>
		);
	}
}
const mapDispatchToProps = (dispatch, props) => {
	return {
		onLogin : (userLogin) => {
			dispatch(actLoginRequest(userLogin));
		}
	}
}
export default connect(null,mapDispatchToProps)(FormSignin);


