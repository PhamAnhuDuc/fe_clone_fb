import React, { Component } from 'react';
import FormPost from './FormPost';
import ContentPost from './ContentPost';


class YourWall extends Component {
    render() {
        return(
            <div>
                <div className="page-header">
                <FormPost/>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">Nội dung bài Post</div>
                    <div className="panel-body">
                        <ContentPost/>
                        <ContentPost/>
                        <ContentPost/>
                        <ContentPost/>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default YourWall;