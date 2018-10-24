import React, { Component } from 'react';

import {  NavLink } from 'react-router-dom';
import Account from './../components/Account';
import YourImages from './../components/YourImages';
import ListFriend from './../components/ListFriend';
import NotFound from './../components/NotFound';
import YourWall from './../components/YourWall';



const menuCourses = [
	{to: '/image'	, name: 'Ảnh Đại Diện'},
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
        return(
            <div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title">ProfilePage</h3>
				</div>
				<div className="panel-body">
					<div className="media">
						<div className="media-left">
							<a href="google.com">
								<img className="media-object" src="/images/739_DucPA.jpg" alt="duc" />
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
        ); 
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


export default ProfilePage;
