import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ContentPost extends Component {

    render() {
        let {postData , isNewPost , email } = this.props;
        postData = postData ? postData : ''; 
        return(
            <div className="boder-post">
                {         
                    isNewPost ? 
                        postData.email_post ?
                            postData.email_post === postData.email_receive ? 
                                <span className="email-post-data">{postData.email_post}</span>
                            : <div><span className="email-post-data">{postData.email_post}</span> <div className="glyphicon glyphicon-play"></div><span className="email-post-data">{postData.email_receive}</span></div>
                        : localStorage.getItem('emailLogin') === email ?
                                <span className="email-post-data" >{localStorage.getItem('emailLogin')}</span>
                            : <div><span className="email-post-data" >{localStorage.getItem('emailLogin')}</span><div className="glyphicon glyphicon-play"></div><span className="email-post-data" >{email}</span></div>
                    :   postData.email_post === postData.email_receive ? 
                            <span className="email-post-data">{postData.email_post}</span>
                        : <div><span className="email-post-data">{postData.email_post}</span> <div className="glyphicon glyphicon-play"></div><span className="email-post-data">{postData.email_receive}</span></div>
                }
                    <div className="dropdown setting-post">
                        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <i className="fa fa-cog" aria-hidden="true"></i> <span className="caret" />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a href="google.com" role="button">Chỉ mình tôi</a></li>
                            <li><a href="google.com" role="button">Mọi Người</a></li>
                            <li><a href="google.com"  role="button">Chỉ bạn bè</a></li>
                        </ul>
                    </div>    
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