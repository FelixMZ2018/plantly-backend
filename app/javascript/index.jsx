import React, { setState, useState, useEffect } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { axiosInstance } from "./clients/axiosInstance";

import Sidebar from "./components/Sidebar";
import Breadcrumbs from "./components/Breadcrumbs";
import Notifications from "./components/Notifications";
import CentralWindow from "./components/CentralWindow";
import Dashboard from "./components/Dashboard";
import CreatePlant from "./components/Plants/CreatePlant";
import ViewPlant from "./components/Plants/ViewPlant";
import PrivateRoute from "./components/General/PrivateRoute";
import Login from "./components/Login_Signup/Login";
import Signup from './components/Login_Signup/Signup'

function App() {
  const [user, setUser] = useState({ user: null, token: null, auth: false });

  const handleLogin = (user) => {
    setUser(user);
  };

  const autoLogin = () => {
    console.log("YEAH");
    const token = localStorage.getItem("token");
    if (!(typeof token == undefined)) {
      console.log(token);
      axiosInstance
        .get("auto_login",
        { headers: {"Authorization" : `Bearer ${token}`} }
        )
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            localStorage.setItem("token", response.data.jwt);
            handleLogin({
              user: response.username,
              token: token,
              auth: true,
            });
          }
        });
    }
  }

  useEffect(() => {
    if (user.auth ===false) {
      autoLogin()
    }
  });

  return (
    <Router basename={"app"}>
      <div className="container w-screen h-screen p-0 text-textColor-primary">
        <div className="sticky flex flex-wrap item-center w-screen justify-between">
          <Link to="/">
            <div className="bg-gray p-2"> Sturdy Pancake! </div>
          </Link>
          <Breadcrumbs />
          <Notifications />
        </div>
        <div className="flex flex-row w-screen h-full">
          <Sidebar />
          <CentralWindow>
            <Switch>
              <Route
                path="/login"
                render={(props) => (
                  <Login {...props} handleLogin={handleLogin}/>
                )}
              />
                            <Route
                path="/signup"
                render={(props) => (
                  <Signup {...props}/>
                )}
              />
              <Route
                path="/plant/new"
                render={(props) => (
                  <CreatePlant
                    {...props}
                    group_id={props.location.state.group_id}
                  />
                )}
              />
              <PrivateRoute
                path="/plants/:id"
                auth={user.auth}
                component={ViewPlant}
                jwt={user.token}
              >
              </PrivateRoute>
              <PrivateRoute
                path="/"
                auth={user.auth}
                component={Dashboard}
                jwt={user.token}
                type={"production"}
              >
              </PrivateRoute>
            </Switch>
          </CentralWindow>
        </div>
      </div>
    </Router>
  );
}
export default App;
