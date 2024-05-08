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
              <td colSpan="5" className='text-dark bg-light'>
                <div class="d-flex justify-content-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </td>
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
