import React, { useContext } from "react";
import "./App.css";
import Landing from "./components/Landing";
import VideoPlayer from "./components/VideoPlayer";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { SocketContext } from "./Context";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import { AuthProvider } from "./Contents/AuthContext";
import Login from "./components/Login";
//import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";

const App = () => {
  const { renderLanding, renderCall } = useContext(SocketContext);

  return (
    <>
      {/* <Navbar />
      <div style={{ display: renderLanding() }}>
        <Landing />
      </div>
      <div style={{ display: renderCall() }}>
        <VideoPlayer />
      </div> */}
      <Router>
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <div style={{ display: renderLanding() }}>
              <Landing />
            </div>
            <div style={{ display: renderCall() }}>
              <VideoPlayer />
            </div>
          </Route>
          <AuthProvider>
            <Route path="/update-profile" component={UpdateProfile}></Route>
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/forgot-password" exact component={ForgotPassword} />
          </AuthProvider>
        </Switch>
      </Router>
    </>
  );
};

export default App;
