import React, { Component } from 'react';
import {connect } from 'react-redux';
import { getInfoPostRequest, sendCommetnRequest } from './../actions/index';
import  ItemComment  from './../components/ItemComment';
class PostDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.props.getInfoPost(this.props.match.params.id);
        
    }
    
    handlerReply = (id) => {
        var x = document.getElementById("myDIV");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    handleChange(event) {
        this.setState({content: event.target.value});
    }
    
    handleSubmit(event) {
        let contentPost = {
            content : this.state.content,
            post_id : this.props.match.params.id,
        }
        
        if(localStorage.getItem('isLogIn') === 'true'){
            if(contentPost.content.length > 0){
                this.props.sendComment(contentPost);
            }
        }else {
            alert('Your need Login');
        }
        this.setState({
            content : '',
        });
        event.preventDefault();
    }

    showImg = (infoPost) =>{
        if(infoPost.image) {
            return (
                <img className="card-img-top" src={`http://homestead.test/images/${infoPost.image}`} alt="Card cap" />
            );
        }else{
            return '';
        }
    }
    showPost = (infoPost ,listComment,isNewComment) => {
        if(infoPost.id) {
            return (
                <div className="card-body width-400">
                    {
                        infoPost.email_receive === infoPost.email_post ?
                            <h4>{infoPost.email_receive}</h4>
                        : <h4>{infoPost.email_post} > {infoPost.email_receive}</h4>
                    }
                    <h5 className="card-title">{infoPost.content}</h5>
                    <h5 style={{color: 'red', cursor: 'pointer'}} onClick={ () => this.handlerReply(this.props.match.params.id) } >Comment</h5>
                    <div id={`myDIV`}  >
                        <div>{this.showItemComment(listComment , isNewComment)}</div>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.content} onChange={this.handleChange} name="content" maxLength={490} />
                            <input type="submit" value="Post" />
                        </form>
                    </div>
                </div>
            );
        }
    }
    render() {
        let {infoPost, listComment  ,isNewComment} = this.props;
        
        return(
            <div className="card" style={{width: '28rem'}}>
                {this.showImg(infoPost)}
                {this.showPost(infoPost , listComment , isNewComment)}
           </div>
        );
    }
    showItemComment = (listComment , isNewComment) => {
        let result = null;
        listComment = listComment ? listComment : '';
		if(listComment.length > 0){
			result = listComment.map((comment, index ) => {
				return (
					<ItemComment comment = {comment} index = {index} key={index} isNewComment = {isNewComment}/>
				);
			});
		}
		return result;
	}
}

const mapStateToProps = state => {
	return {
        infoPost : state.post.infoPost,
        listComment: state.post.listComment,
        isNewComment : state.post.isNewComment,
	}
}

const mapDispactToProps = (dispatch, props) => {
	return {
		getInfoPost : (id) => {
			dispatch(getInfoPostRequest(id));
        },
        sendComment : (content) => {
			dispatch(sendCommetnRequest(content));
		}
	}
}

export default connect (mapStateToProps, mapDispactToProps)(PostDetail);