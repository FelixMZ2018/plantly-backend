import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link, NavLink} from "react-router-dom";

import Sidebar from './components/Sidebar';
import Breadcrumbs from './components/Breadcrumbs';
import Notifications from './components/Notifications';
import CentralWindow from './components/CentralWindow';
import Dashboard from './components/Dashboard';

class App extends React.Component{
    render(){
        return(
         <Router>
            <div className="container">
                <Sidebar>

                </Sidebar>
                <Breadcrumbs/>
                <Notifications/>
                <CentralWindow>
                <Switch>
                    <Route path="/">
                        <Dashboard/>
                    </Route>
                </Switch>
                </CentralWindow>
                <Link to="/">Home</Link>

            </div>
        </Router>
        )
    }
}

export default App