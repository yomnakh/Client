import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Api from '../../config/api';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

const CourseDash = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [instructors, setInstructors] = useState([]);
  const allCategories = ['Front End', 'Back End', 'JavaScript', 'Full Stack', 'CS50', 'Security', 'Network', "AWS", 'ALL Courses'];
  const [newCourse, setNewCourse] = useState({
    title: '',
    header: '',
    instructor: '',
    lessons: '',
    hours: '',
    category: [],
    description: '',
    type: '',
    willLearn: '',
    requirement: {
      r1: '',
      r2: ''
    }
  });

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedInstructorId, setSelectedInstructorId] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await Api.get('/api/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError(error.response ? error.response.data.message : 'An error occurred');
        setIsLoading(false);
      }
    };

    const fetchInstructors = async () => {
      try {
        const response = await Api.get('/api/users/all-instructors');
        setInstructors(response.data);
      } catch (error) {
        console.error('Error fetching instructors:', error);
      }
    };

    fetchCourses();
    fetchInstructors();
  }, []);

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      await Api.delete(`/api/courses/${id}`);
      setCourses(courses.filter(course => course._id !== id));
    } catch (error) {
      console.error('Error deleting course:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Check if the changed field is inside the requirement object
    if (name.startsWith('requirement.')) {
      // If it is, update the nested state
      const requirementField = name.split('.')[1];
      setNewCourse(prevState => ({
        ...prevState,
        requirement: {
          ...prevState.requirement,
          [requirementField]: value
        }
      }));
    } else {
      // If it's not a nested field, update normally
      setNewCourse(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true);
      const newCourseData = {
        title: newCourse.title,
        header: newCourse.header,
        instructor: selectedInstructorId,
        lessons: newCourse.lessons,
        hours: newCourse.hours,
        category: Array.isArray(newCourse.category) ? newCourse.category : [newCourse.category], // Ensure category is an array
        description: newCourse.description,
        type: newCourse.type,
        willLearn: newCourse.willLearn,
        requirement: {
          r1: newCourse.requirement.r1,
          r2: newCourse.requirement.r2
        }
      };

      // Make the API request to add the new course
      const response = await Api.post('/api/courses', newCourseData);
      const addedCourse = response.data;

      // Update the courses state with the new course
      setCourses([...courses, addedCourse]);

      // Close the modal and show success message
      closeModal();
      Swal.fire('Success', 'Course added successfully', 'success');
    } catch (error) {
      console.error('Error adding course:', error);
      console.error('Error adding course:', error.response.data.details);
      Swal.fire('Error', `${error.response.data.details}`, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInstructorChange = (e) => {
    const { value } = e.target;
    setSelectedInstructorId(value); // Save selected instructor ID
    setNewCourse(prevState => ({
      ...prevState,
      instructor: value
    }));
  };

  const closeModal = () => {
    setShowModal(false);
    setNewCourse({
      title: '',
      header: '',
      instructor: '',
      lessons: '',
      hours: '',
      category: [],
      description: '',
      type: '',
      willLearn: '',
      requirement: {
        r1: '',
        r2: ''
      }
    });
    setSelectedCourse(null);
  };

  const openModal = () => {
    setShowModal(true);
  };

  // const handleAddCourse = async () => {
  //   try {
  //     setIsLoading(true);
  //     const newCourseData = {
  //       title: newCourse.title,
  //       header: newCourse.header,
  //       instructor: selectedInstructorId,
  //       lessons: newCourse.lessons,
  //       hours: newCourse.hours,
  //       category: newCourse.category,
  //       description: newCourse.description,
  //       type: newCourse.type,
  //       willLearn: newCourse.willLearn,
  //       requirement: {
  //         r1: newCourse.requirement.r1,
  //         r2: newCourse.requirement.r2
  //       }
  //     };

  //     const response = await Api.post('/api/courses', newCourseData);
  //     const addedCourse = response.data;
  //     setCourses([...courses, addedCourse]);
  //     closeModal();
  //     Swal.fire('Success', 'Course added successfully', 'success');
  //   } catch (error) {
  //     console.error('Error adding course:', error.response.data.details);
  //     Swal.fire('Error', 'Failed to add course', 'error');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleCategoryChange = (e, category) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setNewCourse(prevState => ({
        ...prevState,
        category: [...prevState.category, category]
      }));
    } else {
      setNewCourse(prevState => ({
        ...prevState,
        category: prevState.category.filter(item => item !== category)
      }));
    }
  };

  const handleUpdate = (course) => {
    setSelectedCourse(course);
    setNewCourse({
      title: course.title,
      header: course.header,
      instructor: course.instructor,
      lessons: course.lessons,
      hours: course.hours,
      category: course.category,
      description: course.description,
      type: course.type,
      willLearn: course.willLearn,
      requirement: {
        r1: course.requirement.r1,
        r2: course.requirement.r2
      }
    });
    setShowModal(true);
  };

  const handleUpdateCourse = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      // Make the API request to update the course
      const response = await Api.put(`/api/courses/${selectedCourse._id}`, {
        ...newCourse,
        instructor: selectedCourse.instructor._id // Use instructor ID from selected course
      });
      const updatedCourse = response.data.Course;

      // Update the courses state with the updated course
      const updatedCourses = courses.map((course) =>
        course._id === updatedCourse._id ? updatedCourse : course
      );
      setCourses(updatedCourses);

      // Close the modal and show success message
      closeModal();
      Swal.fire('Success', 'Course updated successfully', 'success');
    } catch (error) {
      console.error('Error updating course:', error.response.data.details);
      Swal.fire('Error', 'Failed to update course', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const filteredCourses = courses.filter(course =>
    course.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className=" mb-3 w-75 mx-auto mt-5 d-flex">
        <input
          type="search"
          placeholder="Search by Course Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-100 mx-auto border rounded me-5"
        />
        <Button onClick={openModal} className='w-25'>Add Course</Button>
      </div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCourse ? "Update Course" : "Add New Course"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={selectedCourse ? handleUpdateCourse : handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" value={newCourse.title} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formHeader">
              <Form.Label>Header</Form.Label>
              <Form.Control type="text" name="header" value={newCourse.header} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formInstructor">
              <Form.Label>Instructor</Form.Label>
              <Form.Control as="select" name="instructor" value={selectedInstructorId} onChange={handleInstructorChange}>
                <option value="">Select Instructor</option>
                {instructors.map((instructor, index) => (
                  <option key={index} value={instructor._id}>{instructor.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formLessons">
              <Form.Label>Lessons</Form.Label>
              <Form.Control type="text" name="lessons" value={newCourse.lessons} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formHours">
              <Form.Label>Hours</Form.Label>
              <Form.Control type="text" name="hours" value={newCourse.hours} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formCategory">
              <Form.Label>Category</Form.Label>
              {allCategories.map((category, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  id={`category-checkbox-${index}`}
                  label={category}
                  value={category}
                  checked={newCourse.category.includes(category)}
                  onChange={(e) => handleCategoryChange(e, category)}
                />
              ))}
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" value={newCourse.description} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formType">
              <Form.Label>Type</Form.Label>
              <Form.Control type="text" name="type" value={newCourse.type} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formWillLearn">
              <Form.Label>Will Learn</Form.Label>
              <Form.Control as="textarea" rows={3} name="willLearn" value={newCourse.willLearn} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formRequirementR1">
              <Form.Label>Requirement R1</Form.Label>
              <Form.Control type="text" name="requirement.r1" value={newCourse.requirement.r1} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formRequirementR2">
              <Form.Label>Requirement R2</Form.Label>
              <Form.Control type="text" name="requirement.r2" value={newCourse.requirement.r2} onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              {selectedCourse ? "Update Course" : "Add Course"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Table striped bordered hover className='mx-auto' style={{ width: "85%" }}>
        <thead>
          <tr className='text-center'>
            <th>Course</th>
            <th>ID</th>
            <th>Name</th>
            <th>Instructor</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="5" className='text-dark bg-light'>
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </td>
            </tr>
          ) : (
            filteredCourses.map((course, index) => (
              <tr key={index}>
                <td className='text-dark bg-light text-center'><img className='h-50 w-50 rounded' src={course.image.url} alt='course' /></td>
                <td className='text-dark bg-light'>{course._id}</td>
                <td className='text-dark bg-light'>{course.type}</td>
                <td className='text-dark bg-light'>{course.instructor.name}</td>
                <td className='text-dark bg-light'>
                  <Button variant="primary" type="button" onClick={() => handleUpdate(course)}>
                    Update
                  </Button>
                </td>
                <td className='text-dark bg-light'>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(course._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default CourseDash;
