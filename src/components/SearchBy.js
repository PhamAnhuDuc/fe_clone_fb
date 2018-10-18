import React, { Component } from 'react';

class SearchBy extends Component {
    render() {
        return(
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Search by <span className="caret" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a onClick={()=>this.handleSort('name','asc')} role="button">Name</a></li>
                        <li><a onClick={()=>this.handleSort('name','desc')}role="button">Email</a></li>
                    </ul>
                    <span className="label label-success label-medium">Name</span>
                </div>
            </div>
        );
    }
}
export default SearchBy;

