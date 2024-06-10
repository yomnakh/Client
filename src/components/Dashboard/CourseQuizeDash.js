import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, FormGroup } from "react-bootstrap";
import './Dashboard.css';
import Api from "../../config/api";
import Swal from "sweetalert2";

function CourseQuizeDash() {
    const [quizzes, setQuizzes] = useState([]);
    const [isAddFormVisible, setIsAddFormVisible] = useState(false);
    const [name, setName] = useState("");
    const [currentQuizId, setCurrentQuizId] = useState(null);
    const [editedIndex, setEditedIndex] = useState(null);
    const [questions, setQuestions] = useState([{ question: "", answers: [{ text: "", index: 0 }], correctAnswerIndex: 0 }]);
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await Api.get('/coursequiz');
                setQuizzes(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching quizzes:', error);
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

        fetchQuizzes();
        fetchCourses();
    }, []);

    const handleShow = () => setIsAddFormVisible(true);

    const handleClose = () => {
        setIsAddFormVisible(false);
        setEditedIndex(null);
        setCurrentQuizId(null);
        clearForm();
    };

    const handleInputChange = (event, index) => {
        const { target } = event;
        const value = target.value;
        switch (target.name) {
            case "name":
                setName(value);
                break;
            case "question":
                const newQuestions = [...questions];
                newQuestions[index].text = value;
                setQuestions(newQuestions);
                break;
            case "answer":
                const answerIndex = parseInt(target.getAttribute("data-index"));
                const newAnswers = [...questions[index].answers];
                newAnswers[answerIndex].text = value;
                setQuestions(questions.map((question, i) => i === index ? { ...question, answers: newAnswers } : question));
                break;
            case "correctAnswerIndex":
                const correctAnswerIndex = parseInt(value);
                const updatedQuestions = [...questions];
                updatedQuestions[index].correctAnswerIndex = correctAnswerIndex;
                setQuestions(updatedQuestions);
                break;
            default:
                break;
        }
    };

    const clearForm = () => {
        setName("");
        setQuestions([{ text: "", answers: [{ text: "" }], correctAnswerIndex: 0 }]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate questions
        if (questions.some(question => !question.text)) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Please fill out all questions before submitting the quiz.',
            });
            return;
        }

        // Check if a course is selected
        if (!selectedCourse) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Please select a course for the quiz.',
            });
            return;
        }

        // Create a new quiz object with the provided data
        const newQuiz = {
            name,
            course: selectedCourse, // Include the selected course ID
            questions: questions.map((question, index) => ({
                question: question.text,
                answers: question.answers.map((answer, answerIndex) => ({
                    text: answer.text,
                    index: answerIndex  // Assigning index to each answer
                })),
                correctAnswerIndex: question.correctAnswerIndex
            }))
        };

        try {
            if (editedIndex !== null) {
                await Api.put(`/coursequiz/${currentQuizId}`, newQuiz);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: "Quiz Updated successfully",
                    timer: 1500
                });
            } else {
                await Api.post("/coursequiz", newQuiz);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: "Quiz added successfully",
                    timer: 1500
                });
            }
            handleClose();
            clearForm();

            // Fetch the updated list of quizzes from the server
            const response = await Api.get('/coursequiz');
            setQuizzes(response.data);
        } catch (error) {
            console.error('Error saving quiz:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.response.data.error}`,
            });
        }
    };


    const handleEdit = (quiz) => {
        setName(quiz.name);
        setSelectedCourse(quiz.course); // Set the selected course
        setQuestions(quiz.questions.map((question, index) => ({
            text: question.question,
            answers: question.answers.map(answer => ({ text: answer.text })),
            correctAnswerIndex: question.correctAnswerIndex
        })));

        setCurrentQuizId(quiz._id);
        setEditedIndex(quizzes.indexOf(quiz));
        setIsAddFormVisible(true);
    };

    const handleDelete = async (quizId) => {
        try {
            await Api.delete(`/coursequiz/${quizId}`);
            setQuizzes(quizzes.filter((quiz) => quiz._id !== quizId));
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: "Quiz Deleted successfully",
                timer: 1500
            });
        } catch (error) {
            console.error('Error deleting quiz:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.response.data.error}`,
            });
        }
    };

    const handleAddQuestion = () => {
        setQuestions([...questions, { text: "", answers: [{ text: "" }], correctAnswerIndex: 0 }]);
    };

    const handleAddAnswer = (questionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].answers.push({ text: "" });
        setQuestions(newQuestions);
    };

    const handleDeleteAnswer = (questionIndex, answerIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].answers.splice(answerIndex, 1);
        setQuestions(updatedQuestions);
    };

    const renderQuestions = () => {
        return questions.map((question, index) => (
            <div key={index}>
                <FormGroup className="mb-3">
                    <Form.Label className='modal-data' htmlFor={`question-${index}`}>Question</Form.Label>
                    <Form.Control
                        className="input-modal"
                        type="text"
                        placeholder="Enter Question"
                        id={`question-${index}`}
                        name="question"
                        value={question.text}
                        onChange={(event) => handleInputChange(event, index)}
                    />
                </FormGroup>
                {question.answers.map((answer, answerIndex) => (
                    <FormGroup key={answerIndex} className="mb-3">
                        <Form.Label className='modal-data' htmlFor={`answer-${index}-${answerIndex}`}>Answer</Form.Label>
                        <Form.Control
                            className="input-modal"
                            type="text"
                            placeholder="Enter Answer"
                            id={`answer-${index}-${answerIndex}`}
                            name="answer"
                            data-index={answerIndex}
                            value={answer.text}
                            onChange={(event) => handleInputChange(event, index)}
                        />
                        <Button className="Delete-Answer-btn" onClick={() => handleDeleteAnswer(index, answerIndex)}>Delete</Button>
                    </FormGroup>
                ))}
                <FormGroup className="mb-3">
                    <Form.Label className='modal-data' htmlFor={`correctAnswerIndex-${index}`}>Correct Answer Index</Form.Label>
                    <Form.Control
                        className="input-modal"
                        as="select"
                        id={`correctAnswerIndex-${index}`}
                        name="correctAnswerIndex"
                        value={question.correctAnswerIndex}
                        onChange={(event) => handleInputChange(event, index)}
                    >
                        {question.answers.map((_, idx) => (
                            <option key={idx} value={idx}>{`Answer ${idx + 1}`}</option>
                        ))}
                    </Form.Control>
                </FormGroup>
                <Button className="Add-Answer-btn ms-3" onClick={() => handleAddAnswer(index)}>ADD Answer </Button>
            </div>
        ));
    };

    const filteredQuizzes = quizzes.filter(quiz =>
        quiz.name && quiz.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={{ marginLeft: "170px" }} className="backdashimg">
            <div className=" mb-3 w-75 mx-auto mt-5 d-flex">
                <input
                    type="search"
                    placeholder="Search by Quiz Name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-75 mx-auto border rounded"
                />
                <Button onClick={handleShow} className="m-auto add-quiz-btn">
                    Add Exam
                </Button>
            </div>
            <Modal className='dash-model' show={isAddFormVisible} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='modal-title' style={{fontWeight:"600"}}>{editedIndex !== null ? "Edit Exam" : "Add Exam"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup className="mb-3 body-form-group">
                            <Form.Label className='modal-data' htmlFor="name">Name</Form.Label>
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
                            <Form.Label className='modal-data' htmlFor="course">Course</Form.Label>
                            <Form.Control
                                as="select"
                                id="course"
                                name="course"
                                value={selectedCourse}
                                onChange={(e) => setSelectedCourse(e.target.value)}
                            >
                                <option value="">Select Course</option>
                                {courses.map(course => (
                                    <option key={course._id} value={course._id}>{course.type}</option>
                                ))}
                            </Form.Control>
                        </FormGroup>
                        {renderQuestions()}
                        <Button className="add-question-btn" onClick={handleAddQuestion}>Add Question</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="justify-content-between">
                    <Button className="save-changes-btn" type="submit" onClick={handleSubmit}>
                        Save Exam
                    </Button>
                    <Button className="bg-danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Table striped bordered className='w-75 mx-auto'>
                <thead>
                    <tr className="text-center">
                        <th className="tablehead">ID</th>
                        <th className="tablehead">Name</th>
                        <th className="tablehead" colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredQuizzes.map((quiz, index) => (
                        <tr key={index} className="text-center">
                            <td>{quiz._id}</td>
                            <td>{quiz.name}</td>
                            <td>
                                <Button className="quiz-edit-btn px-3 m-auto" size="sm" onClick={() => handleEdit(quiz)}>
                                    Edit
                                </Button>
                            </td>
                            <td>
                                <Button className="delete-btn" size="sm" onClick={() => handleDelete(quiz._id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default CourseQuizeDash;




