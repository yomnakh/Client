// import React from 'react'
// import { Button, Container, Form, Spinner } from 'react-bootstrap'
// import { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Api from "../../config/api";
// import "./Regestiration.css"
// // import Resetpassword from './../../Pages/Resetpassword';

// const Forgetpassword = () => {
//   const [loading, setLoading] = useState(false);


//   return (
//     <Container className="Forgetcontainer">
//       <div className="forget-form shadow">
//         <Form className="form" method="post">
//           <h2 className="loginword"> Forget Passowrd </h2>
//           <Form.Group controlId="formBasicEmail">
//             <Form.Control
//               className="logininput"
//               type="email"
//               placeholder="Enter email"
//             />
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
//       <ToastContainer />
//     </Container>

//   )
// }

// export default Forgetpassword

// Forgetpassword.jsx
import React, { useState } from 'react';
import { Button, Container, Form, Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from "../../config/api";
import "./Regestiration.css";

const Forgetpassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setEmail("")

    try {
      const response = await Api.post("/password/forgot-password", { email });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }

    setLoading(false);
  };

  return (
    <Container className="Forgetcontainer">
      <div className="forget-form shadow">
        <Form className="form" onSubmit={handleSubmit}>
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

export default Forgetpassword;

