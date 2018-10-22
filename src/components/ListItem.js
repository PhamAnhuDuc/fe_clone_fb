import React, { Component } from 'react';
class ListItem extends Component {
    render() {
        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Add</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        );
    }
}


export default ListItem;





