import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ContextProvider } from "./Context";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import ChatScreen from "./components/ChatScreen";

ReactDOM.render(
  <React.StrictMode>
    {/* <Router>
      <Switch> */}
        {/* <Route path="/" exact> */}
          <ContextProvider>
            <App />
          </ContextProvider>
        {/* </Route> */}
        {/* {/* <Route path="/chat" exact component={ChatScreen}></Route>
      </Switch>
    </Router> */}
  </React.StrictMode>, 
  document.getElementById("root")
);
