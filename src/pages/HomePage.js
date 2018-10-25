import React, { Component } from 'react';
import ListPostHome from './../components/ListPostHome';
import { connect } from 'react-redux';

class HomePage extends Component {
    render() {
        return(
            <div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title">HomePage</h3>
				</div>
				<div className="panel-body">
					<ListPostHome/>
				</div>
			</div>
        ); 
    }
}


const mapDispathToProps = (dispatch ,props) => {
	return {
		// getAllPost : () => {
		// 	dispatch : 
		// }
	}
}

const mapStateToProps = state => {
	return {

	}
}
export default connect (mapStateToProps,mapDispathToProps)(HomePage);