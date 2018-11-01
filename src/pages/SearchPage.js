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
	componentDidMount() {
		let tmp = this;
		document.addEventListener('DOMContentLoaded', function() {
			let app = document.getElementById('todo-app');
			let items = app.getElementsByClassName('page-link');
			for (let item of items) {
				item.addEventListener('click', function() {
					let url = item.href;
					let param = url.split('?');
					// alert(item.innerHTML);
					tmp.props.onSearch(param[param.length - 1]);
				});
			}
		});
	}
	
    render() {
		let items = this.props.items;
		let textSearch = this.props.textSearch;
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
							<li className="page-item"><Link to={`search?search=${textSearch}&page=1`} className="page-link" >1</Link></li>
							<li className="page-item"><Link to={`search?search=${textSearch}&page=2`} className="page-link" id="test2" >2</Link></li>
							<li className="page-item"><Link to={`search?search=${textSearch}&page=3`} className="page-link" >3</Link></li>
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
	// showLiMenu(pages) {
	// 	let result = null;
	// 	if (pages.length > 0 ) {
	// 		result = pages.map((item,index) => {
	// 			return (
	// 				<li className="page-item"><Link to={`search?search=${textSearch}&page=2`} className="page-link" id="test2" >2</Link></li>
	// 			);
	// 		});
	// 	}
	// }

	showItem(items) {
		let result = null;
		if (items.length > 0) {
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