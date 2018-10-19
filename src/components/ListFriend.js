import React, { Component } from 'react';

class ListFriend extends Component {
    render() {
        return(
            <table className="table">
            <thead>
            <tr>
                <th>Full name</th>
                <th>Email</th>
                <th>Trang Ca nhan</th>
                <th>Delete </th>
            </tr>
            </thead>
        <tbody>
          <tr>
            <td>Default</td>
            <td>Defaultson</td>
            <td><button onClick={this.handleGo} type="submit" className="btn btn-success">Go</button></td>
            <td><button onClick={this.handleGo} type="submit" className="btn btn-danger">Delete</button></td>
          </tr>      
        </tbody>
        </table>
        );
    }
}
export default ListFriend;