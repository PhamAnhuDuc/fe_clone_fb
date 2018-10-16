import React, { Component } from 'react';

class ContentPost extends Component {
    render() {
        return(
            <div className="media">
                <div className="media-left">
                <img src="/images/test1.jpg" className="media-object" style={{width: 150}}  alt="test 02"/>
                </div>
                <div className="media-body">
                <h4 className="media-heading">John Doe</h4>
                <p>Lorem ipsum...</p>
                </div>
            </div>
        );
    }
}
export default ContentPost;