import React, { Component } from 'react';

import { connect } from 'react-redux';
import { actRegisterRequest } from './../actions/index';

class FormSignup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			full_name : '',
			email : '',
			password : '',
			password_confirm: '',
			phone : '',
			address : '',
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
		this.props.onAddUserRegister(userRegister);
	}
	
    render() {
		let {message} = this.props;
		console.log(message);
        return (
            <form className="form-horizontal" onSubmit={this.onSave}>
                <div className="form-group">
					<label htmlFor="full_name3" className="col-sm-2 control-label">Full Name</label>
					<div className="col-sm-6">
						<input name="full_name" value={this.state.full_name} onChange={this.handleChange} type="text" className="form-control" id="full_name3" placeholder="Your Full Name" />
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="email3" className="col-sm-2 control-label">Email</label>
					<div className="col-sm-6">
						<input name="email" value={this.state.email} onChange={this.handleChange} type="email" className="form-control" id="email3" placeholder="Your Email" />
					</div>
				</div>
                <div className="form-group">
				{
					message === undefined  ? '' : <div>aaaaaaaaaaaa</div>
						
			
				}
					<label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
					<div className="col-sm-6">
						<input name="password" value={this.state.password} onChange={this.handleChange}  type="text" className="form-control" id="inputPassword3" placeholder="Password" />
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="inputPassword4" className="col-sm-2 control-label">Password confirm</label>
					<div className="col-sm-6">
						<input name="password_confirm" value={this.state.password_confirm} onChange={this.handleChange}  type="text" className="form-control" id="inputPassword4" placeholder="Password confirm" />
					</div>
				</div>
                <div className="form-group">
					<label htmlFor="phone3" className="col-sm-2 control-label">Phone</label>
					<div className="col-sm-6">
						<input name="phone" value={this.state.phone} onChange={this.handleChange}  type="text" className="form-control" id="phone3" placeholder="Your Phone" />
					</div>
				</div>
                <div className="form-group">
					<label htmlFor="address3" className="col-sm-2 control-label">Address:</label>
					<div className="col-sm-6">
						<input name="address" value = {this.state.address} onChange={this.handleChange} type="text" className="form-control" id="address3" placeholder="Your Address" />
					</div>
				</div>
                <div className="form-group">
                    <div className="col-sm-10 col-sm-offset-2">
                        <button type="submit" className="btn btn-success">Sign Up</button>
                    </div>
                </div>
            </form>
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
	// console.log('asdasdasdasd', state);
    return {
        message: state.user.data_register.detail
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FormSignup);