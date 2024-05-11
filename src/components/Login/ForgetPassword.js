import React from 'react'
import { Button, Container, Form, Spinner } from 'react-bootstrap'
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from "../../config/api";
import "./Regestiration.css"
// import Resetpassword from './../../Pages/Resetpassword';

const Forgetpassword = () => {
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
  
         <div className="Forgetcontainer">
      <Container className="Forgetcontainer">
            <div className="forget-form">
              <Form className="form" onSubmit={handleSubmit} method="post">
                <h2 className="loginword"> Forget Passowrd </h2>
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
                  </Form.Text>
                </Form.Group>
                <Button className="submitbtn" type="submit" disabled={loading}>
                  {loading ? (
                    <div>
                      <Spinner animation="border" size="sm" />
                      Loading...
                    </div>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </Form>
            </div>
      </Container>
      <ToastContainer />
    </div>
  
  )
}

export default Forgetpassword
