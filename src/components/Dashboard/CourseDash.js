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
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await Api.get('/api/courses');
        const coursesWithInstructorName = response.data.map(course => {
          const instructor = instructors.find(instructor => instructor._id === course.instructor);
          return {
            ...course,
            instructorName: instructor ? instructor.name : 'Unknown' // Use 'Unknown' if instructor is not found
          };
        });
        setCourses(coursesWithInstructorName);
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
  }, [instructors]);

  const handleDelete = async (id) => {
    try {
      if(userData.role==="admin"){
      setIsLoading(true);
      await Api.delete(`/api/courses/${id}`);
      setCourses(courses.filter(course => course._id !== id));
      console.log('Course deleted:', id);
      Swal.fire("success", "Course Deleted Successfully", "success")
    }else{
      Swal.fire("Opps........", "You Aren't Allow To Delete Course", "error")
    } }catch (error) {
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

      const response = await Api.post('/api/courses', newCourseData);
      const addedCourse = response.data;

      // Update the courses state with the new course
      setCourses([...courses, addedCourse]);
      console.log('Course added:', addedCourse); // Log the added course
      // Close the modal and show success message
      closeModal();
      Swal.fire('Success', 'Course added successfully', 'success');
    } catch (error) {
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
      instructor: course.instructor._id, // Ensure this is just the instructor ID
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

      const response = await Api.put(`/api/courses/${selectedCourse._id}`, {
        ...newCourse,
        instructor: selectedInstructorId
      });
      const updatedCourse = response.data.Course;

      // Update the courses state with the updated course data
      const updatedCourses = courses.map((course) =>
        course._id === updatedCourse._id ? updatedCourse : course
      );
      setCourses(updatedCourses);

      console.log('Course updated:', updatedCourse);
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
    <div style={{marginLeft:"220px"}}>
      <div className=" mb-3 w-75 mx-auto mt-5 d-flex">
        <input
          type="search"
          placeholder="Search by Course Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-100 mx-auto border rounded me-5 dashboard-search"

        />
        <Button onClick={openModal} className='w-25 add-course-btn'>Add Course</Button>
      </div>
      <Modal className='dash-model' show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCourse ? "Update Course" : "Add New Course"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={selectedCourse ? handleUpdateCourse : handleSubmit}>
            <Form.Group className='body-form-group' controlId="formTitle">
              <Form.Label className='modal-data'  >Title</Form.Label>
              <Form.Control type="text" name="title" value={newCourse.title} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formHeader">
              <Form.Label className='modal-data' >Header</Form.Label>
              <Form.Control type="text" name="header" value={newCourse.header} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formInstructor">
              <Form.Label className='modal-data' >Instructor</Form.Label>
              <Form.Control as="select" name="instructor" value={selectedInstructorId} onChange={handleInstructorChange}>
                <option value="">Select Instructor</option>
                {instructors.map((instructor, index) => (
                  <option key={index} value={instructor._id}>{instructor.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formLessons">
              <Form.Label className='modal-data' >Lessons</Form.Label>
              <Form.Control type="text" name="lessons" value={newCourse.lessons} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formHours">
              <Form.Label className='modal-data'>Hours</Form.Label>
              <Form.Control className='input-modal' type="text" name="hours" value={newCourse.hours} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formCategory" className='dashcategory'>
              <Form.Label className='modal-data' >Category</Form.Label>
              {allCategories.map((category, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  id={`category-checkbox-${index}`}
                  label={category}
                  value={category}
                  checked={newCourse.category.includes(category)}
                  onChange={(e) => handleCategoryChange(e, category)}
                  className='check'
                />
              ))}
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label className='modal-data' >Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" value={newCourse.description} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formType">
              <Form.Label className='modal-data' >Type</Form.Label>
              <Form.Control type="text" name="type" value={newCourse.type} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formWillLearn">
              <Form.Label className='modal-data' >Will Learn</Form.Label>
              <Form.Control as="textarea" rows={3} name="willLearn" value={newCourse.willLearn} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formRequirementR1">
              <Form.Label className='modal-data' >Requirement R1</Form.Label>
              <Form.Control type="text" name="requirement.r1" value={newCourse.requirement.r1} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formRequirementR2">
              <Form.Label className='modal-data' >Requirement R2</Form.Label>
              <Form.Control type="text" name="requirement.r2" value={newCourse.requirement.r2} onChange={handleChange} />
            </Form.Group>
            <Button className='submit-btn-modal' type="submit">
              {selectedCourse ? "Update Course" : "Add Course"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Table striped bordered className='mx-auto' style={{ width: "100%" }}>
        <thead>
          <tr className='text-center'>
            <th className='tablehead'>Course</th>
            <th className='tablehead'>ID</th>
            <th className='tablehead'>Name</th>
            <th className='tablehead'>Instructor</th>
            <th className='tablehead' colSpan={2}>Actions</th>
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
              <tr key={index} className='text-center'>
                <td className='text-dark bg-light text-center'><img className='h-50 w-100 rounded' src={course.image.url} alt='course' /></td>
                <td className='text-dark bg-light table-id'>{course._id}</td>
                <td className='text-dark bg-light table-type'>{course.type}</td>
                <td className='text-dark bg-light table-name'>{course.instructor ? course.instructor.name : 'Unknown'}</td>
                <td className='text-dark bg-light'>
                  <Button className='update-btn' type="button" onClick={() => handleUpdate(course)}>
                    Update
                  </Button>
                </td>
                <td className='text-dark bg-light'>
                  <Button className='delete-btn' size="sm" onClick={() => handleDelete(course._id)}>
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

