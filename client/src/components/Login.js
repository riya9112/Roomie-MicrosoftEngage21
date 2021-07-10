import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../Contents/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "../Styling/Login.css";
import logimg from "../assets/logimg.svg";
import Navbar from "./Navbar";

//login screen

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <>
      <Navbar />
      <div class="l-form">
        <div class="shape1"></div>
        <div class="shape2"></div>
        <div class="form">
          <img src={logimg} alt="" class="form__img" />

          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email" className="form__div-input">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password" className="form__div-input">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>

                <Button
                  disabled={loading}
                  className="w-100"
                  type="submit"
                  variant="dark"
                >
                  Log In
                </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/forgot-password" className="text-info">
                  Forgot Password?
                </Link>
              </div>
              <div className="w-100 text-center mt-2">
                Need An Account?{" "}
                <Link to="/signup" className="text-info">
                  Sign Up
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
