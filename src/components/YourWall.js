import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FormPost from './FormPost';
import ContentPost from './ContentPost';
import { actLogout } from './../actions/index';

class YourWall extends Component {

    handleLogOut = (e) => {
        this.props.LogOut();
        this.setState({});
    }

    render() {
        let isLogin = (localStorage.getItem("isLogIn"));
        if(isLogin !== 'true') {
            return <Redirect to='/signin'/>;
        }
        return(
            <div>
                <div className="page-header">
                <FormPost/>
                <button onClick={this.handleLogOut} type="submit" className="btn btn-danger">LOGOUT</button>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">Nội dung bài Post</div>
                    <div className="panel-body">
                        <ContentPost/>
                        <ContentPost/>
                        <ContentPost/>
                        <ContentPost/>
                    </div>
                </div>
            </div>
            
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LogOut : () => {
            dispatch(actLogout());
        }
    }
}
const mapStateToProps = state => {
    return {
        isLogin2 : state.user.isLogin
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(YourWall);