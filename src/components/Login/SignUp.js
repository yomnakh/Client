// import React from 'react'
// import AboutImage from '../../Assets/AboutImage.jpg'
// import './Regestiration.css'

// const Login = () => {
//   return (
//     <div>
//       salma
//       <img className='aboutimg' src={AboutImage} />
//     </div>
//   )
// }

// export default Login ;

// import React from 'react';
// import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'; // Import React Bootstrap components
// import AboutImage from '../../Assets/AboutImage.jpg'
// const Login = () => {
//     return (
//         <Container className='myconatiner' >
//             <Row >

//             <Col xlg={6} lg={6}  md={12} sm={6} xs={6} >
//                 <img className='aboutimg' src={AboutImage} />
//                 </Col>
              
//                 <Col xlg={6} lg={6}  md={12} sm={6} xs={6} >
                 
//                     <Form className='imgcol'>
//                     <h2>Login</h2>
//                         <Form.Group controlId="username">
//                             <Form.Label>Username</Form.Label>
//                             <Form.Control type="text" placeholder="Enter your username" />
//                         </Form.Group>
//                         <Form.Group controlId="password">
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type="password" placeholder="Enter your password" />
//                         </Form.Group>
//                         <Button variant="primary" type="submit">
//                             Log In
//                         </Button>
//                     </Form>
//                 </Col>

//                 {/* Column for Image */}
               
//             </Row>
//         </Container>
//     );
// };

// export default Login;

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Regestiration.css';
import loginimg from '../../Assets/login-security.gif'

const Login = () => {
  return (
    <div className="Logincontainer">
      <Container>
        <Row >

        <Col xlg={6} lg={6} md={6} s={12} xs={12}>
            
            <img className='loginimg' src={loginimg} />
           
          </Col>  

          <Col xlg={6} lg={6} md={6} s={12} xs={12} >
            <div className="login-form">
             
              <Form className='form'>
              <h2 className='loginword'>Register</h2>
              <Form.Group controlId="formBasicName">
                  {/* <Form.Label className='inputhead'>FullName </Form.Label> */}
                  <Form.Control className='logininput' type="email" placeholder="Enter Your Name" />
                </Form.Group>
                
                <Form.Group controlId="formBasicEmail">
                  {/* <Form.Label className='inputhead'>Your Email </Form.Label> */}
                  <Form.Control className='logininput' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  {/* <Form.Label className='inputhead'>Password</Form.Label> */}
                  <Form.Control className='logininput' type="password" placeholder="Password" />
                  <Form.Text className="text-muted">
                    <a href="/forgot-password" className='loginlinks'>Forgot Password?</a>
                  </Form.Text>
                </Form.Group>
               <p><Button className='submitbtn' type="submit">
                  SignUp
                </Button></p> 
                <Form.Text className="text-muted newaccount">
                  Don't have an account? <a href="/signup" className='loginlinks ' >Login</a>
                </Form.Text>
              </Form>
            </div>
          </Col>

         
        </Row>
      </Container>
    </div>
  );
}

export default Login;