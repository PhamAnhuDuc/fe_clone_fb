import React, { Component } from 'react';

import {  NavLink } from 'react-router-dom';
import Account from './../components/Account';
import YourImages from './../components/YourImages';
import ListFriend from './../components/ListFriend';
import NotFound from './../components/NotFound';
import YourWall from './../components/YourWall';
import SomeFriends from './../components/profiles/SomeFriends';
import Chat from './../components/profiles/Chat';
import { connect} from 'react-redux';


const menuCourses = [
	{to: '/image'	, name: 'Avatar'},
	{to: '/account'	, name: 'Your Account'},
	{to: '/list-friend'	, name: 'List Friend'},
	{to: '/your-wall', name : 'Your Wall'}
];

class ProfilePage extends Component {

	constructor(props){
		super(props);
		this.state = {
			images : false,
			yourAccount : false,
			listFriend : false,
			yourWall : false
		}
	}
	
    render() {
		let {isShowChat, listFriendChat, listChat } = this.props;
		
		let {match} = this.props,
			main = '';
		let x = window.location.href;
		x = x.split('/');
		let lengthURL = x.length;

		if (x[lengthURL - 1] === '' ) {
			x.splice(lengthURL - 1, 1);
			lengthURL--;
		}

		if (((x[lengthURL-2] + '/' + x[lengthURL-1]) === 'profile/image') && lengthURL === 5) {
			main = <YourImages />;	
		}else if(((x[lengthURL-2] + '/' + x[lengthURL-1]) === 'profile/account') && lengthURL === 5 ) {
			main = <Account/>;
		}else if(((x[lengthURL-2] + '/' + x[lengthURL-1]) === 'profile/list-friend') && lengthURL === 5 ) {
			main = <ListFriend></ListFriend>;
		}else if(((x[lengthURL-2] + '/' + x[lengthURL-1]) === 'profile/your-wall') && lengthURL === 5 ) {
			main = <YourWall/>;
		}else if((x[lengthURL-1] === 'profile') && lengthURL === 4 ) {
			main = <YourWall/>;
		}else {
			main = <NotFound/>;
		}
		let {img} = this.props;
        return(
			<div>
				<div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
					<div className="panel panel-info">
					<div className="panel-heading">
						<h3 className="panel-title">ProfilePage</h3>
					</div>
					<div className="panel-body">
						<div className="media">
							<div className="media-left">
								<a href="google.com">
									{
										localStorage.getItem('avt_img') === 'null' ? 
											<img className="media-object" src={`http://homestead.test/images/no-user.jpg`} alt="duc" width={300}/>
										: 	 <img className="media-object" src={`http://homestead.test/images/${localStorage.getItem('avt_img')}`} alt="duc" width={300}/>
										}
								</a>

								<div className="list-group">
									{this.showMenus(match.url, menuCourses)}
								</div>
							</div>
							<div className="media-body">
								{main}
							</div>
						</div>
					</div>
				</div>
				</div>
				<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 some-friends">
					<div className="panel panel-primary wap-chat">
                		<div className="panel-body">
                    		<ul className="list-group list-item-chat">
							{this.showListFriendChat(listFriendChat)}
							</ul>
						</div>
					</div>
					<div className="list-chat">
						{this.showChat(isShowChat, listChat)}
					</div>
				</div>
			</div>
        ); 
	}
	showListFriendChat(listFriendChat) {
		let xhtml = null;
		listFriendChat = listFriendChat ? listFriendChat : [];
		if(listFriendChat.length > 0) {
			xhtml = listFriendChat.map((friend, index)=> {
				return <SomeFriends key={index} friend={friend} id={friend.id}/>
			})
		}
		return xhtml;
	}
	showChat(isShowChat, listChat) {
		listChat = listChat ? listChat : [];
		let html = '';
		if (listChat.length > 0 ) {
			html = listChat.map((chat, index) => {
				return <Chat key={index} idChat={chat}/>
			});
		}
		return html;
	}
	
	showMenus(url, menus){
    	let xhtml = null;
		if(menus.length > 0 ){
			xhtml = menus.map((menu, index)=> {
				let urlCourse =  url + menu.to;
				return (
					<NavLink key={index} exact to={urlCourse} activeClassName="active" className="list-group-item">
						{menu.name}
					</NavLink>
				);
			});
		}
    	return xhtml;
	}
}

const mapStateToProps = state => {
    return {
		img : state.user.changeImage,
		isShowChat : state.chat,
		listFriendChat: state.user.getUser.listFriend,
		listChat: state.chat.listChat,
    }
} 
export default connect (mapStateToProps,null)(ProfilePage);

