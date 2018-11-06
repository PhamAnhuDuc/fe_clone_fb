import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actChatItem } from './../../actions/index';
import * as Config from './../../constants/Config';

class SomeFriends extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (id) => {
        this.props.showChat(id);
    }
    render() {
        let {friend, id} = this.props;
        return(
            <li onClick={() => this.handleClick(id) } className="list-group-item" >
                <div className="media">
                    <div className="media-left">
                    <img src={`${Config.API_URL_IMAGE}${friend.avatar_image}`} alt = "avt" className="media-object img-some-friend"/>
                    </div>
                    <div className="media-body width-150">
                        <h6 className="media-heading name-user">{friend.full_name}</h6>
                        <i className="fa fa-circle-o user-online mg-l-10" aria-hidden="true"></i>
                    </div>
                </div>
            </li>
        );
    }
}

const mapDispathToProps = (dispatch, props) => {
    return { 
        showChat : (id) => {
            dispatch(actChatItem(id));
        }
    } 
    
}
export default connect(null,mapDispathToProps) (SomeFriends);