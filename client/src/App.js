import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import { AuthProvider } from "./Contents/AuthContext";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import ChatScreen from "./components/ChatScreen";

import Main from "./Main";
import Tictactoe from "./components/Tictactoe";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <AuthProvider>
            <PrivateRoute path="/" exact component={Main}></PrivateRoute>
            <PrivateRoute path="/chat" component={ChatScreen}></PrivateRoute>
            <PrivateRoute
              path="/update-profile"
              component={UpdateProfile}
            ></PrivateRoute>
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/forgot-password" exact component={ForgotPassword} />
            <Route path="/tictactoe" exact component={Tictactoe} />
          </AuthProvider>
        </Switch>
      </Router>
    </>
  );
};

export default App;
