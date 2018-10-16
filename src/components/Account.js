import React, { Component } from 'react';

class Sandwiches extends Component {
    render() {
        return(
            <form name="userForm">
                <div className="panel panel-default">
                <div className="panel-heading text-center">
                    <h3 className="panel-title">Tài khoản</h3>
                    <p>Chỉnh sửa và cài đặt tài khoản của bạn và thay đổi mật khẩu của bạn ở đây</p>
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
                    <label>Mật khẩu:</label>
                    <div className="form-group">
                        <input className="form-control" name="current_password" placeholder="Mật khẩu hiện tại" required type="password" />
                    </div>
                    <div className="form-group">
                    <input className="form-control" name="password" placeholder="Mật khẩu mới" required type="password" />
                    </div>
                    <div className="form-group">
                    <input className="form-control" name="password_confirmation" placeholder="Gõ lại mật khẩu mới" required type="password" />
                    </div>
                </div>
                <div className="panel-footer text-center">
                    <button className="btn btn-primary" type="submit">
                        Đổi mật khẩu
                    </button>
                </div>
                </div>
          </form>
        );
    }
}
export default Sandwiches;