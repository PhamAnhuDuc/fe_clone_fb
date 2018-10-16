import React, { Component } from 'react';

class FormPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        // alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                Cảm nghĩ của bạn:
                <textarea value={this.state.value} onChange={this.handleChange} className="form-control" rows="5" />
                Select image:
                <input type="file"/>
            </label>
            <button type="submit" className="btn btn-success post-form">POST</button>
            </form>

            
        );
    }
}
export default FormPost;