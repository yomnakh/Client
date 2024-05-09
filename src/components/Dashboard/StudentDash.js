import { Modal, Button, Table, Form, FormGroup } from 'react-bootstrap';
import Api from '../../config/api';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';

const StudentDash = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);

  const fetchStudents = async () => {
    setIsLoading(true);
    try {
      const response = await Api.get('/api/users/all-students');
      setStudents(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching students:', error);
      setError(error.response ? error.response.data.message : 'An error occurred fetching students');
      setIsLoading(false);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await Api.delete(`/api/users/${id}`);
      console.log('Student deleted successfully');
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
      setError(error.response ? error.response.data.message : 'An error occurred deleting the student');
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);


  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student._id.toString().includes(searchQuery)
  );

  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Search by Student ID"
        value={searchQuery}
        onChange={handleSearch}
        className='w-50 mx-auto my-3'

      />
      <Table striped bordered hover className='w-75 mx-auto'>
        <thead>
          <tr className='text-center'>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="4" className='text-dark bg-light text-center'>
                <div class="d-flex justify-content-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
                </td>
            </tr>
          ) : filteredStudents.length > 0 ? filteredStudents.map((student, index) => (
            <tr key={student._id}>
              <td className='text-dark bg-light'>{student._id}</td>
              <td className='text-dark bg-light'>{student.name}</td>
              <td className='text-dark bg-light'>{student.email}</td>
              <td className='text-dark bg-light text-center'>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteStudent(student._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="4" className='text-dark bg-light text-center'>No students with ID: {searchQuery} found</td>
            </tr>
          )
          }
        </tbody>
      </Table>
    </div>
  );
}

export default StudentDash;
