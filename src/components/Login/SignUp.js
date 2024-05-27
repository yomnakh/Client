import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import './Regestiration.css';
import loginimg from '../../Assets/login-security.gif'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from "../../config/api";
import Swal from 'sweetalert2';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await Api.post('/api/auth/register', { name, email, password });
      console.log('Login successful ^_^ , Token:', response.data);
      Swal.fire("success",`${response.data.message}`,"success")
      const token = response.data.token;
      localStorage.setItem("access_token", `Bearer ${token}`);

    } catch (error) {
      console.error('Register failed:', error.response.data);
      toast.error('Register failed: ' + error.response.data.message);
    } finally {
      setLoading(false); // Set loading state to false in both success and error cases
    }
  }

  return (
    <div className="Logincontainer registerContainer">
      <Container>
        <Row >

          <Col xlg={6} lg={6} md={6} s={12} xs={12}>

            <img className='loginimg' src={loginimg} alt='img' />

          </Col>

          <Col xlg={6} lg={6} md={6} s={12} xs={12} >
            <div className="login-form">

              <Form className='form registerForm' onSubmit={handleSubmit} method="post">
                <h2 className='loginword registerWord'>Register</h2>
                <Form.Group controlId="formBasicName">
                  <Form.Control className='logininput' onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control className='logininput' onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control className='logininput' onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
                </Form.Group>
                <Button className="submitbtn" type="submit" disabled={loading}>
                  {loading ? (
                    <div>
                      <Spinner animation="border" size="sm" />
                      Loading...
                    </div>
                  ) : (
                    'Register'
                  )}
                </Button>
                <Form.Text className="text-muted newaccount">
                  Have an account? <Link to={'/login'} className='loginlinks ' >Login</Link>
                </Form.Text>
              </Form>
            </div>
          </Col>


        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default Register;