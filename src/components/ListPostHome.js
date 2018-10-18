import React, { Component } from 'react';

class ListPostHome extends Component {
    
    render() {
        return(
            <div className="media list-post-home">
                <div className="media-left">
                <img src="/images/test1.jpg" className="media-object " style={{width: 160}} alt = "test1"/>
                </div>
                <div className="media-body">
                <h4 className="media-heading">John Doe</h4>
                <p>Lorem ipsum...</p>
                </div>
            </div>
        );
    }
}
export default ListPostHome;