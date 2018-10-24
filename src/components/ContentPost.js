import React, { Component } from 'react';


class ContentPost extends Component {
    
    render() {
        let {postData, user} = this.props;
        
        //console.log(user);
        
        return(
            <div className="boder-post">
                {
                    postData.email === postData.email_receive ? 
                        <span>{postData.email}</span>
                    : <span>{postData.email} > {postData.email_receive}</span>
                }
                <div className="media" >
                    <div className="media-left">
                        {
                            postData.image ? 
                                <img src={`http://homestead.test/images/${postData.image}`} className="media-object" style={{width: 150}}  alt="test 02"/> 
                            : ""
                        }
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{postData.content}</h4>
                    </div>
                </div>
            </div>
            
        );
    }
}


export default ContentPost;