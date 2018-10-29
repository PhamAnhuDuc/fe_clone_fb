import React, { Component } from 'react';

class ItemComment extends Component {
    
    showComment(comment, isNewComment) {
        if (isNewComment) {
            return (
                <div>
                    <h5>{localStorage.getItem('emailLogin')}:</h5>
                    <span>{comment.content}</span> 
                    <div>Time: {comment.created_at}</div>
                </div>
            )
        } else {
            return (
                <div>
                    <h5 className="item-email-comment">{comment.email_comment}</h5>
                    <span className="comment-content">{comment.content}</span> 
                    <div className="time-post">Time: {comment.created_at}</div>
                </div>
            );
        }
    }

    render() {
        let {comment , isNewComment} = this.props;
        return(
            <div className="mr-top-10">
                {this.showComment(comment , isNewComment)}
            </div>
        );
    }
}

export default ItemComment;