import React, { Component } from 'react';
import FormSearch from './../components/FormSearch';
import Item from './../components/Item';
class SearchPage extends Component {
    render() {
        return(
            <div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title">Search </h3>
				</div>
				<div className="panel-body">
					<FormSearch />
					<Item>
					</Item>
				</div>
			</div>
        ); 
    }
}

export default (SearchPage);