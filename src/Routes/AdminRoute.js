import React from "react";
import { Route, Redirect } from "react-router-dom";

// import { isAuthenticated } from "../redux/slices/auth";

// import { isAuthenticated } from "../helpers/authFetch";

const AdminRoute = ({ component: Component, ...rest }) => (
 
  <Route
    {...rest}
    render={props =>
      <Component {...props} />
    }
  />
  
);

export default AdminRoute;