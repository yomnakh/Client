// import React from 'react'
// import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
// import { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import loginimg from "../../Assets/login-security.gif";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Api from "../../config/api";
// import "./Regestiration.css"
// // import Resetpassword from './../../Pages/Resetpassword';

// const ResetPassword = () => {
//   const [loading, setLoading] = useState(false);

//   return (


//     <Container>
//       <div className="forget-form shadow">
//         <Form className="form" method="post">
//           <h2 className="loginword"> Reset Passowrd </h2>
//           <Form.Group controlId="formBasicPassword">
//             <Form.Control
//               className="logininput"
//               type="password"
//               placeholder="Password"

//             />
//             <Form.Text className="text-muted">
//             </Form.Text>
//           </Form.Group>
//           <Button className="submitbtn" type="submit" disabled={loading}>
//             {loading ? (
//               <div>
//                 <Spinner animation="border" size="sm" />
//                 Loading...
//               </div>
//             ) : (
//               'Submit'
//             )}
//           </Button>
//         </Form>
//       </div>
//     </Container>


//   )
// }

// export default ResetPassword


// ResetPassword.jsx
import React, { useState } from 'react';
import { Button, Container, Form, Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from "../../config/api";
import "./Regestiration.css";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const { userId, token } = useParams();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await Api.post(`/password/reset-password/${userId}/${token}`, { password });
      toast.success(response.data.message);
      navigate('/login')
    } catch (error) {
      toast.error(error.response.data.message);
    }

    setLoading(false);
  };

  return (
    <Container>
      <div className="forget-form shadow">
        <Form className="form" onSubmit={handleSubmit}>
          <h2 className="loginword"> Reset Password </h2>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              className="logininput"
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
      <ToastContainer />
    </Container>
  );
};

export default ResetPassword;
