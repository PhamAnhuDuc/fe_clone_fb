import React, { Component } from 'react';
import Friend from './../components/Friend';
import { connect } from 'react-redux';
import { getAllListFriend } from '../actions/index';
import { Redirect } from 'react-router-dom';

class ListFriend extends Component {
    handleDelete = (id) => {
        this.props.onDelete(id);
    }
    componentDidMount() {
        this.props.fetchAllFriends();
    }
    render() {
        let isLogin = localStorage.getItem("isLogIn");
        if(isLogin !== 'true') {
            return <Redirect to='/signin'/>;
        }
        let friends = this.props.friends;
        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Add</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {this.showFriend(friends)}
                </tbody>
            </table>
        );
    }
    showFriend = (friends) => {
        let result = null;
		if(friends.length > 0){
			result = friends.map((friend, index ) => {
				return (
					<Friend friend = {friend} index = {index} key={index} />
				);
			});
		}
		return result;
	}
}

const mapStateToProps = state => {
	return {
		friends : state.user.listFriend
	}
}
const mapDispatchToProp = (dispatch, props) => {
    return {
        fetchAllFriends : () =>{
            dispatch(getAllListFriend());
        }
    }
}
 export default connect (mapStateToProps,mapDispatchToProp)(ListFriend);












