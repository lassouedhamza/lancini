import React from "react";
import { Route, Routes,Redirect } from "react-router-dom";




const ClientRoute = ({ component: Component, ...rest }) => (
 
  <Route
    {...rest}
    render={props =>
      <Component {...props} />
    }
  />
  
);

export default ClientRoute;