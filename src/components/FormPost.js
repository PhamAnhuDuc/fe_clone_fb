import Form from 'react-validation/build/form';
import React, { Component } from 'react';
import { actPostRequest } from './../actions/index';
import { connect } from 'react-redux';
class FormPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content : '',
            fileImage:'',
        };
        this.onDrop = this.onDrop.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
        
    }
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
    handleChange = (event) => {
		const target = event.target;    // input selectbox
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
        });
        
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({image: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        let { content,fileImage } =  this.state;
        let fileImageArr = fileImage.split("\\");
        let result= '/images/' + fileImageArr[(fileImageArr.length-1)];
        
        // if(idFriend > 0) {
        //     idFriend 
        // }
        
        let url = window.location.href;
        let xResult = url.split("/");
        let idFriend = xResult[xResult.length-1];
        console.log(idFriend);



        let contentPost = {
            content : content,
            urlImg : result,
            target_user_id : localStorage.getItem('idUserLogin')
        }
        this.props.postReuslt(contentPost);
    }

    render() {
        
        return (
            <Form onSubmit= {this.handleSubmit}>
            <label>
                Cảm nghĩ của bạn:
                <input name ="content" value={this.state.value} onChange={this.handleChange} className="form-control" rows="5" />
                Select image:
                <input type="file" onChange={this.handleChange} name ="fileImage" className="filetype" id="group_image"/>
                <img id="target" src={this.state.image}/>
            </label>
            <button type="submit" className="btn btn-success post-form">POST</button>
            </Form>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        postReuslt : (contentPost) => {
            dispatch(actPostRequest(contentPost));
        }
    }
}
export default connect (null,mapDispatchToProps) (FormPost);