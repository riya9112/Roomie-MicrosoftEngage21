import React from "react";
import { Route, Redirect } from "react-router-dom";
//import { useAuth } from "../Contents/AuthContext";

//Private route setup
export default function PrivateRoute({ component: Component,authed, ...rest }) {
  //const { currentUser } = useAuth();

  return (
<Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />

    // <Route
    //   {...rest}
    //   render={(props) => {
    //     return currentUser ? (
    //       <Component {...props} />
    //     ) : (
    //       <Redirect to="/login" />
    //     );
    //   }}
    // ></Route>
  );
}
