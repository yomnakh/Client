import React, { useState, useEffect } from "react";
import { Container, Card, ProgressBar, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import done from "../../Assets/icons8-check.gif";
import "./quiz.css";
import Swal from "sweetalert2";
const Quiz = () => {
  const { type } = useParams();
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [quizTime, setQuizTime] = useState(300); // Adjust time in seconds
  const [timeRemaining, setTimeRemaining] = useState(quizTime);
  const [quizData, setQuizData] = useState([]);
  const [score, setScore] = useState(0);
  const [quizName, setQuizName] = useState("");
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(
          `https://edutrax.vercel.app/quizzes/type/${type}`
        );
        if (response.ok) {
          const data = await response.json();
          setQuizData(data[0].questions);
          console.log(data[0].name);
          setQuizName(data[0].name);
        } else {
          throw new Error("Failed to fetch quiz data");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuizData();
  }, [type]);
  useEffect(() => {
    setTimeRemaining(quizTime);
  }, []);
    useEffect(() => {
    // Start the timer when a question is selected
    if (currentQuestionIndex !== null) {
      const timer = setInterval(() => {
        setTimeRemaining((prevTime) => Math.max(0, prevTime - 1));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentQuestionIndex]);
  const handleStartQuiz = () => {
    if(isLoggedIn){
    setIsQuizStarted(true);
    setCurrentQuestionIndex(0);
    }else{
      Swal.fire({
        icon: 'warning',
        title: 'Not Logged In',
        text: 'Please log in first 🙁',
    });
    }
  };
  const handleNextQuestion = () => {
    if (selectedAnswerIndex !== null) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswers([...selectedAnswers, selectedAnswerIndex]);
      setSelectedAnswerIndex(null);
    }
  };
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setSelectedAnswerIndex(null);
    }
  };
  const handleAnswerSelection = (index) => {
    setSelectedAnswerIndex(index);
  };
  const calculateScore = () => {
    let score = 0;
    selectedAnswers.forEach((selectedIndex, index) => {
      if (quizData[index].correctAnswerIndex === selectedIndex) {
        score++;
      }
    });
    return score;
  };
  const handleQuizSubmit = () => {
    const score = calculateScore();
    console.log("Selected Answers:", selectedAnswers);
    console.log("Score:", score);
    setScore(score);
    setCurrentQuestionIndex(null);
  };
  const handleRestartQuiz = () => {
    setIsQuizStarted(false);
    setCurrentQuestionIndex(null);
    setSelectedAnswerIndex(null);
    setSelectedAnswers([]);
    setScore(0);
  };
  const currentQuestion = quizData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizData.length - 1;
  const progressPercentage =
    currentQuestionIndex !== null
      ? ((currentQuestionIndex + 1) / quizData.length) * 100
      : 0;
  return (
    <div className="quiz-wrapper">
      <Container className="quiz-container">
        {currentQuestionIndex !== null && (
          <badge className="badge timer-Badge">
            Time: {timeRemaining} seconds
          </badge>
        )}
        {!isQuizStarted && (
          <div className=" start-quiz">
            <h1 className="welcome-quiz-h">Welcome to the Quiz!</h1>
            <p className="welcome-quiz-p">
              Let's put your expertise to the test on the track. Are you ready
              to prove your <br /> knowledge in action?
            </p>
            <Button className="welcome-quiz-btn" onClick={handleStartQuiz}>
              Start Quiz
            </Button>
          </div>
        )}
        {isQuizStarted && (
          <Card className="quiz-card">
            <Card.Body className="m-1">
              <Card.Title className="quiz-title">{quizName} </Card.Title>
              {currentQuestionIndex !== null && (
                <ProgressBar
                  className="progressbar"
                  variant="success"
                  now={progressPercentage}
                  label={`${currentQuestionIndex + 1}/${quizData.length}`}
                />
              )}
              {currentQuestion ? (
                <div>
                  <Card.Title className="question-title mt-5 ">
                    {currentQuestion.question}
                  </Card.Title>
                  <ul className="m-5 quiz-ul">
                    {currentQuestion.answers.map((answer, index) => (
                      <li
                        key={index}
                        className={`quiz-li d-flex align-items-baseline mb-3 ${selectedAnswerIndex !== null && index === currentQuestion.correctAnswerIndex ?
                          "correct-answer" :
                          selectedAnswerIndex === index ?
                            "wrong-answer" :
                            ""
                          }`}
                      >
                        <input
                          className="answer-input mt-3"
                          type="radio"
                          id={`answer-${index}`}
                          name="answer"
                          value={index}
                          checked={selectedAnswerIndex === index}
                          onChange={() => handleAnswerSelection(index)}
                        />
                        <label
                          className="quiz-answer"
                          htmlFor={`answer-${index}`}
                        >
                          {answer.text}
                        </label>
                      </li>
                    ))}
                  </ul>
                  <div className="form-buttons mt-5">
                    {currentQuestionIndex > 0 && (
                      <button
                        type="button"
                        className="prev"
                        variant="secondary"
                        onClick={handlePreviousQuestion}
                      >
                        <i className="fa-solid fa-arrow-left"></i> Previous
                        Question
                      </button>
                    )}
                    <Button
                      type="button"
                      className="next"
                      variant="secondary"
                      disabled={selectedAnswerIndex === null}
                      onClick={
                        isLastQuestion ? handleQuizSubmit : handleNextQuestion
                      }
                    >
                      {isLastQuestion ? "Submit" : "Next Question"}
                      <i className="fa-solid fa-arrow-right"></i>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="thank">
                  <img className="done" src={done} alt="img" />
                  <h2 className="thanks-quiz">
                    Thank you 🙂<br />
                    Your score: {score}
                  </h2>
                  <Button className="welcome-quiz-btn" onClick={handleRestartQuiz}>
                    Try Quiz Agin
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        )}
      </Container>
    </div>
  );
};

export default Quiz;
