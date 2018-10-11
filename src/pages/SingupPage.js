import React, { Component } from 'react';

import FormSignup from './../components/FormSignup';

class SignupPage extends Component {
    render() {
        return(
            <div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title">Sign Up</h3>
				</div>
				<div className="panel-body">
					<FormSignup />
				</div>
			</div>
        ); 
    }
}
export default SignupPage;