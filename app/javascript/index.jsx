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
import ViewPlant from "./components/Plants/ViewPlant"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container w-screen p-0 text-textColor-primary">
          <div className="flex flex-wrap item-center w-screen justify-between">
            <Link to="/">
              <div className="bg-gray p-2"> Sturdy Pancake! </div>
            </Link>
            <Breadcrumbs />
            <Notifications />
          </div>
          <div className="flex flex-row flex-wrap w-screen h-screen">
            <Sidebar></Sidebar>

            <CentralWindow>
              <Switch>
                <Route
                  path="/plant/new"
                  render={(props) => (
                    <CreatePlant
                      {...props}
                      group_id={props.location.state.group_id}
                    />
                  )}
                />
                <Route
                  path="/plants/:id"
                  render={(props) => (
                    <ViewPlant/>
                  )}
                />

                <Route path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </CentralWindow>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
