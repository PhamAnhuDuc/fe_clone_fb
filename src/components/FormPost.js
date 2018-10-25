import React, { Component } from 'react';
import { actPostRequest } from './../actions/index';
import { connect } from 'react-redux';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import {  isEmpty } from 'validator';

const required = (value) => {
    if (isEmpty(value)) {
        return <small className="form-text text-danger">This field is required</small>;
    }
}
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
            // console.log(event.target.files);
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({image: e.target.result});
            
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    
    handleSubmit(event) {
        event.preventDefault();
        let { content } =  this.state; 
        
        let url = window.location.href;
        let xResult = url.split("/");
        let lengthURL = xResult.length;
        let target_user_id;
        
        if (xResult[lengthURL - 1] === 'profile' || (xResult[lengthURL - 1] === 'your-wall')){
            target_user_id = localStorage.getItem('idUserLogin');
        } else if(xResult[lengthURL - 2] === 'user') {
            target_user_id = xResult[lengthURL - 1];
        }
        
        let contentPost = {
            content : content,
            fileImage : this.state.image,
            target_user_id : +target_user_id
        }
        this.form.validateAll();
        if ( this.checkBtn.context._errors.length === 0 ) {
            
            
			this.props.postReuslt(contentPost);
        }
    }
    render() {
        return (
            <Form onSubmit= {this.handleSubmit} ref={c => { this.form = c }} >
            <label>
                Cảm nghĩ của bạn:
                <Input validations={[required]} name ="content" onChange={this.handleChange} value={this.state.value} className="form-control content-post" rows="5" />
                Select image:
                <input type="file" onChange={this.handleChange} name ="fileImage" className="filetype" id="group_image"/>
                {
                    this.state.image ?
                        <img id="target" src={this.state.image} alt="aaa"/>
                    : ''
                }
            </label>
            <button type="submit" className="btn btn-success post-form">POST</button>
            <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
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