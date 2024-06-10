import React, { useState, useEffect } from 'react';
import { Alert, Table, Modal, Button } from 'react-bootstrap';
import Api from '../../config/api';
import "./Dashboard.css"

const LessonDash = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourseId, setSelectedCourseId] = useState('');
    const [lectures, setLectures] = useState([]);
    const [newLecture, setNewLecture] = useState({ name: '', link: '' });
    const [editLecture, setEditLecture] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        fetchCourses();
        fetchLectures();
    }, [selectedCourseId]);

    const fetchLectures = async () => {
        if (selectedCourseId) {
            try {
                const response = await Api.get(`/api/course-lecture/courselec/${selectedCourseId}`);
                setLectures(response.data);
            } catch (error) {
                console.error('Error fetching lectures:', error);
            }
        }
    };

    const fetchCourses = async () => {
        try {
            const response = await Api.get('/api/courses');
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const handleSelectCourse = (courseId) => {
        setSelectedCourseId(courseId);
    };

    const handleAddLecture = async () => {
        try {
            await Api.post(`/api/course-lecture`, { ...newLecture, course: selectedCourseId });
            fetchLectures();
            setNewLecture({ name: '', link: '' });
            setShowAddModal(false);
        } catch (error) {
            console.error('Error adding lecture:', error);
        }
    };

    const handleDeleteLecture = async (lectureId) => {
        try {
            await Api.delete(`/api/course-lecture/${lectureId}`);
            fetchLectures();
        } catch (error) {
            console.error('Error deleting lecture:', error);
        }
    };

    const handleEditLecture = async () => {
        try {
            const { _id, createdAt, updatedAt, __v, ...updatedData } = editLecture;
            await Api.put(`/api/course-lecture/${_id}`, updatedData);
            fetchLectures();
            setShowEditModal(false);
            setEditLecture(null);
        } catch (error) {
            console.error('Error editing lecture:', error.response.data.details);
        }
    };
    return (
        <div style={{ marginLeft: "170px" }}>
            <div>
                <Alert variant="success" className='w-75 mx-auto mt-2 d-flex justify-content-between'>
                    <h6>Select Course To Show , ADD , Update and Delete Course Lessons </h6>
                    <select variant="success" onChange={(e) => handleSelectCourse(e.target.value)} className='text-dark select-alert  '>
                        <option className='lessons-dropdown-option' value="">Select Course</option>
                        {courses.map((course) => (
                            <option className='lessons-dropdown' key={course._id} value={course._id}>{course.type}</option>
                        ))}
                    </select>
                </Alert>
            </div>
            {selectedCourseId && (
                <div>
                    <Table striped bordered hover className='w-75 mx-auto'>
                        <thead>
                            <tr className='text-center'>
                                <th className='tablehead'>Name</th>
                                <th className='tablehead'>Link</th>
                                <th className='tablehead' colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lectures.map((lecture) => (
                                <tr key={lecture._id}>
                                    <td className='text-dark bg-light'>{lecture.name}</td>
                                    <td className='text-dark bg-light'>{lecture.link}</td>
                                    <td className='text-dark bg-light mx-auto'>
                                        <Button className='quiz-edit-btn mx-auto' onClick={() => { setEditLecture(lecture); setShowEditModal(true); }}>Update</Button>
                                    </td>
                                    <td className='text-dark bg-light'>
                                        <Button className='delete-btn mx-auto' onClick={() => handleDeleteLecture(lecture._id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {selectedCourseId && (
                        <div className='w-75 mx-auto'>
                            <Button className="addCourseBtn" onClick={() => setShowAddModal(true)}><i class="fa-solid fa-plus"></i></Button>
                        </div>
                    )}
                </div>
            )}

            <Modal className='dash-model' show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className='modal-title' style={{fontWeight:"600"}}>Add Lecture</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column'>
                    <input type="text" className='border rounded my-4 p-2' placeholder="Lesson Name......." value={newLecture.name} onChange={(e) => setNewLecture({ ...newLecture, name: e.target.value })} />
                    <input type="text" className='border rounded p-2' placeholder="Lesson Link......." value={newLecture.link} onChange={(e) => setNewLecture({ ...newLecture, link: e.target.value })} />
                </Modal.Body>
                <Modal.Footer className='justify-content-between'>
                    <Button className="quiz-edit-btn" onClick={handleAddLecture}>Add Lecture</Button>
                    <Button className='delete-btn' onClick={() => setShowAddModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton >
                    <Modal.Title style={{fontWeight:"600"}}>Edit Lecture</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column'>
                    <input type="text" className='border rounded my-4 p-2' placeholder="Name" value={editLecture?.name || ''} onChange={(e) => setEditLecture({ ...editLecture, name: e.target.value })} />
                    <input type="text" className='border rounded p-2' placeholder="Link" value={editLecture?.link || ''} onChange={(e) => setEditLecture({ ...editLecture, link: e.target.value })} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    <Button className="quiz-edit-btn" onClick={handleEditLecture}>Update</Button>
                    <Button className='delete-btn' onClick={() => setShowEditModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default LessonDash;

