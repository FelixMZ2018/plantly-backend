import React,{setState,useState} from "react";
import {
  HashRouter as Router,
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
import Login from './components/Login'
import PrivateRoute from './components/General/PrivateRoute'

function App () {
  const [user, setUser] = useState({user: null,token: null,auth: false})

  const handleLogin = (user) => {
    setUser(user)
  }

    return (
      <Router basename={"app"}>
        <div className="container w-screen p-0 text-textColor-primary">
          <div className="flex flex-wrap item-center w-screen justify-between">
            <Link to="/">
              <div className="bg-gray p-2"> Sturdy Pancake! </div>
            </Link>
            <Breadcrumbs />
            <Notifications />
          </div>
          <div className="flex flex-row flex-wrap w-screen h-screen">
            <Sidebar/>
            <CentralWindow>
              <Switch>
              <Route
                  path="/login"
                  render={(props) => (
                    <Login
                      {...props}
                      handleLogin={handleLogin}
                    />
                  )}
                />                
                <PrivateRoute path="/" component={Dashboard} auth={user.auth}/>
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
              </Switch>
            </CentralWindow>
          </div>
        </div>
      </Router>
    );
  }
export default App;
