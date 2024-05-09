import React, { useState } from "react";
import axios from 'axios';
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import "./Regestiration.css";
import { Link, useNavigate } from 'react-router-dom';
import loginimg from "../../Assets/login-security.gif";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from "../../config/api";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await Api.post('/api/auth/login', { email, password });
      console.log(response.data);
      navigate('/');
      const token = response.data.token;
      localStorage.setItem("access_token", `${token}`);
      localStorage.setItem('userData', JSON.stringify(response.data));
      // Set user's authentication status
      localStorage.setItem('isLoggedIn', true);

    } catch (error) {
      console.error('Login failed:', error.response.data);
      setError(error.response.data.message);
      toast.error('Login failed: ' + error.response.data.message);
    } finally {
      setLoading(false); // Set loading state to false in both success and error cases
    }
  }

  return (
    <div className="Logincontainer">
      <Container>
        <Row>
          <Col xlg={6} lg={6} md={6} s={12} xs={12}>
            <img className="loginimg" src={loginimg} alt="Login" />
          </Col>

          <Col xlg={6} lg={6} md={6} s={12} xs={12}>
            <div className="login-form">
              <Form className="form" onSubmit={handleSubmit} method="post">
                <h2 className="loginword"> Login </h2>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    className="logininput"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    className="logininput"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    <a href="/forgot-password" className="loginlinks">
                      Forgot Password?
                    </a>
                    <Link to="/forgot-password" className="loginlinks">
                    forgetpassword
                  </Link>
                  </Form.Text>
                </Form.Group>
                <Button className="submitbtn" type="submit" disabled={loading}>
                  {loading ? (
                    <div>
                      <Spinner animation="border" size="sm" />
                      Loading...
                    </div>
                  ) : (
                    'Login'
                  )}
                </Button>
                <Form.Text className="text-muted newaccount">
                  Don't have an account?{" "}
                  <Link to="/register" className="loginlinks">
                    Sign up
                  </Link>
                </Form.Text>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default Login;
