import React, { Component } from 'react';
import FormSearch from './../components/FormSearch';
import SearchBy from './../components/SearchBy';

class SearchPage extends Component {
    render() {
        return(
            <div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title">Search </h3>
				</div>
				<div className="panel-body">
					<FormSearch />
                    <SearchBy/>
				</div>
			</div>
        ); 
    }
}

export default (SearchPage);