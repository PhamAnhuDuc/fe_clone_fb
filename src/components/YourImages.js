import React, { Component } from 'react';
import { connect} from 'react-redux';
import { actChangeImageRequest } from './../actions/index';
class YourImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileImage:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
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
        let data = {
            fileImage : this.state.image
        }
        this.props.changImage(data);
    }
    render() {
        
        return(
            <form name="userForm" onSubmit={this.handleSubmit} >
                <div className="panel panel-default">
                    <div className="panel-heading text-center">
                        <h3 className="panel-title">Avatar</h3>
                        <p>Change avatar</p>
                    </div>
                    <div className="panel-body">
                        <div className="text-center">
                        <input type="file" onChange={this.handleChange} name ="fileImage" className="filetype" id="group_image"/>
                        {
                            this.state.image ?
                                <img id="target" src={this.state.image} alt="aaa"/>
                            : ''
                        }
                        </div>
                    </div>
                    <div className="panel-footer text-center">
                        <button className="btn btn-primary" type="submit">
                            Save
                        </button>
                    </div>
                </div>
          </form>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        changImage : (avatar) => {
            dispatch(actChangeImageRequest(avatar));
        }
    }
} 
export default connect (null,mapDispatchToProps)(YourImages);


                       