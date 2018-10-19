import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input';
// import Textarea from 'react-validation/build/textarea';
// import Validate from './../libs/Validate.js';
import React, { Component } from 'react';

class FormPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    
    handleChange = (event) => {
		const target = event.target;    // input selectbox
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        let { content } =  this.state;
        console.log(content);
        alert(
          `Selected file - ${
            this.fileInput.current
          }`
        );
      }
    render() {
        return (
            <Form onSubmit= {this.handleSubmit}>
            <label>
                Cảm nghĩ của bạn:
                <input value={this.state.value} onChange={this.handleChange} className="form-control" rows="5" />
                Select image:
                <input type="file" ref={this.fileInput} />
            </label>
            <button type="submit" className="btn btn-success post-form">POST</button>
            </Form>
        );
    }
}
export default FormPost;