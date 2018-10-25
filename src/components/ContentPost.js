import React, { Component } from 'react';
import ItemComment from './../components/ItemComment';
class ContentPost extends Component {
    
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlerReply = (id) => {
        var x = document.getElementById("myDIV"+id);
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        let {postData , isNewPost ,index, email } = this.props;
        console.log(isNewPost);
        
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
                        <h5 style={{color: 'red', cursor: 'pointer'}} onClick={ () => this.handlerReply(postData.id) } >Bình Luận</h5>
                        <div id={`myDIV${index}`} style={{display: 'none'}} >
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" value={this.state.value} onChange={this.handleChange} />
                                <input type="submit" value="Submit" />
                            </form>
                            <ItemComment/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ContentPost;