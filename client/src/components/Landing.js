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
        <h1>Remote connection with your team</h1>
        <p className="grey-text">
          Work together in ways that go beyond with easy video from anywhere
        </p>
        <Button variant="dark">
          <Link to="/chat" className="text-info">
            Chat Group
          </Link>
        </Button>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="w-100 text-center mt-2">
          <Button variant="dark" className="text-info" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </div>
      <OptionsProvider />
    </div>
  );
};
export default Landing;
