import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FormSignin from './../components/FormSignin';

class SinginPage extends Component {
    render() {
		let isLogin = localStorage.getItem("isLogIn");
		if(isLogin === 'true') {
			return <Redirect to="/profile" />;
		}
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
const mapStateToProp = state => {
	//console.log(state);
	return {
		user : state.user
	}
}
export default connect(mapStateToProp,null)(SinginPage);