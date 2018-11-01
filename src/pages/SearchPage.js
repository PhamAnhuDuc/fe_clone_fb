import React, { Component } from 'react';
import ListItem from '../components/ListItem';
import Item from '../components/Item';
import { connect } from 'react-redux';
import { addFriendRequest, getSearchRequest } from '../actions/index';
import { Link } from 'react-router-dom';

class SearchPage extends Component {
	constructor(props) {
		super(props);
		let url = window.location.href;
		let param = url.split('?');
		this.props.onSearch(param[param.length - 1]);
	}

	handleClick = (param) => {
		this.props.onSearch(param);
	}
	
    render() {
		let { items, textSearch, lastPage } = this.props;
		let result = '';
		
		if (lastPage > 0) {
			let arr = [];
			for (var i = 0; i < lastPage; i++) {
				arr.push({i}) ;
			}

			result = arr.map((page, index) => {
				return (
					<li className="page-item" key={index}>
						<Link to={`search?search=${textSearch}&page=${index + 1}`} onClick={() => this.handleClick(`search=${textSearch}&page=${index + 1}`) } className="page-link" >{index + 1}</Link>
					</li>
				);
			});
		}

        return(
	        <div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title">Search </h3>
				</div>
				<div className="panel-body">
					<ListItem>
						{this.showItem(items)}
					</ListItem>
					<nav aria-label="Page navigation example">
						<ul className="pagination" id="todo-app">
							<li className="page-item">
								<a className="page-link" href="#" aria-label="Previous">
									<span aria-hidden="true">«</span>
									<span className="sr-only">Previous</span>
								</a>
							</li>
							
							{ result }
							<li className="page-item">
								<a className="page-link" href="#" aria-label="Next">
									<span aria-hidden="true">»</span>
									<span className="sr-only">Next</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
        ); 
	}

	showItem(items){
		let result = null;
		if(items && items.length > 0) {
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
		textSearch : state.user.textSearch,
		lastPage: state.user.lastPage,
	}
}

const mapDispactToProps = (dispatch, props) => {
	return {
		onAdd : (id) => {
			dispatch(addFriendRequest(id));
		},
		onSearch: (param) => {
			dispatch(getSearchRequest(param));
		}
	}
}

export default connect (mapStateToProps, mapDispactToProps)(SearchPage);