import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actChatItem } from './../../actions/index';

class SomeFriends extends Component {
   
    handleClick = () => {
        this.props.showChat();
    }
    render() {
        return(
            <div className="panel panel-primary wap-chat">
                <div className="panel-body">
                    <ul className="list-group list-item-chat">
                        <li onClick={ this.handleClick } className="list-group-item" >
                            <div className="media">
                                <div className="media-left">
                                <img src="/images/test1.jpg" alt = "aa" className="media-object" style={{width: 60}} />
                                </div>
                                <div className="media-body width-150">
                                    <h5 className="media-heading name-user">John Doe</h5>
                                    <i className="fa fa-circle-o user-online mg-l-10" aria-hidden="true"></i>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="media">
                                <div className="media-left">
                                <img src="/images/test1.jpg" alt = "aa" className="media-object" style={{width: 60}} />
                                </div>
                                <div className="media-body width-150 ">
                                    <h5 className="media-heading name-user">John Doe</h5>
                                    <i className="fa fa-circle-o user-online mg-l-10" aria-hidden="true"></i>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                        <div className="media">
                            <div className="media-left">
                                <img src="/images/test1.jpg" alt = "aa" className="media-object" style={{width: 60}} />
                                </div>
                                <div className="media-body">
                                    <h5 className="media-heading name-user">John Doe</h5>
                                    <i className="fa fa-circle-o user-online mg-l-10" aria-hidden="true"></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapDispathToProps = (dispatch, props) => {
    return { 
        showChat : () => {
            dispatch(actChatItem());
        }
    } 
    
}
export default connect(null,mapDispathToProps) (SomeFriends);