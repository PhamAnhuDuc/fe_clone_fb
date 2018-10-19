import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriendRequest } from './../actions/index';

class ChildItem extends Component {
    handlerAdd = (id) => {
       this.props.onAdd(id);
    }
    render() {
        let {child} = this.props; 
        let {index} = this.props;
        // console.log(child)
        // let {friendships } 
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{child.full_name}</td>
                <td>{child.email}</td>
                <td> 
                    <button type="button" className="btn btn-primary" onClick= {() => {this.handlerAdd(child.id) }}>Add</button>
                </td>
            </tr> 
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAdd : (id) => {
            dispatch(addFriendRequest(id));
       }
    }
}
const mapStateToProps = state => {
    //console.log('2');
    return {
        friendships : state.user.friendship
    }
}
export default connect (mapStateToProps,mapDispatchToProps) (ChildItem);


