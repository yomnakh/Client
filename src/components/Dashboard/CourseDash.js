// import React from 'react'

// const CourseDash = () => {
//     return (
//         <div>CourseDash


            
//         </div>
//     )
// }

// export default CourseDash


// import React from "react";
// import { useState } from "react";
// import { Table, Button, Modal, Form  } from "react-bootstrap";
// import './Dashboard.css';

// function CourseDash() {
//   const [isAddFormVisible, setIsAddFormVisible] = useState(false)
  // const contacts = [
  //   { name: "Amit7777", email: "amit@gmail.com", mobile: "9307961978" },
  //   { name: "Amit55555", email: "amit@gmail.com", mobile: "234567890" },
  //   { name: "Amiit", email: "amit@gmail.com", mobile: "123456789" },
  //   { name: "Amit", email: "amit@gmail.com", mobile: "123456789" },
  //   { name: "Amit", email: "amit@gmail.com", mobile: "123456789" },
  //   { name: "Admin", email: "admin@gmail.com", mobile: "7894561212" },
  // ];

//   const handleShow = () => setIsAddFormVisible(true);

//   // Function to handle the closing of the modal
//   const handleClose = () => setIsAddFormVisible(false);
//   return (

// <>
//     <Button variant="primary" onClick={handleShow}>
//     Add
//   </Button>

//   <Modal show={isAddFormVisible} onHide={handleClose}>
//     <Modal.Header closeButton>
//       <Modal.Title>Add Contact</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       <Form>
//         {/* Form fields go here */}
//       </Form>
//     </Modal.Body>
//     <Modal.Footer>
//       <Button variant="secondary" onClick={handleClose}>
//         Close
//       </Button>
//       <Button variant="primary" onClick={/* TODO: Add submit handler */}>
//         Save Changes
//       </Button>
//     </Modal.Footer>
//   </Modal>


    // <Table striped bordered hover className="custom-table">
    //   <thead>
    //     <tr>
    //       <th>Name</th>
    //       <th>Email</th>
    //       <th>Mobile</th>
    //       <th>Actions</th>
    //     </tr>
    //   </thead>
    //   <tbody className="">
    //     {contacts.map((contact) => (
    //       <tr key={contact.name}>
    //         <td>{contact.name}</td>
    //         <td>{contact.email}</td>
    //         <td>{contact.mobile}</td>
    //         <td>
    //           <Button variant="primary" size="sm">
    //             Edit
    //           </Button>{" "}
    //           <Button variant="danger" size="sm">
    //             Delete
    //           </Button>
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </Table>
//     </>
//   );
// }

// export default CourseDash;



// import React from "react";
// import { useState } from "react";
// import { Table, Button, Modal, Form ,FormGroup } from "react-bootstrap";
// import './Dashboard.css';

// function CourseDash() {
//   const [isAddFormVisible, setIsAddFormVisible] = useState(false);
//   const [name, setName] = useState(""); // State for name input
//   const [email, setEmail] = useState(""); // State for email input
//   const [mobile, setMobile] = useState(""); // State for mobile input
// const [contacts, setContacts] =useState ([
//       { name: "Amit7777", email: "amit@gmail.com", mobile: "9307961978" },
//       { name: "Amit55555", email: "amit@gmail.com", mobile: "234567890" },
//       { name: "Amiit", email: "amit@gmail.com", mobile: "123456789" },
//       { name: "Amit", email: "amit@gmail.com", mobile: "123456789" },
//       { name: "Amit", email: "amit@gmail.com", mobile: "123456789" },
//       { name: "Admin", email: "admin@gmail.com", mobile: "7894561212" },
//     ]);

//   const handleShow = () => setIsAddFormVisible(true);

//   const handleClose = () => setIsAddFormVisible(false);

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
//     // Add validation logic here if needed
//     const newContact = { name, email, mobile };
//     // Add the new contact to your contacts array (implement your logic here)
//     setContacts([...contacts, newContact]);
//     setName("");
//     setEmail("");
//     setMobile("");
//     handleClose(); // Close the modal after successful submission
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Add Contact
//       </Button>

//       <Modal show={isAddFormVisible} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Contact</Modal.Title>
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

//       <Table striped bordered hover className="custom-table">
//       <Table striped bordered hover className="custom-table">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Mobile</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody className="">
//         {contacts.map((contact) => (
//           <tr key={contact.name}>
//             <td>{contact.name}</td>
//             <td>{contact.email}</td>
//             <td>{contact.mobile}</td>
//             <td>
//               <Button variant="primary" size="sm">
//                 Edit
//               </Button>{" "}
//               <Button variant="danger" size="sm">
//                 Delete
//               </Button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//       </Table>
//     </>
//   );
// }
// export default CourseDash;
 

import React, { useState } from "react";
import { Table, Button, Modal, Form, FormGroup } from "react-bootstrap";
import './Dashboard.css';

function CourseDash() {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [name, setName] = useState(""); // State for name input
  const [email, setEmail] = useState(""); // State for email input
  const [mobile, setMobile] = useState(""); // State for mobile input
  const [contacts, setContacts] = useState([
    { name: "Amit7777", email: "amit@gmail.com", mobile: "9307961978" },
    { name: "Amit55555", email: "amit@gmail.com", mobile: "234567890" },
    { name: "Amiit", email: "amit@gmail.com", mobile: "123456789" },
    { name: "Amit", email: "amit@gmail.com", mobile: "123456789" },
    { name: "Amit", email: "amit@gmail.com", mobile: "123456789" },
    { name: "Admin", email: "admin@gmail.com", mobile: "7894561212" },
  ]);
  const [editedIndex, setEditedIndex] = useState(null); // State to track the index of the contact being edited

  const handleShow = () => setIsAddFormVisible(true);

  const handleClose = () => {
    setIsAddFormVisible(false);
    setEditedIndex(null); // Clear the edited index when closing the modal
  };

  const handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === "email" ? target.value.toLowerCase() : target.value; // Lowercase email for consistency
    switch (target.name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "mobile":
        setMobile(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = { name, email, mobile };
    if (editedIndex !== null) {
      // If editing an existing contact, update it in the contacts array
      const updatedContacts = [...contacts];
      updatedContacts[editedIndex] = newContact;
      setContacts(updatedContacts);
    } else {
      // If adding a new contact, add it to the contacts array
      setContacts([...contacts, newContact]);
    }
    setName("");
    setEmail("");
    setMobile("");
    handleClose();
  };

  const handleEdit = (index) => {
    // Open the modal with the details of the contact to be edited
    const contactToEdit = contacts[index];
    setName(contactToEdit.name);
    setEmail(contactToEdit.email);
    setMobile(contactToEdit.mobile);
    setEditedIndex(index);
    setIsAddFormVisible(true);
  };

  const handleDelete = (index) => {
    // Remove the contact at the specified index from the contacts array
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <>
      <Modal show={isAddFormVisible} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editedIndex !== null ? "Edit Contact" : "Add Contact"}</Modal.Title>
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
              <Form.Label htmlFor="mobile">Mobile</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Mobile Number"
                id="mobile"
                name="mobile"
                value={mobile}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      <Table striped bordered hover className="custom-table m-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.mobile}</td>
              <td>
                <Button variant="primary" size="sm" onClick={() => handleEdit(index)}>
                  Edit
                </Button>{" "}
                <Button variant="danger" size="sm" onClick={() => handleDelete(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button variant="primary" onClick={handleShow} className="m-auto">
        Add 
      </Button>
    </>
  );
}

export default CourseDash;
