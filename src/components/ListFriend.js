import React, { Component } from 'react';

class ListFriend extends Component {
    render() {
        return(
            <table className="table">
            <thead>
            <tr>
                <th>Full name</th>
                <th>Email</th>
                <th>Delete Friend</th>
            </tr>
            </thead>
        <tbody>
          <tr>
            <td>Default</td>
            <td>Defaultson</td>
            <td><i className ='glyphicon glyphicon-ok'></i></td>
          </tr>      
          <tr className="success">
            <td>Success</td>
            <td>Doe</td>
            <td><i className ='glyphicon glyphicon-remove'></i></td>
          </tr>
          <tr className="danger">
            <td>Danger</td>
            <td>Moe</td>
            <td><i className ='glyphicon glyphicon-remove'></i></td>
          </tr>
          <tr className="info">
            <td>Info</td>
            <td>Dooley</td>
            <td><i className ='glyphicon glyphicon-remove'></i></td>
          </tr>
        </tbody>
        </table>
        );
    }
}
export default ListFriend;