import React, { Component } from 'react';
// import './App.css';
import {
    BrowserRouter as Router,
    Route, 
    Switch
} from 'react-router-dom';
import routes from './../route-config';
import Title from './../components/Title';
import Notify from './../components/Notify';
import Menu from './../components/Menu';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Title/>
                    <Notify/>
                    <div className="row">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <Menu />
                        </div>
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                            {this.showRoute(routes)}
                            {/* { this.RouteConfigExample} */}
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
// const RouteConfigExample = () => (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/tacos">Tacos</Link>
//           </li>
//           <li>
//             <Link to="/sandwiches">Sandwiches</Link>
//           </li>
//         </ul>
//         {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
//       </div>
//     </Router>
//   );

// const RouteWithSubRoutes = route => (
//     <Route
//       path={route.path}
//       render={props => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   );
export default App;
