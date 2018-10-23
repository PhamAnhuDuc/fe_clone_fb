import React, { Component } from 'react';
import FormPost from './../components/FormPost';
import ContentPost from './../components/ContentPost';
import {connect } from 'react-redux';
import { actGetUserRequest } from './../actions/index';


class FriendPage extends Component {

    componentDidMount(){
        this.props.getInfo(this.props.match.params.id);
    }

    render() {
        let data = this.props.data;


        console.log(data);
        return (
            <div className="media">
                <div className="media-left">
                    <img src="/images/test1.jpg" className="media-object" style={{width: 160}} />
                    <div>Name : </div>  
                    <h5>{data ? data.full_name : ''}</h5>
                    <div>Email : </div>
                    <h5>{data ? data.email : ''}</h5>
                    <div>Phone : </div>
                    <h5>{data ? data.phone : ''}</h5>
                </div>
                <div className="media-body">
                    <div className="page-header">
                        <FormPost/>
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
            </div>
        );
    }
}

const mapDispathToProps = (dispatch , props) => {
    return {
        getInfo : (id) => {
            dispatch(actGetUserRequest(id));
        }
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    
    return {
        data : state.user.getUser.user
    }
}
export default connect(mapStateToProps,mapDispathToProps)(FriendPage);