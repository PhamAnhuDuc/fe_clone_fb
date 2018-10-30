import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, 
    Switch
} from 'react-router-dom';
import routes from './../route-config';
import Menu from './../components/Menu';
import FormSearch from './../components/FormSearch';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="wapper-header">
                                 <FormSearch />
                                 <Menu />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {this.showRoute(routes)}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
    showRoute(routes){
        let xhtml=null;
        if(routes.length > 0) {
            xhtml = routes.map((route, index)=>{
                return(
                    <Route key={index} exact={route.exact} path={route.path} component={route.main}/>
                ); 
            }); 
        }
        return <Switch>{xhtml}</Switch>
    }
}
export default App;
