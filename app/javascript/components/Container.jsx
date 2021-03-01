import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import CentralWindow from "./CentralWindow";
import Notifications from "./Notifications";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Container extends React.Component {
  render() {
    return (
      <Router>
        <div className="Container">
          <header className="Top-bar">
            <div className="Logo">Sturdy Pancake</div>
            <Breadcrumbs></Breadcrumbs>
            <Notifications></Notifications>
          </header>
          <Sidebar></Sidebar>
          <CentralWindow>
            <Switch>
              <Route exact path="/">
                <div>Dashboard</div>
              </Route>
              <Route path="/groups/create">
                <div> Create a Group </div>
              </Route>
              <Route path="/groups/:id">
                <div> View a Group </div>
              </Route>
            </Switch>
          </CentralWindow>
        </div>
      </Router>
    );
  }
}

export default Container;
