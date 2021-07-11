import React, { useState } from "react";
import OptionsProvider from "./OptionsProvider";

import { Button, Alert } from "react-bootstrap";
import { useAuth } from "../Contents/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Landing = () => {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();
  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <div className="container-fluid landing">
      <div className="landing-text text-center mx-auto">
        <h1>Meet, chat, call in just one place</h1>
        <p className="grey-text">
          Work together in ways that go beyond with easy video chat application
          from anywhere
        </p>
        <Button variant="dark" className="ml-4">
          <Link to="/chat" className="text-info">
            Group Chat
          </Link>
        </Button>
        <Button variant="dark" className="ml-3">
          <Link to="/tictactoe" className="text-info">
            Play Tic-tac-toe
          </Link>
        </Button>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="w-100 text-center mt-2">
          <Button
            variant="dark"
            className="text-info ml-4"
            onClick={handleLogout}
          >
            Log Out
          </Button>
          <Button variant="dark" className="ml-5">
            <Link to="/update-profile" className="text-info">
              Update Profile
            </Link>
          </Button>
        </div>
      </div>
      <OptionsProvider />
    </div>
  );
};
export default Landing;
