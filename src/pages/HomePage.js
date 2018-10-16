import React, { Component } from 'react';

import FormSearch from './../components/FormSearch';
import ListPostHome from './../components/ListPostHome';

class ProfilePage extends Component {
    render() {
        return(
            <div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title">HomePage</h3>
					
				</div>
				<div className="panel-body">
					<FormSearch/>
					<ListPostHome/>
					<ListPostHome/>
				</div>
			</div>
        ); 
    }
}
export default ProfilePage;