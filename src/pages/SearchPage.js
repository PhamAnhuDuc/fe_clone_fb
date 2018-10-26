import React, { Component } from 'react';
import FormSearch from './../components/FormSearch';
import ListItem from '../components/ListItem';
import Item from '../components/Item';
import { connect } from 'react-redux';
import { addFriendRequest } from '../actions/index';

class SearchPage extends Component {

    render() {
		let items = this.props.items
        return(
            <div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title">Search </h3>
				</div>
				<div className="panel-body">
					<FormSearch />
					<ListItem>
						{this.showItem(items)}
					</ListItem>
				</div>
			</div>
        ); 
	}
	showItem(items){
		let result = null;
		if(items.length > 0) {
			result = items.map((item,index) => {
				return (
					<Item item = {item} index = {index} key={index} />
				); 
			});
		}
		return result;
	}
}

const mapStateToProps = state => {
	return {
		items : state.user.resultSearch,
	}
}

const mapDispactToProps = (dispatch, props) => {
	return {
		onAdd : (id) => {
			dispatch(addFriendRequest(id));
		}
	}
}

export default connect (mapStateToProps, mapDispactToProps)(SearchPage);