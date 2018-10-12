import React, { Component } from 'react';

class ProfilePage extends Component {
    render() {
        return(
            <div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title">ProfilePage</h3>
				</div>
				<div className="panel-body">
					<FormSignin />
				</div>
			</div>
        ); 
    }
}
export default ProfilePage;