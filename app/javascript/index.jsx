import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Breadcrumbs from "./components/Breadcrumbs";
import Notifications from "./components/Notifications";
import CentralWindow from "./components/CentralWindow";
import Dashboard from "./components/Dashboard";
import CreatePlant from "./components/Plants/CreatePlant";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container mx-auto">
        <div className="flex flex-wrap item-center">
          <Breadcrumbs />
          <Notifications />
          </div>
          <div className="flex flex-row flex-wrap">
          <Sidebar></Sidebar>

          <CentralWindow>
            <Switch>
              <Route path="/plant/new">
                <CreatePlant />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </CentralWindow>
          <Link to="/plant/new">Add a Plant</Link>
          <Link to="/">Home</Link>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
