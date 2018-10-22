import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRequest } from '../actions/index';

class Friend extends Component {
    constructor(props){
        super(props);
    }
    handleDelete = (id) => {
        this.props.onDelete(id);
    }
    
    render() {
        let {friend,index} = this.props;
        let {friends} = this.props;
        console.log(friends);
        
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{friend.full_name}</td>
                <td>{friend.email}</td>
                <td><button onClick={this.handleGo} type="submit" className="btn btn-success">Go</button></td>
                <td><button onClick={() => this.handleDelete(friend.id)} type="submit" className="btn btn-danger">Delete</button></td>
            </tr>
        );
    }
}

// const mapStateToProps = state => {
//     //console.log(state);
//     return {
//         friends : state.user.listFriend
//     }
// }

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelete : (id) => {
            dispatch(deleteRequest(id));
        }
    }
}
export default connect (null,mapDispatchToProps) (Friend);