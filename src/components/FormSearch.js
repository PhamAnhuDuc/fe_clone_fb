import React, { Component} from 'react';
import { connect } from 'react-redux';
import { getSearchRequest } from './../actions/index';
import {Link} from 'react-router-dom';
class FormSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            strSearch : '',
        }
    }
    handleChange = (event) => {
        this.setState({
            strSearch: event.target.value
        });
    }
    
    handleSubmit = (event) => {
         this.props.goSearch(this.state.strSearch);
    }
    
    render() {
        return(
            <div className="search">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group">
                        <input type="text" name="strSearch" className="form-control" value = {this.state.strSearch} onChange={this.handleChange} placeholder="Search for..."/>
                        <span className="input-group-btn">
                            <Link to= '/search' onClick={ this.handleSubmit } className="btn btn-info" type="button">Go!</Link>
                        </span>
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