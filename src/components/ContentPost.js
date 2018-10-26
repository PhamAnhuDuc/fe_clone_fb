import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ContentPost extends Component {

    render() {
        let {postData , isNewPost ,index, email } = this.props;
        postData = postData ? postData : ''; 

        return(
            <div className="boder-post">
                {         
                    isNewPost ? 
                        postData.email_post ?
                            postData.email_post === postData.email_receive ? 
                                <span>{postData.email_post}</span>
                            : <div><span className="title-email">{postData.email_post}</span> <div className="glyphicon glyphicon-play"></div><span className="title-email">{postData.email_receive}</span></div>
                        : localStorage.getItem('emailLogin') === email ?
                                <span>{localStorage.getItem('emailLogin')}</span>
                            : <div><span>{localStorage.getItem('emailLogin')}</span> > <span>{email}</span></div>
                    :   postData.email_post === postData.email_receive ? 
                            <span>{postData.email_post}</span>
                        : <div><span className="title-email">{postData.email_post}</span> <div className="glyphicon glyphicon-play"></div><span className="title-email">{postData.email_receive}</span></div>
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
                        <Link to={`/post/${postData.id}`} style={{color: 'red', cursor: 'pointer'}} >Detail Post</Link>
                    </div>
                </div>
            </div>
        );
    }
}


export default ContentPost;