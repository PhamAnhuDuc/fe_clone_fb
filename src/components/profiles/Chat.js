import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actCloseChat } from './../../actions/index'; 


class Chat extends Component {
    handleClick = (id) => {
        this.props.close(id);
    }
    render() {
        let {idChat} = this.props;
        return(
            <div className="panel panel-primary chat-item">
                    <div className="panel-heading">Nguyễn {idChat}</div>
                    <i className="fa fa-times icon-close" aria-hidden="true" onClick={() => this.handleClick(idChat) } ></i>
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
                            <div className="media-left">
                            <img src="/images/test1.jpg" alt = "aa" className="media-object" style={{width: 60}} />
                            </div>
                            <div className="media-body">
                                <div className="media-heading name-user">trời hôm nay đẹp nhỉaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                            </div>
                        </div>
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
                            <img src="/images/test1.jpg" alt="as" className="media-object" style={{width: 60}} />
                            </div>
                        </div>
                    </div>
                    <form>
                        <div className="form-group mg-b-0">
                            <textarea className="form-chat" rows={3} id="comment" defaultValue={""} />
                        </div>
                    </form>
                </div>
        );
    }
}      
const  mapDispathToProps = (dispatch, props) => {
    return {
        close : (id) => {
            dispatch(actCloseChat(id));
        }
    }
}
export default connect (null,mapDispathToProps)(Chat);


