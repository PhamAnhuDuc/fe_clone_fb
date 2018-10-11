import React, { Component } from 'react';

class FormSignup extends Component {
    render() {
        return (
            <form className="form-horizontal">
                <div className="form-group">
					<label htmlFor="full_name3" className="col-sm-2 control-label">Full Name</label>
					<div className="col-sm-6">
						<input name="full_name" type="text" className="form-control" id="full_name3" placeholder="Your Full Name" />
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="email3" className="col-sm-2 control-label">Email</label>
					<div className="col-sm-6">
						<input name="email" type="email" className="form-control" id="email3" placeholder="Your Email" />
					</div>
				</div>
                <div className="form-group">
					<label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
					<div className="col-sm-6">
						<input name="password" type="text" className="form-control" id="inputPassword3" placeholder="Password" />
					</div>
				</div>
                <div className="form-group">
					<label htmlFor="phone3" className="col-sm-2 control-label">Phone</label>
					<div className="col-sm-6">
						<input name="phone" type="number" className="form-control" id="phone3" placeholder="Your Phone" />
					</div>
				</div>
                <div className="form-group">
					<label htmlFor="address3" className="col-sm-2 control-label">Address:</label>
					<div className="col-sm-6">
						<input name="address" type="text" className="form-control" id="address3" placeholder="Your Address" />
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
export default FormSignup;