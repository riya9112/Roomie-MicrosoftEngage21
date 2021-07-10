import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../Contents/AuthContext";
import { Link } from "react-router-dom";
import "../Styling/Style.css";
import mypassword from "../assets/mypassword.svg";
import Navbar from "./Navbar";

//forgot password screen

export default function ForgotPassword() {
  const emailRef = useRef();

  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setMessage("");
      setLoading(true);
      await resetPassword(emailRef.cuurent.value);
      setMessage("check your inbox for further instructions");
    } catch (err) {
      setError("Failed to reset password");
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
          <img src={mypassword} alt="" class="form__img" />

          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Password Reset</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    placeholder="abc@gmail.com"
                    required
                  />
                </Form.Group>

                <Button
                  disabled={loading}
                  className="w-100"
                  type="submit"
                  variant="dark"
                >
                  Reset Password
                </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/login" className="text-info">Log In?</Link>
              </div>
              <div className="w-100 text-center mt-2">
                Need An Account? <Link to="/signup" className="text-info">Sign Up</Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
