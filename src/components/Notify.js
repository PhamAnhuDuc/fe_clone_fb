import React, { Component } from 'react';
//import {ToastContainer, ToastStore} from 'react-toasts';
import {connect} from 'react-redux';

class Notify extends Component {
    
    render() {
        return (
            <div>
                {/* <button onClick={() => }>Click me !</button> */}
                {/* <ToastContainer store={ToastStore}/> */}
            </div>
        )
    }
}
const mapStateToProp = state => {
    return {
        message : state.user.messages
    }
} 
export default connect (mapStateToProp, null) (Notify);