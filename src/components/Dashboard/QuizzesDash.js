
import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, FormGroup } from "react-bootstrap";
import './Dashboard.css';
import Api from "../../config/api";
import Swal from 'sweetalert2';

function QuizzesDash() {
  const [quizzes, setQuizzes] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [currentQuizId, setCurrentQuizId] = useState(null);
  const [editedIndex, setEditedIndex] = useState(null);
  const [questions, setQuestions] = useState([{ question: "", answers: [{ text: "", index: 0 }], correctAnswerIndex: 0 }]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const response = await Api.get('/quizzes');
      setQuizzes(response.data);
    } catch (error) {
      console.error('Error fetching quizzes:', error);
    }
  };

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
      case "type":
        setType(value);
        break;
      case "question":
        const newQuestions = [...questions];
        newQuestions[index].question = value;
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
    setType("");
    setQuestions([{ question: "", answers: [{ text: "", index: 0 }], correctAnswerIndex: 0 }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const newQuiz = { name, type, questions };
      if (currentQuizId === null) {
        const response = await Api.post("/quizzes", newQuiz);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: "Quiz added successfully",
          timer: 1500
        });
      } else {
        await Api.put(`/quizzes/${currentQuizId}`, newQuiz);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: "Quiz updated successfully",
          timer: 1500
        });
      }
      // Fetch quizzes again to update the state
      fetchQuizzes();
    } catch (error) {
      console.error('Error saving quiz:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.response.data.error}`,
      });
    }
  
    handleClose();
    clearForm();
  };
  
  const handleEdit = (quiz) => {
    setName(quiz.name);
    setType(quiz.type);
    setQuestions(quiz.questions);
    setCurrentQuizId(quiz._id);
    setEditedIndex(quizzes.findIndex(q => q._id === quiz._id));
    setIsAddFormVisible(true);
  };

  const handleDelete = async (quizId) => {
    try {
      await Api.delete(`/quizzes/${quizId}`);
      setQuizzes(quizzes.filter((quiz) => quiz._id !== quizId));
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: "Quiz deleted successfully",
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
    setQuestions([...questions, { question: "", answers: [{ text: "", index: 0 }], correctAnswerIndex: 0 }]);
  };

  const handleAddAnswer = (questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers.push({ text: "", index: newQuestions[questionIndex].answers.length });
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
            type="text"
            placeholder="Enter Question"
            id={`question-${index}`}
            name="question"
            value={question.question}
            onChange={(event) => handleInputChange(event, index)}
            className="input-modal"
          />
        </FormGroup>
        {question.answers.map((answer, answerIndex) => (
          <FormGroup key={answerIndex} className="mb-3">
            <Form.Label className='modal-data' htmlFor={`answer-${index}-${answerIndex}`}>Answer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Answer"
              id={`answer-${index}-${answerIndex}`}
              name="answer"
              data-index={answerIndex}
              value={answer.text}
              onChange={(event) => handleInputChange(event, index)}
              className="input-modal"
            />
            <Button className="Delete-Answer-btn" onClick={() => handleDeleteAnswer(index, answerIndex)}>Delete</Button>
          </FormGroup>
        ))}
        <Button className="Add-Answer-btn text-center mx-auto mb-4" onClick={() => handleAddAnswer(index)}>Add Answer</Button>
        <FormGroup className="mb-3 pt-5">
          <Form.Label className='modal-data' htmlFor={`correctAnswerIndex-${index}`}>Correct Answer Index</Form.Label>
          <Form.Control
            as="select"
            id={`correctAnswerIndex-${index}`}
            name="correctAnswerIndex"
            value={question.correctAnswerIndex}
            onChange={(event) => handleInputChange(event, index)}
            className="input-modal"
          >
            {question.answers.map((_, idx) => (
              <option key={idx} value={idx}>{`Answer ${idx + 1}`}</option>
            ))}
          </Form.Control>
        </FormGroup>
      </div>
    ));
  };

  const filteredQuizzes = quizzes.filter(quiz =>
    quiz.name && quiz.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ marginLeft: "150px" }}>
      <div className="mb-3 w-75 mx-auto mt-5 d-flex">
        <input
          type="search"
          placeholder="Search by Quiz Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-75 mx-auto border rounded"
        />
        <Button onClick={handleShow} className="m-auto add-quiz-btn">
          Add Quiz
        </Button>
      </div>
      <Modal className='dash-model' show={isAddFormVisible} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='modal-title text-center' style={{fontWeight:"600"}}>{editedIndex !== null ? "Edit Quiz" : "Add Quiz"}</Modal.Title>
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
                className='input-modal'
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <Form.Label className='modal-data' htmlFor="type">Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Type"
                id="type"
                name="type"
                value={type}
                onChange={handleInputChange}
                className='input-modal'
              />
            </FormGroup>
            {renderQuestions()}
            <Button className="add-question-btn" onClick={handleAddQuestion}>Add Question</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
        <Button className="save-changes-btn" type="submit" onClick={handleSubmit}>
        Save Changes
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

export default QuizzesDash;


