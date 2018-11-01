import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAccessTokenRequest } from '../../actions';
import { Redirect } from 'react-router-dom';

let $flag = false;
class Forgotpass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        $flag = true;
        event.preventDefault();
        let email = document.querySelector('input[type="email"]').value; 
        this.props.onChangeEmailPass({email: email});
    }
    render() {
        let {forgotPass, message} = this.props;
        if (forgotPass === false) {
            alert(message);
        }
        if (forgotPass === true) {
            return <Redirect to='/reset-pass' />
        }
        return(
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <form onSubmit={this.handleSubmit} >
                    <legend>Please enter an email to reset your password</legend>
                    <div className="form-group">
                    <label htmlFor="true" >Email</label>
                        <input type="email" className="form-control" placeholder="email" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch , props) => {
    return {
        onChangeEmailPass : (email) => {
            dispatch(actAccessTokenRequest(email));
        } 
    }
}
const mapStateToProps = state => {
    if ($flag) { //nếu true thì cho nó nhận state mới  
        $flag = false; //
        return {
            forgotPass : state.user.forgotPassWord,
            message: state.user.messageForgotPass
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Forgotpass);