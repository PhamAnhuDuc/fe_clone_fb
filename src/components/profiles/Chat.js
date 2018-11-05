import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actCloseChat } from './../../actions/index'; 


class Chat extends Component {
    handleClick = () => {
        this.props.close();
    }
    render() {
        return(
            <div className="panel panel-primary chat-item">
                <div className="panel-heading">Nguyễn Văn A</div>
                <i className="fa fa-times icon-close" aria-hidden="true" onClick={ this.handleClick } ></i>
                <div className="panel-body">
                    <div className="media">
                        <div className="media-left">
                        <img src="/images/test1.jpg" alt = "aa" className="media-object" style={{width: 60}} />
                        </div>
                        <div className="media-body">
                            <div className="media-heading name-user">trời hôm nay đẹp nhỉaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                        </div>
                    </div>
                    <div className="media">
                        <div className="media-body">
                        <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="media-right">
                        <img src="/images/test1.jpg" className="media-object" style={{width: 60}} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}      
const  mapDispathToProps = (dispatch, props) => {
    return {
        close : () => {
            dispatch(actCloseChat());
        }
    }
}
export default connect (null,mapDispathToProps)(Chat);