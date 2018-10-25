import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
//import {connect} from 'react-redux';

const MenuLink = ({ menu }) => {
	return (
		<Route path={menu.to} exact={menu.exact} 
			children=
				{ 
					({ match }) => {
						let active = (match !== null && match.isExact===true) ? "active" : "";
						return (
							<NavLink to={menu.to} className={`list-group-item ${active}`}>
								{menu.name}
							</NavLink>
						)
					}
				}
		/>
	)
}

class Menu extends Component {
	componentWillMount(){
		this.createMenu();
	}

	render() {
		return (
			<div className="list-group">{this.showMenus()}</div>
		);
	}
	createMenu(){
		let menus  = [];
		if(localStorage.getItem('isLogIn') === 'true') { //login
			menus.push({to: '/home', exact: true, name: 'Home'});
			menus.push({to: '/profile', exact: false, name: 'Profile'});
		}else{
			menus.push({to: '/signin', exact: true, name: 'Signin'});
			menus.push({to: '/signup', exact: true, name: 'Signup'});
			menus.push({to: '/search', exact: true, name: 'Search'});
		}
		return menus;
	}
	showMenus(){
		let xhtml = null;
		let menus  = this.createMenu();
		if(menus.length > 0 ){
			xhtml = menus.map((menu, index)=> {
				return (
					<MenuLink menu={menu} key={index} />
				);
			});
		}
    	return xhtml;
    }
}
export default Menu;
