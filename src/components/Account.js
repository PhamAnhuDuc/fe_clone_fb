import React, { Component } from 'react';

class Sandwiches extends Component {
    render() {
        return(
            <form name="userForm">
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
                            {/* <a className="btn btn-default" type="button" id="customEmail"> */}
                                <i className="fa fa-pencil" />
                            {/* </a> */}
                        </span>  
                    </div>
                    </div>
                </div>
                <div className="panel-body second-body">
                    <label>Password:</label>
                    <div className="form-group">
                        <input className="form-control" name="current_password" placeholder="Current password" required type="password" />
                    </div>
                    <div className="form-group">
                    <input className="form-control" name="password" placeholder="New PassWord" required type="password" />
                    </div>
                    <div className="form-group">
                    <input className="form-control" name="password_confirmation" placeholder="Re-type New Password" required type="password" />
                    </div>
                </div>
                <div className="panel-footer text-center">
                    <button className="btn btn-primary" type="submit">
                        Change Password
                    </button>
                </div>
                </div>
          </form>
        );
    }
}
export default Sandwiches;