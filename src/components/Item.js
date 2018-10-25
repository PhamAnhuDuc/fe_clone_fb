import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Item extends Component {
    render() {
        let { item, index } = this.props;
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{item.full_name}</td>
                <td>{item.email}</td>
                <td> 
                    <Link to={`/user/${item.id}`} className="btn btn-success">Xem Trang Ca Nhan</Link>
                </td>
            </tr> 
        );
    }
}

export default Item;