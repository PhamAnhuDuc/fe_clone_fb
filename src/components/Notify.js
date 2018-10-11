import React, { Component } from 'react';
import {AlertContainer, Alert} from "react-bs-notifier";
import {connect} from 'react-redux';

class Notify extends Component {
    render() {
        // if(isShow === false) return null; //nếu = false thì ko cho nó hiển thị
        return (
            <div>
                <AlertContainer position="top-right" >
                    <Alert>
                        {123}
                    </Alert>
                </AlertContainer>
            </div>
        )
    }
}
export default Notify;