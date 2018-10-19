import React, { Component ,Fragment } from 'react';
import { connect } from 'react-redux';
import { getSearchRequest } from './../actions/index';

class FormSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            strSearch : '',
            strSort : 'email'
        }
    }
    handleChange = (event) => {
        this.setState({
            strSearch: event.target.value
        });
    }
    handleSort = (sortBy) => {
        this.setState({
            strSort : sortBy,
            strSearch : '',
        })
        
    }
    handleSubmit = (event,sortBy) => {
        this.props.goSearch(this.state.strSearch, this.state.strSort);
    }
    render() {
        let  strSort = this.state.strSort;
        return(
            <div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="input-group">
                        <input type="text" name="strSearch" className="form-control" value = {this.state.strSearch} onChange={this.handleChange} placeholder="Search for..."/>
                        <span className="input-group-btn">
                            <button onClick={ this.handleSubmit } className="btn btn-info" type="button">Go!</button>
                        </span>
                    </div>
                </div>

                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="dropdown">
                        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Search by <span className="caret" />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a onClick={()=>this.handleSort('full_name')} role="button">Name</a></li>
                            <li><a onClick={()=>this.handleSort('email')} role="button">Email</a></li>
                        </ul>
                        <span className="label label-success label-medium">{ strSort }</span>
                    </div>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch,Props) => {
    return {
        goSearch : (search, sortBy) => {
            dispatch(getSearchRequest(search, sortBy));
       }
    }
}

export default connect (null,mapDispatchToProps)(FormSearch);