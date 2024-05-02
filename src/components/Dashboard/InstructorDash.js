// import React, { useState } from "react";
// import { Table, Button, Modal, Form, FormGroup } from "react-bootstrap";
// import './Dashboard.css';

// const InstructorDash = () => {
//   const [isAddFormVisible, setIsAddFormVisible] = useState(false);
//   const [name, setName] = useState(""); // State for name input
//   const [email, setEmail] = useState(""); // State for email input
//   const [mobile, setMobile] = useState(""); // State for mobile input
//   const [contacts, setContacts] = useState([
//     { name: "Amit7777", email: "amit@gmail.com", mobile: "9307961978" },
//     { name: "Amit55555", email: "amit@gmail.com", mobile: "234567890" },
//     { name: "Amiit", email: "amit@gmail.com", mobile: "123456789" },
//     { name: "Amit", email: "amit@gmail.com", mobile: "123456789" },
//     { name: "Amit", email: "amit@gmail.com", mobile: "123456789" },
//     { name: "Admin", email: "admin@gmail.com", mobile: "7894561212" },
//   ]);
//   const [editedIndex, setEditedIndex] = useState(null); // State to track the index of the contact being edited

//   const handleShow = () => setIsAddFormVisible(true);

//   const handleClose = () => {
//     setIsAddFormVisible(false);
//     setEditedIndex(null); // Clear the edited index when closing the modal
//   };

//   const handleInputChange = (event) => {
//     const { target } = event;
//     const value = target.type === "email" ? target.value.toLowerCase() : target.value; // Lowercase email for consistency
//     switch (target.name) {
//       case "name":
//         setName(value);
//         break;
//       case "email":
//         setEmail(value);
//         break;
//       case "mobile":
//         setMobile(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newContact = { name, email, mobile };
//     if (editedIndex !== null) {
//       // If editing an existing contact, update it in the contacts array
//       const updatedContacts = [...contacts];
//       updatedContacts[editedIndex] = newContact;
//       setContacts(updatedContacts);
//     } else {
//       // If adding a new contact, add it to the contacts array
//       setContacts([...contacts, newContact]);
//     }
//     setName("");
//     setEmail("");
//     setMobile("");
//     handleClose();
//   };

//   const handleEdit = (index) => {
//     // Open the modal with the details of the contact to be edited
//     const contactToEdit = contacts[index];
//     setName(contactToEdit.name);
//     setEmail(contactToEdit.email);
//     setMobile(contactToEdit.mobile);
//     setEditedIndex(index);
//     setIsAddFormVisible(true);
//   };

//   const handleDelete = (index) => {
//     // Remove the contact at the specified index from the contacts array
//     const updatedContacts = contacts.filter((_, i) => i !== index);
//     setContacts(updatedContacts);
//   };

//   return (
//     <div>
//       <Modal show={isAddFormVisible} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{editedIndex !== null ? "Edit Contact" : "Add Contact"}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit}>
//             <FormGroup className="mb-3">
//               <Form.Label htmlFor="name">Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Name"
//                 id="name"
//                 name="name"
//                 value={name}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//             <FormGroup className="mb-3">
//               <Form.Label htmlFor="email">Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter Email"
//                 id="email"
//                 name="email"
//                 value={email}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//             <FormGroup className="mb-3">
//               <Form.Label htmlFor="mobile">Mobile</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Mobile Number"
//                 id="mobile"
//                 name="mobile"
//                 value={mobile}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" type="submit" onClick={handleSubmit}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>


//       <Table striped bordered hover className="custom-table m-auto">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {contacts.map((contact, index) => (
//             <tr key={index}>
//               <td>{contact.name}</td>
//               <td>{contact.email}</td>
//               <td>{contact.mobile}</td>
//               <td>
//                 <Button variant="primary" size="sm" onClick={() => handleEdit(index)}>
//                   Edit
//                 </Button>{" "}
//                 <Button variant="danger" size="sm" onClick={() => handleDelete(index)}>
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       <Button variant="primary" onClick={handleShow} className="m-auto">
//         Add
//       </Button>
//     </div>
//   );

// }

// export default InstructorDash


// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Table, Form, FormGroup } from 'react-bootstrap';
// import axios from 'axios';
// import Api from '../../config/api';
// import Swal from 'sweetalert2';

// const InstructorDash = () => {
//   const [isAddFormVisible, setIsAddFormVisible] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [instructors, setInstructors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchInstructors = async () => {
//     setIsLoading(true);
//     try {
//       const response = await Api.get('/api/users/all-instructors');
//       setInstructors(response.data);
//       console.log('Instructors fetched successfully:', instructors[0]._id);
//       setIsLoading(false);
//     } catch (error) {
//       console.error('Error fetching instructors:', error);
//       setIsLoading(false);
//     }
//   };

//   const addInstructor = async (newInstructor) => {
//     try {
//       const response = await Api.post('/api/users/instructor', newInstructor);
//       console.log('Instructor added successfully:', response.data);
//       Swal.fire({
//         icon: 'success',
//         title: 'Success!',
//         text: 'Instructor added successfully'
//       });
//       fetchInstructors();
//     } catch (error) {
//       console.error('Error adding instructor:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: `${error}`
//       });
//     }
//   };

//   const deleteInstructor = async (id) => {
//     try {
//       await Api.delete(`/api/users/${id}`);
//       console.log('Instructor deleted successfully');
//       fetchInstructors();
//     } catch (error) {
//       console.error('Error deleting instructor:', error);
//     }
//   };

//   useEffect(() => {
//     fetchInstructors();
//   }, []);

//   const handleShow = () => setIsAddFormVisible(true);

//   const handleClose = () => {
//     setIsAddFormVisible(false);
//     setName('');
//     setEmail('');
//     setPassword('');
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'email':
//         setEmail(value);
//         break;
//       case 'password':
//         setPassword(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newInstructor = { name, email, password };
//     addInstructor(newInstructor);
//     handleClose();
//   };

//   return (
//     <div>
// <Modal show={isAddFormVisible} onHide={handleClose}>
//   <Modal.Header closeButton>
//     <Modal.Title>Add Instructor</Modal.Title>
//   </Modal.Header>
//   <Modal.Body>
//     <Form onSubmit={handleSubmit}>
//       <FormGroup className="mb-3">
//         <Form.Label htmlFor="name">Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter Name"
//           id="name"
//           name="name"
//           value={name}
//           onChange={handleInputChange}
//         />
//       </FormGroup>
//       <FormGroup className="mb-3">
//         <Form.Label htmlFor="email">Email</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Enter Email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={handleInputChange}
//         />
//       </FormGroup>
//       <FormGroup className="mb-3">
//         <Form.Label htmlFor="password">Password</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter Instructor Password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={handleInputChange}
//         />
//       </FormGroup>
//     </Form>
//   </Modal.Body>
//   <Modal.Footer>
//     <Button variant="secondary" onClick={handleClose}>
//       Close
//     </Button>
//     <Button variant="primary" type="submit" onClick={handleSubmit}>
//       Save
//     </Button>
//   </Modal.Footer>
// </Modal>

//       <Table striped bordered hover className='w-75 mx-auto'>
//         <thead>
//           <tr className='text-center'>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {isLoading ? (
//             <tr>
//               <td colSpan="4">Loading...</td>
//             </tr>
//           ) : (
//             instructors.map((instructor, index) => (
//               <tr key={index}>
//                 <td className='text-dark bg-light'>{instructors[index]._id}</td>
//                 <td className='text-dark bg-light'>{instructor.name}</td>
//                 <td className='text-dark bg-light'>{instructor.email}</td>
//                 <td className='text-dark bg-light'>
//                   <Button
//                     variant="danger"
//                     size="sm"
//                     onClick={() => deleteInstructor(instructor._id)}
//                   >
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </Table>

//       <Button variant="primary" onClick={handleShow}>
//         Add Instructor
//       </Button>
//     </div>
//   );
// };

// export default InstructorDash;


import React, { useState, useEffect } from 'react';
import { Modal, Button, Table, Form, FormGroup } from 'react-bootstrap';
import axios from 'axios';
import Api from '../../config/api';
import Swal from 'sweetalert2';

const InstructorDash = () => {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [instructors, setInstructors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);

  const fetchInstructors = async () => {
    setIsLoading(true);
    try {
      const response = await Api.get('/api/users/all-instructors');
      setInstructors(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching instructors:', error);
      setError(error.response ? error.response.data.message : 'An error occurred');
      setIsLoading(false);
    }
  };

  const addInstructor = async (newInstructor) => {
    try {
      const response = await Api.post('/api/users/instructor', newInstructor);
      console.log('Instructor added successfully:', response.data);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Instructor added successfully'
      });
      fetchInstructors();
    } catch (error) {
      console.error('Error adding instructor:', error);
      setError(error.response ? error.response.data.message : 'An error occurred');
      if (error.response.status === 400) {
        // Handle validation errors
        const errorMessage = error.response.data.message;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errorMessage
        });
      } else {
        // Handle other types of errors
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An error occurred while adding the instructor'
        });
      }
    }
  };

  const deleteInstructor = async (id) => {
    try {
      await Api.delete(`/api/users/${id}`);
      console.log('Instructor deleted successfully');
      fetchInstructors();
    } catch (error) {
      console.error('Error deleting instructor:', error);
      setError(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  useEffect(() => {
    fetchInstructors();
  }, []);

  const handleShow = () => setIsAddFormVisible(true);

  const handleClose = () => {
    setIsAddFormVisible(false);
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newInstructor = { name, email, password };
    addInstructor(newInstructor);
    handleClose();
  };

  const filteredInstructors = instructors.filter((instructor) => {
    return instructor.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <div className="mb-3 w-75 mx-auto mt-5 d-flex">
        <Form.Control
          type="text"
          placeholder="Search by Instructor Name"
          value={searchQuery}
          onChange={handleSearch}
        />
        <Button variant="primary" onClick={handleShow} className='ms-4' style={{ width: "200px" }}>
          Add Instructor
        </Button>
      </div>

      <Table striped bordered hover className='w-75 mx-auto'>
        <thead>
          <tr className='text-center'>
            <th>Instructor</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="4" className='text-dark bg-light'>Loading...</td>
            </tr>
          ) : (
            filteredInstructors.map((instructor, index) => (
              <tr key={index}>
                <td className='text-dark bg-light'>  {instructor.avatar && <img className='h-100 w-100 rounded-circle' src={instructor.avatar.url} alt='img' />}</td>
                <td className='text-dark bg-light'>{instructors[index]._id}</td>
                <td className='text-dark bg-light'>{instructor.name}</td>
                <td className='text-dark bg-light'>{instructor.email}</td>
                <td className='text-dark bg-light'>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteInstructor(instructor._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      <Modal show={isAddFormVisible} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Instructor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                id="name"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Instructor Password"
                id="password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-around'>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Save
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InstructorDash;
