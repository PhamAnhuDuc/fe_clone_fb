import React, { Component } from 'react';
import {Route, NavLink , Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { actLogout } from './../actions/index';

const MenuLink = ({ menu }) => {
	return (
		<Route path={menu.to} exact={menu.exact} 
			children = { 
				({ match }) => {
					let active = (match !== null && match.isExact===true) ? "active" : "";
					return (
						<div className="menu">
							<NavLink to={menu.to} className={`${active}`}>
								{menu.name}
							</NavLink>
						</div>
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
			<div className="list-group menu-right">
				{
					localStorage.getItem('isLogIn') ? <div className = "menu"><Link  to="/signin" onClick={this.props.LogOut}>LogOut</Link></div>
					: ""
				}
				{this.showMenus()}
			</div>
		);
	}
	createMenu(){
		let user = localStorage.getItem('isLogIn');
		let menus  = [];
		if(user === 'true') { //login
			menus.push({to: '/profile', exact: false, name: 'Profile'});
			menus.push({to: '/home', exact: true, name: 'Home'});
		}else{
			menus.push({to: '/signin', exact: true, name: 'Signin'});
			menus.push({to: '/signup', exact: true, name: 'Signup'});
		}
		return menus;
	}
	showMenus(){
		let xhtml = null;
		let menus  = this.createMenu();
		if(menus.length > 0 ){
			xhtml = menus.map((menu, index)=> {
				return (
					<MenuLink menu={menu} key={index}/>
				);
			});
		}
    	return xhtml;
	}
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        LogOut : () => {
            dispatch(actLogout());
        },
    }
}
const mapStateToProps = state => {
    return {
        isLogin: state.user.isLogin,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Menu);
