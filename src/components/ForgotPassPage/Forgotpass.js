import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actChangePassWordRequest  , actChangePassWordEmailRequest } from '../../actions';

class Forgotpass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({email: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.email);
        event.preventDefault();
    }
    render() {
        return(
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <form onSubmit={this.handleSubmit} >
                    <legend>Please enter an email to reset your password</legend>
                    <div className="form-group">
                    <label htmlFor="true" >Email</label>
                        <input type="email" className="form-control" placeholder="email" value={this.state.email} onChange={this.handleChange} />
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
            dispatch(actChangePassWordEmailRequest(email));
        } 
    }

    
}
export default connect (null, mapDispatchToProps)(Forgotpass);