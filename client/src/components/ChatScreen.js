import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import "../Styling/ChatScreen.css";

function ChatScreen() {
  return (
    <>
      <div className="app_body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/chat/:roomId">
              <Chat />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default ChatScreen;
