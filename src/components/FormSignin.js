import React, { Component } from 'react';

class FormSignin extends Component {
    render() {
		return (
			<form className="form-horizontal">
				<div className="form-group">
					<label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
					<div className="col-sm-6">
						<input name="email" type="text" className="form-control" id="inputEmail3" placeholder="Email" />
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
					<div className="col-sm-6">
						<input name="password" type="text" className="form-control" id="inputPassword3" placeholder="Password" />
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
export default FormSignin;


