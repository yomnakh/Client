// import React, { useState, useEffect } from "react";
// import { Card, Container, Button, Badge, ProgressBar } from "react-bootstrap";
// import "./quiz.css"; // Import your CSS file
// import quizdata from "./quizdata"
// import done from "../../Assets/Check verify.gif";
// import { useParams } from "react-router-dom";

// import QuestionsDB from "./quizdata"
// function Quiz() {
//   const { type } = useParams();
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
//       answers: ["a. <styel>", "b. <script>", "c. <link>", "d. <style>"],
//       correctAnswer: "b. <styel>",
//     },
//     {
//       text: "2- The correct sequence of HTML tags for starting a webpage is ?",
//       answers: ["a. Head, Title, HTML, body", "b. HTML, Body, Title, Head", "c. HTML, Head, Title, Body", "d. HTML, Title, Head , Body"],
//       correctAnswer: "c. HTML, Head, Title, Body",
//     },
//     {
//       text: "3- An HTML program is saved by using the ____ extension ?",
//       answers: ["a. .ht", "b. .hmtl", "c. .hml", "d. None of the above"],
//       correctAnswer: "d. None of the above",
//     },
//     {
//       text: "4- To create HTML document you require a...... ?",
//       answers: ["a. web page editing software", "b. High powered computer", "c. Just a notepad can be used", "d. None of the above"],
//       correctAnswer: "c. Just a notepad can be used",
//     },
//     {
//       text: "5- How to insert an image in HTML?",
//       answers: ["a. <img href = 'image.png' />", "b. <img scr = 'image.png' />", "c. <img link = 'image.png' />", "d. <img src = 'image.png' />"],
//       correctAnswer: "d. <img src = 'image.png' />",
//     },
//     {
//       text: "6- Which of the following CSS property is used to specify table borders in CSS?",
//       answers: ["a. table", "b. table:border ", "c. border", "d. all of the mentioned "],
//       correctAnswer: "d. <img src = 'image.png' />",
//     },
//     {
//       text: "6- Which of the following CSS property is used to specify table borders in CSS?",
//       answers: ["a. table", "b. table:border ", "c. border", "d. all of the mentioned "],
//       correctAnswer: "d. <img src = 'image.png' />",
//     },
//     {
//       text: "7- Which of the following elements is used to create a hyperlink in HTML?",
//       answers: ["a. <a>", "b. <link>", "c. <href>", "d. <hyper>"],
//       correctAnswer: "a. <a>",
//     },
//     {
//       text: "8- What is the correct HTML for making a text input field?",
//       answers: ["a. <input type='text'>", "b. <textinput>", "c. <textfield>", "d. <input type='textfield'>"],
//       correctAnswer: "a. <input type='text'>",
//     },
//     {
//       text: "9- Which HTML element is used to define important text?",
//       answers: ["a. <strong>", "b. <bold>", "c. <important>", "d. <em>"],
//       correctAnswer: "a. <strong>",
//     },
//     {
//       text: "10- Which HTML tag is used to define an unordered list?",
//       answers: ["a. <ul>", "b. <list>", "c. <ol>", "d. <unordered>"],
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
//         {currentQuestionIndex !== null && (
//           <badge className="badge timer-Badge">
//             Time: {timeRemaining} seconds
//           </badge>
//         )}
//         {!isQuizStarted && (
//           <div className=" start-quiz">
//             <h1 className="welcome-quiz-h">Welcome to the Quiz!</h1>
//             <p className="welcome-quiz-p"> let's put your expertise to the test on the track. Are you ready to prove your <br></br> knowledge in action?</p>
//             <Button className="welcome-quiz-btn" onClick={handleStartQuiz} >
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
//                   <img className="done" src={done} />
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


/////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import { Container, Card, ProgressBar, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import done from "../../Assets/Check verify.gif";
import "./quiz.css"; 

const Quiz = () => {
  const { type } = useParams();
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [quizData, setQuizData] = useState([]);
  const [score, setScore] = useState(0);
  const [quizTime, setQuizTime] = useState(300); // Adjust time in seconds
  const [timeRemaining, setTimeRemaining] = useState(quizTime);
  const [quizName , setQuizName]= useState('')

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(`https://edutrax.vercel.app/quizzes/type/${type}`);
        if (response.ok) {
          const data = await response.json();
          setQuizData(data[0].questions);
          console.log(data[0].name);
          setQuizName(data[0].name)
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
    setCurrentQuestionIndex(0);
  };

  const handleNextQuestion = () => {
    if (selectedAnswerIndex !== null) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswerIndex(null);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
      setSelectedAnswerIndex(null);
    }
  };

  const handleAnswerSelection = index => {
    setSelectedAnswerIndex(index);
  };

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((question, index) => {
      if (question.correctAnswerIndex === selectedAnswerIndex) {
        score++;
      }
    });
    return score;
  };

  const handleQuizSubmit = () => {
    const score = calculateScore();
    setScore(score);
    setCurrentQuestionIndex(null);
  };

  const currentQuestion = quizData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizData.length - 1;
  const progressPercentage =
    currentQuestionIndex !== null
      ? ((currentQuestionIndex + 1) / quizData.length) * 100
      : 0;

  return (
    <div className="quiz-wrapper">
      <Container className="quiz-container" style={{marginTop:"120px"}}>
      {currentQuestionIndex !== null && (
                  <badge className="badge timer-Badge">
                    Time: {timeRemaining} seconds
                  </badge>
                )}
        {!isQuizStarted && (
          <div className=" start-quiz">
            <h1 className="welcome-quiz-h">Welcome to the Quiz!</h1>
            <p className="welcome-quiz-p">
              Let's put your expertise to the test on the track. Are you
              ready to prove your <br></br> knowledge in action?
            </p>
            <Button
              className="welcome-quiz-btn"
              onClick={handleStartQuiz}
            >
              Start Quiz
            </Button>
          </div>
        )}
        {isQuizStarted && (
          <Card className="quiz-card">
            <Card.Body className="m-1">
              <Card.Title className="quiz-title">{quizName} </Card.Title>

              <ProgressBar
                className="progressbar"
                now={progressPercentage}
                label={`${currentQuestionIndex + 1}/${quizData.length}`}
              />
              {currentQuestion ? (
                <div>
                  <Card.Title className="question-title mt-5">
                    {currentQuestion.question}
                  </Card.Title>
                  <ul className="m-5 quiz-ul">
                    {currentQuestion.answers.map(answer => (
                      <li key={answer.index} className="quiz-li">
                        <input
                          className="answer-input mt-3"
                          type="radio"
                          id={`answer-${answer.index}`}
                          name="answer"
                          value={answer.index}
                          checked={selectedAnswerIndex === answer.index}
                          onChange={() =>
                            handleAnswerSelection(answer.index)
                          }
                        />
                        <label
                          className="quiz-answer"
                          htmlFor={`answer-${answer.index}`}
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
                        variant="primary"
                        onClick={handlePreviousQuestion}
                      >
                        <i className="fa-solid fa-arrow-left"></i>{" "}
                        Previous Question
                      </button>
                    )}
                    <Button
                      type="button"
                      className="next"
                      variant="primary"
                      disabled={selectedAnswerIndex === null}
                      onClick={
                        isLastQuestion
                          ? handleQuizSubmit
                          : handleNextQuestion
                      }
                    >
                      {isLastQuestion ? "Submit" : "Next Question"}
                      <i className="fa-solid fa-arrow-right"></i>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="thank">
                <img className="done" src={done} />
                  <h2 className="thanks-quiz">
                    Thank you! You've completed the quiz!
                  </h2>
                  <div className="score">Your score: {score}</div>
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


/////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import { Card, Container, Button, Badge, ProgressBar } from "react-bootstrap";
// import "./quiz.css"; // Import your CSS file
// import done from "../../Assets/Check verify.gif";
// import { useParams } from "react-router-dom";

// function Quiz() {
//   const { type } = useParams();
//   const [isQuizStarted, setIsQuizStarted] = useState(false);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [quizTime, setQuizTime] = useState(300); // Adjust time in seconds
//   const [timeRemaining, setTimeRemaining] = useState(quizTime);
//   const [score, setScore] = useState(0);
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     // Set initial time remaining when the quiz starts
//     setTimeRemaining(quizTime);
//   }, []);

//   const handleStartQuiz = async () => {
//     setIsQuizStarted(true);
//     try {
//       const response = await fetch(`https://edutrax.vercel.app/quizzes/type/${type}`);
//       const data = await response.json();
//       if (response.ok) {
//         setQuestions(data.questions);
//         setCurrentQuestionIndex(0); // Set initial question index
//       } else {
//         console.error("Failed to fetch quiz data:", data.message);
//         // Handle error condition, e.g., show an error message to the user
//       }
//     } catch (error) {
//       console.error("Error fetching quiz data:", error);
//       // Handle error condition, e.g., show an error message to the user
//     }
//   };

//   useEffect(() => {
//     // Start the timer when a question is selected
//     if (currentQuestionIndex !== null) {
//       const timer = setInterval(() => {
//         setTimeRemaining((prevTime) => Math.max(0, prevTime - 1));
//       }, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [currentQuestionIndex]);

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

//   const calculateScore = () => {
//     let score = 0;
//     Object.keys(selectedAnswers).forEach((index) => {
//       const question = questions[index];
//       if (selectedAnswers[index] === question.answers[question.correctAnswerIndex].text) {
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
//         {currentQuestionIndex !== null && (
//           <Badge className="badge timer-Badge">
//             Time: {timeRemaining} seconds
//           </Badge>
//         )}
//         {!isQuizStarted && (
//           <div className="start-quiz">
//             <h1 className="welcome-quiz-h">Welcome to the Quiz!</h1>
//             <p className="welcome-quiz-p">Let's put your expertise to the test. Are you ready to prove your knowledge?</p>
//             <Button className="welcome-quiz-btn" onClick={handleStartQuiz}>
//               Start Quiz
//             </Button>
//           </div>
//         )}
//         {isQuizStarted && (
//           <Card className="quiz-card">
//             <Card.Body className="m-1">
//               <Card.Title className="quiz-title"> Quiz </Card.Title>
//               <ProgressBar className="progressbar" now={progressPercentage} label={`${currentQuestionIndex + 1}/${questions.length}`} />
//               {currentQuestionIndex !== null && (
//                 <div>
//                   <Card.Title className="question-title mt-5">
//                     {questions[currentQuestionIndex].question}
//                   </Card.Title>
//                   <ul className="m-5 quiz-ul">
//                     {questions[currentQuestionIndex].answers.map((answer, index) => (
//                       <li key={index} className="quiz-li">
//                         <input
//                           className="answer-input mt-3"
//                           type="radio"
//                           id={`answer-${index}`}
//                           name="answer"
//                           value={answer.text}
//                           checked={selectedAnswers[currentQuestionIndex] === answer.text}
//                           onChange={() => handleAnswerSelection(answer.text)}
//                         />
//                         <label
//                           className="quiz-answer"
//                           htmlFor={`answer-${index}`}
//                         >
//                           {answer.text}
//                         </label>
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="form-buttons mt-5">
//                     {currentQuestionIndex > 0 && (
//                       <Button
//                         type="button"
//                         className="prev"
//                         variant="primary"
//                         onClick={handlePreviousQuestion}
//                       >
//                         Previous Question
//                       </Button>
//                     )}
//                     <Button
//                       type="button"
//                       className="next"
//                       variant="primary"
//                       disabled={!selectedAnswers[currentQuestionIndex]}
//                       onClick={currentQuestionIndex === questions.length - 1 ? handleQuizSubmit : handleNextQuestion}
//                     >
//                       {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next Question"}
//                     </Button>
//                   </div>
//                 </div>
//               )}
//               {currentQuestionIndex === null && (
//                 <div className="thank">
//                   <img className="done" src={done} alt="done" />
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



