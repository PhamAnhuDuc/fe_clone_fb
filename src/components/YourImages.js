import React, { Component } from 'react';
import { post } from 'axios';
class YourImages extends Component {
    constructor(props) {
        super(props);
        this.state ={
          file:null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
      }
      onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
          console.log(response.data);
        })
      }
      onChange(e) {
        this.setState({file:e.target.files[0]})
      }
      fileUpload(file){
        const url = 'http://example.com/file-upload';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config);
      }
    render() {
        return(
            <form name="userForm" onSubmit={this.onFormSubmit} >
                <div className="panel panel-default">
                    <div className="panel-heading text-center">
                        <h3 className="panel-title">Ảnh đại diện</h3>
                        <p>Thay đổi ảnh đại diện của bạn ở đây</p>
                    </div>
                    <div className="panel-body">
                        <div className="text-center">
                            <img alt="profile-image" src="/images/739_DucPA.jpg" id="blaha" alt="DucPA234" aria-hidden="true" role="presentation"  />
                            <div className="cropper-buttons clearfix">
                                <input onChange={this.onChange} accept="image/*" type="file" id="imgInp" className="my_file" name="avatar" required={true} />
                            </div>
                        </div>
                    </div>
                    <div className="panel-footer text-center">
                        <button className="btn btn-primary" type="submit">
                        Lưu ảnh đại diện
                        </button>
                    </div>
                </div>
          </form>
        );
    }
}
export default YourImages;


                       