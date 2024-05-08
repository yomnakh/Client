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
  const [currentQuizId, setCurrentQuizId] = useState('');
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
      console.log(response.data);
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
      case "type": // Update state when type field changes
        setType(value);
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
    setType("");
    setQuestions([]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Name:", name);
    console.log("Type:", type);
    console.log("Questions:", questions);

    // Create a new quiz object with the provided data
    const newQuiz = {
      name,
      type,
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
        // If editing an existing quiz, send a PUT request
        await Api.put(`/quizzes/${currentQuizId}`, newQuiz);
        const updatedQuizzes = [...quizzes];
        updatedQuizzes[editedIndex] = newQuiz;
        setQuizzes(updatedQuizzes);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: "Quiz Updated successfully",
          timer: 1500
        });
      } else {
        await Api.post("/quizzes", newQuiz);
        setQuizzes([...quizzes, newQuiz]);
        console.log("Quiz added successfully");
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: "Quiz added successfully",
          timer: 1500
        });
      }
      handleClose();
      clearForm();
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
    console.log("QID:", quiz._id);
    setName(quiz.name);
    setType(quiz.type);
    setQuestions(
      quiz.questions.map((question, index) => ({
        text: question.question,
        answers: question.answers.map(answer => ({ text: answer.text })),
        correctAnswerIndex: question.correctAnswerIndex
      }))
    );
    setCurrentQuizId(quiz._id); // Set currentQuizId to quiz._id
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
    updatedQuestions[questionIndex].answers.splice(answerIndex, 1); // Remove the answer
    setQuestions(updatedQuestions);
  };

  const renderQuestions = () => {
    return questions.map((question, index) => (
      <div key={index}>
        <FormGroup className="mb-3">
          <Form.Label htmlFor={`question-${index}`}>Question</Form.Label>
          <Form.Control
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
            <Form.Label htmlFor={`answer-${index}-${answerIndex}`}>Answer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Answer"
              id={`answer-${index}-${answerIndex}`}
              name="answer"
              data-index={answerIndex}
              value={answer.text}
              onChange={(event) => handleInputChange(event, index)}
            />
            <Button variant="danger" onClick={() => handleDeleteAnswer(index, answerIndex)}>Delete Answer</Button>
          </FormGroup>
        ))}
        <FormGroup className="mb-3">
          <Form.Label htmlFor={`correctAnswerIndex-${index}`}>Correct Answer Index</Form.Label>
          <Form.Control
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
        <Button variant="secondary" onClick={() => handleAddAnswer(index)}>Add Answer</Button>
      </div>
    ));
  };

  const filteredQuizzes = quizzes.filter(quiz =>
    quiz.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className=" mb-3 w-75 mx-auto mt-5 d-flex">
        <input
          type="search"
          placeholder="Search by Quiz Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-75 mx-auto border rounded"
        />
        <Button variant="primary" onClick={handleShow} className="m-auto ">
          Add Quiz
        </Button>
      </div>
      <Modal show={isAddFormVisible} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editedIndex !== null ? "Edit Quiz" : "Add Quiz"}</Modal.Title>
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
              <Form.Label htmlFor="type">Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Type"
                id="type"
                name="type"
                value={type}
                onChange={handleInputChange}
              />
            </FormGroup>
            {renderQuestions()}
            <Button variant="secondary" onClick={handleAddQuestion}>Add Question</Button>
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
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredQuizzes.map((quiz, index) => (
            <tr key={index} className="text-center">
              <td>{quiz._id}</td>
              <td>{quiz.name}</td>
              <td>
                <Button variant="primary" size="sm" onClick={() => handleEdit(quiz)}>
                  Edit
                </Button>
              </td>
              <td>
                <Button variant="danger" size="sm" onClick={() => handleDelete(quiz._id)}>
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

