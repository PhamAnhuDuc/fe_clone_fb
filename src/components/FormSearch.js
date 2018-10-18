import React, { Component } from 'react';

class FormSearch extends Component {
    render() {
        return(
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..."/>
                    <span className="input-group-btn">
                        <button className="btn btn-info" type="button">Go!</button>
                    </span>
                </div>
          </div>
        );
    }
}
export default FormSearch;