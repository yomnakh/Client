
// import React, { useState, useEffect } from "react";
// import { Card, Container, Button, Badge, ProgressBar } from "react-bootstrap";
// import "./quiz.css"; // Import your CSS file
// import quizdata from "./quizdata"
// import done from "../../Assets/Check verify.gif";

// import QuestionsDB from "./quizdata"
// function Quiz() {
//   const [isQuizStarted, setIsQuizStarted] = useState(false);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [quizTime, setQuizTime] = useState(300); // Adjust time in seconds
//   const [timeRemaining, setTimeRemaining] = useState(quizTime);
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     // Set initial time remaining when the quiz starts
//     setTimeRemaining(quizTime);
//   }, []);

//   useEffect(() => {
//     // Start the timer when a question is selected
//     if (currentQuestionIndex !== null) {
//       const timer = setInterval(() => {
//         setTimeRemaining((prevTime) => Math.max(0, prevTime - 1));
//       }, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [currentQuestionIndex]);

//   const handleStartQuiz = () => {
//     setIsQuizStarted(true);
//     setCurrentQuestionIndex(0); // Set initial question index
//   };

//   const handleNextQuestion = () => {
//     if (selectedAnswers[currentQuestionIndex]) {
//       // Check if user selected an answer
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
//     }
//   };

//   const handleAnswerSelection = (answer) => {
//     setSelectedAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [currentQuestionIndex]: answer,
//     }));
//   };

//   const questions = [
//     {
//       text: "1- The HTML attribute used to define the internal stylesheet is -",
//       answers: ["a. <styel>", "b. <script>", "c. <link>","d. <style>"],
//       correctAnswer: "b. <styel>",
//     },
//     {
//       text: "2- The correct sequence of HTML tags for starting a webpage is ?",
//       answers: ["a. Head, Title, HTML, body", "b. HTML, Body, Title, Head", "c. HTML, Head, Title, Body","d. HTML, Title, Head , Body"],
//       correctAnswer: "c. HTML, Head, Title, Body",
//     },
//     {
//       text: "3- An HTML program is saved by using the ____ extension ?",
//       answers: ["a. .ht", "b. .hmtl", "c. .hml","d. None of the above"],
//       correctAnswer: "d. None of the above",
//     },
//     {
//       text: "4- To create HTML document you require a...... ?",
//       answers: ["a. web page editing software", "b. High powered computer", "c. Just a notepad can be used","d. None of the above"],
//       correctAnswer: "c. Just a notepad can be used",
//     },
//     {
//       text: "5- How to insert an image in HTML?",
//       answers: ["a. <img href = 'image.png' />", "b. <img scr = 'image.png' />", "c. <img link = 'image.png' />","d. <img src = 'image.png' />"],
//       correctAnswer: "d. <img src = 'image.png' />",
//     },
//     {
//       text: "6- Which of the following CSS property is used to specify table borders in CSS?",
//       answers: ["a. table", "b. table:border ", "c. border","d. all of the mentioned "],
//       correctAnswer: "d. <img src = 'image.png' />",
//     },
//     {
//       text: "6- Which of the following CSS property is used to specify table borders in CSS?",
//       answers: ["a. table", "b. table:border ", "c. border","d. all of the mentioned "],
//       correctAnswer: "d. <img src = 'image.png' />",
//     },
//     {
//       text: "7- Which of the following elements is used to create a hyperlink in HTML?",
//       answers: ["a. <a>", "b. <link>", "c. <href>","d. <hyper>"],
//       correctAnswer: "a. <a>",
//     },
//     {
//       text: "8- What is the correct HTML for making a text input field?",
//       answers: ["a. <input type='text'>", "b. <textinput>", "c. <textfield>","d. <input type='textfield'>"],
//       correctAnswer: "a. <input type='text'>",
//     },
//     {
//       text: "9- Which HTML element is used to define important text?",
//       answers: ["a. <strong>", "b. <bold>", "c. <important>","d. <em>"],
//       correctAnswer: "a. <strong>",
//     },
//     {
//       text: "10- Which HTML tag is used to define an unordered list?",
//       answers: ["a. <ul>", "b. <list>", "c. <ol>","d. <unordered>"],
//       correctAnswer: "a. <ul>",
//     },
//     // Add more questions here
//   ];

//   const currentQuestion = questions[currentQuestionIndex];
//   const isLastQuestion = currentQuestionIndex === questions.length - 1;

//   const calculateScore = () => {
//     let score = 0;
//     Object.keys(selectedAnswers).forEach((index) => {
//       if (selectedAnswers[index] === questions[index].correctAnswer) {
//         score++;
//       }
//     });
//     return score;
//   };

//   const handleQuizSubmit = () => {
//     const score = calculateScore();
//     setScore(score);
//     setCurrentQuestionIndex(null); // Reset current question index
//   };

//   const progressPercentage = currentQuestionIndex !== null ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

//   return (
//     <div className="quiz-wrapper">
      
//       <Container className="quiz-container">
//       {currentQuestionIndex !== null && (
//                 <badge className="badge timer-Badge">
//                   Time: {timeRemaining} seconds
//                 </badge>
//               )}
//         {!isQuizStarted && (
//           <div className=" start-quiz">
//             <h1 className="welcome-quiz-h">Welcome to the Quiz!</h1>
//             <p className="welcome-quiz-p"> let's put your expertise to the test on the track. Are you ready to prove your <br></br> knowledge in action?</p>
//             <Button  className="welcome-quiz-btn" onClick={handleStartQuiz} >
//               Start Quiz
//             </Button>
//           </div>
//         )}
//         {isQuizStarted && (
//           <Card className="quiz-card">
//             <Card.Body className="m-1">
//               <Card.Title className="quiz-title"> Quiz </Card.Title>
              
//               <ProgressBar className="progressbar" now={progressPercentage} label={`${currentQuestionIndex + 1}/${questions.length}`} />
//               {currentQuestion ? (
//                 <div>
//                   <Card.Title className="question-title mt-5">
//                     {currentQuestion.text}
//                   </Card.Title>
//                   <ul className="m-5 quiz-ul">
//                     {currentQuestion.answers.map((answer, index) => (
//                       <li key={index} className="quiz-li">
//                         <input
//                           className="answer-input mt-3"
//                           type="radio"
//                           id={`answer-${index}`}
//                           name="answer"
//                           value={answer}
//                           checked={selectedAnswers[currentQuestionIndex] === answer}
//                           onChange={() => handleAnswerSelection(answer)}
//                         />
//                         <label
//                           className="quiz-answer"
//                           htmlFor={`answer-${index}`}
//                         >
//                           {answer}
//                         </label>
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="form-buttons mt-5">
//                     {currentQuestionIndex > 0 && (
//                       <button
//                         type="button"
//                         className="prev"
//                         variant="primary"
//                         onClick={handlePreviousQuestion}
//                       >
//                         <i className="fa-solid fa-arrow-left"></i> Previous Question
//                       </button>
//                     )}
//                     <Button
//                       type="button"
//                       className="next"
//                       variant="primary"
//                       disabled={!selectedAnswers[currentQuestionIndex]}
//                       onClick={isLastQuestion ? handleQuizSubmit : handleNextQuestion}
//                     >
//                       {isLastQuestion ? "Submit" : "Next Question"}
//                       <i className="fa-solid fa-arrow-right"></i>
//                     </Button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="thank">
//                    <img className="done" src={done} />
//                   <h2 className="thanks-quiz">Thank you! You've completed the quiz!</h2>
//                   <div className="score">Your score: {score}</div>
//                 </div>
//               )}
//             </Card.Body>
//           </Card>
//         )}
//       </Container>
//     </div>
//   );
// }
// export default Quiz;

import React, { useState, useEffect } from "react";
import { Card, Container, Button, Badge, ProgressBar } from "react-bootstrap";
import "./quiz.css"; // Import your CSS file
import quizdata from "./quizdata";
import done from "../../Assets/Check verify.gif";

function Quiz() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizTime, setQuizTime] = useState(300); // Adjust time in seconds
  const [timeRemaining, setTimeRemaining] = useState(quizTime);
  const [score, setScore] = useState(0);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false); // State to control displaying correct answers

  useEffect(() => {
    // Set initial time remaining when the quiz starts
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
    setIsQuizStarted(true);
    setCurrentQuestionIndex(0); // Set initial question index
  };

  const handleNextQuestion = () => {
    if (selectedAnswers[currentQuestionIndex]) {
      // Check if user selected an answer
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: answer,
    }));
  };

  const questions = [
    // ... your quiz questions here
  ];

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const calculateScore = () => {
    let score = 0;
    Object.keys(selectedAnswers).forEach((index) => {
      if (selectedAnswers[index] === questions[index].correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleQuizSubmit = () => {
    const score = calculateScore();
    setScore(score);
    setCurrentQuestionIndex(null); // Reset current question index
    setShowCorrectAnswers(true); // Show correct answers after submit
  };

  const progressPercentage = currentQuestionIndex !== null ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  return (
    <div className="quiz-wrapper">
      <Container className="quiz-container">
        {currentQuestionIndex !== null && (
          <badge className="badge timer-Badge">
            Time: {timeRemaining} seconds
          </badge>
        )}
        {!isQuizStarted && (
          <div className="start-quiz">
            <h1 className="welcome-quiz-h">Welcome to the Quiz!</h1>
            <p className="welcome-quiz-p">
              Let's put your expertise to the test on the track. Are you ready to
              prove your knowledge in action?
            </p>
            <Button className="welcome-quiz-btn" onClick={handleStartQuiz}>
              Start Quiz
            </Button>
          </div>
        )}
        {isQuizStarted && (
          <Card className="quiz-card">
            <Card.Body className="m-1">
              <Card.Title className="quiz-title"> Quiz </Card.Title>
              <ProgressBar className="progressbar" now={progressPercentage} label={`<span class="math-inline">\{currentQuestionIndex \+ 1\}/</span>{questions.length}`} />
              {currentQuestion ? (
                <div>
                  <Card.Title className="question-title mt-5">
                    {currentQuestion.text}
                    </Card.Title>
                  <ul className="m-5 quiz-ul">
                    {currentQuestion.answers.map((answer, index) => (
                      <li key={index} className="quiz-li">
                        <input
                          className="answer-input mt-3"
                          type="radio"
                          id={`answer-${index}`}
                          name="answer"
                          value={answer}
                          checked={selectedAnswers[currentQuestionIndex] === answer}
                          onChange={() => handleAnswerSelection(answer)}
                        />
                        <label
                          className="quiz-answer"
                          htmlFor={`answer-${index}`}
                        >
                          {answer}
                        </label>
                      </li>
                    ))}
                  </ul>
                  <div className="form-buttons mt-5">
                    {currentQuestionIndex > 0 && (
                      <button
                        type="button"
                        className="prev"
                        variant="primary"
                        onClick={handlePreviousQuestion}
                      >
                        <i className="fa-solid fa-arrow-left"></i> Previous Question
                      </button>
                    )}
                    <Button
                      type="button"
                      className="next"
                      variant="primary"
                      disabled={!selectedAnswers[currentQuestionIndex]}
                      onClick={isLastQuestion ? handleQuizSubmit : handleNextQuestion}
                    >
                      {isLastQuestion ? "Submit" : "Next Question"}
                      <i className="fa-solid fa-arrow-right"></i>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="thank">
                   <img className="done" src={done} />
                  <h2 className="thanks-quiz">Thank you! You've completed the quiz!</h2>
                  <div className="score">Your score: {score}</div>
                </div>
              )}
            </Card.Body>
          </Card>
        )}
      </Container>
    </div>
  );
}
export default Quiz;




