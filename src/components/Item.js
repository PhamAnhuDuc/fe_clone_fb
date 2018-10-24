import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriendRequest } from '../actions/index';

class Item extends Component {
    handlerAdd = (id) => {
        if(confirm("ban chac chan muon add ?")){ //eslint-disable-line
            this.props.onAdd(id);
        }
    }
    render() {
        let { item, index } = this.props;
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{item.full_name}</td>
                <td>{item.email}</td>
                <td> 
                    <button type="button" className="btn btn-primary"  onClick={() => this.handlerAdd(item.id)} >Add</button>
                </td>
            </tr> 
        );
    }
}
const mapDispactToProps = (dispatch, props) => {
	return {
		onAdd : (id) => {
			dispatch(addFriendRequest(id));
		}
	}
}
export default connect ( null, mapDispactToProps)(Item);