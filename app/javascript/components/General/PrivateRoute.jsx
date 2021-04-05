import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  console.log(),
  (
    <Route
      {...rest}
      render={(props) =>
        auth === true ? <Component {...rest} /> : <Redirect to="/login" />
      }
    />
  )
);

export default PrivateRoute;
