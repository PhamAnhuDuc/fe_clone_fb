import React, { Component } from 'react';

import FormSignin from './../components/FormSignin';

class SinginPage extends Component {
    render() {
        return(
            <div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title">Sign In</h3>
				</div>
				<div className="panel-body">
					<FormSignin />
				</div>
			</div>
        ); 
    }
}
export default SinginPage;