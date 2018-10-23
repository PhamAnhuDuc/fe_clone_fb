import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRequest } from '../actions/index';
import {Link} from 'react-router-dom';
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
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{friend.full_name}</td>
                <td>{friend.email}</td>
                <td><Link to={`/user/${friend.id}`} className="btn btn-success">Go</Link></td>
                <td><button onClick={() => this.handleDelete(friend.id)} type="submit" className="btn btn-danger">Delete</button></td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelete : (id) => {
            dispatch(deleteRequest(id));
        }
    }
}
export default connect (null,mapDispatchToProps) (Friend);