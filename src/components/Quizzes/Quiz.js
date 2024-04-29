
// import React, { useState, useEffect } from "react";
// import { Card, Container, Row, Col, Button, badge } from "react-bootstrap";
// import "./quiz.css"; // Import your CSS file

// function Quiz() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [quizTime, setQuizTime] = useState(300); // Adjust time in seconds
//   const [timeRemaining, setTimeRemaining] = useState(quizTime);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeRemaining((prevTime) => Math.max(0, prevTime - 1));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleNextQuestion = () => {
//     if (selectedAnswer) {
//       // Check if user selected an answer
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//       setSelectedAnswer(null); // Reset selected answer on next question
//     }
//   };

//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
//       setSelectedAnswer(null); // Reset selected answer on previous question
//     }
//   };

//   const questions = [
//     {
//       text: "What is the capital of France?",
//       answers: ["London", "Paris", "Berlin"],
//     },
//     {
//       text: "What is the capital of egypt?",
//       answers: ["London", "Paris", "cairo"],
//     },
//     {
//       text: "What is the capital of germeny?",
//       answers: ["London", "berlin", "paris"],
//     },
//     {
//       text: "What is the capital of aue?",
//       answers: ["London", "dubai", "Berlin"],
//     },
//     // Add more questions here
//   ];

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <div className="quiz-wrapper">
//       <Container className="quiz-container">
//         <Card className="quiz-card">
         
//           <Card.Body className="m-1">
//             <Card.Title className="quiz-title"> Quiz </Card.Title>
//             <badge className="badge timer-Badge">
//               {" "}
//               Time: {timeRemaining} seconds
//             </badge>

//             {currentQuestion ? (
//               <>
//                 <Card.Title className="question-title mt-5">
//                   {currentQuestion.text}
//                 </Card.Title>
//                 <ul className="m-5 quiz-ul">
//                   {currentQuestion.answers.map((answer, index) => (
//                     <li key={index} className="quiz-li">
//                       <input
//                         className="answer-input mt-3"
//                         type="radio"
//                         id={`answer-${index}`}
//                         name="answer"
//                         value={answer}
//                         onChange={() => setSelectedAnswer(answer)}
//                       />
//                       <label
//                         className="quiz-answer"
//                         htmlFor={`answer-${index}`}
//                       >
//                         {answer}
//                       </label>
//                     </li>
//                   ))}
//                 </ul>
//               </>
//             ) : (
//               <div className="thank">
//                 Thank you :) You've completed the quiz!
//               </div>
//             )}

//             {currentQuestion && timeRemaining > 0 && (
//               <div className="form-buttons mt-5">
//                 <button
//                   type="button"
//                   className="prev"
//                   variant="primary"
//                   disabled={currentQuestionIndex === 0} // Disable if on first question
//                   onClick={handlePreviousQuestion}
//                 >
//                   <i className="fa-solid fa-arrow-left"></i> Previous Question
//                 </button>
//                 <button
//                   type="button"
//                   className="next"
//                   variant="primary"
//                   disabled={!selectedAnswer} // Disable if no answer selected
//                   onClick={handleNextQuestion}
//                 >
//                   {currentQuestionIndex === questions.length - 1
//                     ? "Submit"
//                     : "Next Question"}
//                   <i className="fa-solid fa-arrow-right"></i>
//                 </button>
//               </div>
//             )}
//           </Card.Body>
//         </Card>
//       </Container>
//     </div>
//   );
// }

// export default Quiz;





// import React, { useState, useEffect } from "react";
// import { Card, Container, Button, Badge } from "react-bootstrap";
// import "./quiz.css"; // Import your CSS file

// function Quiz() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
//   const [selectedAnswers, setSelectedAnswers] = useState([]);
//   const [quizTime, setQuizTime] = useState(300); // Adjust time in seconds
//   const [timeRemaining, setTimeRemaining] = useState(quizTime);
//   const [score, setScore] = useState(0);


//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeRemaining((prevTime) => Math.max(0, prevTime - 1));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);


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
//     // Set the current question index to 0 when the quiz starts
//     setCurrentQuestionIndex(0);
//   };
  

//   const handleNextQuestion = () => {
//     if (selectedAnswers) {
//       // Check if user selected an answer
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//       setSelectedAnswers(5); // Reset selected answer on next question
//     }
//   };

//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
//       setSelectedAnswers(); // Reset selected answer on previous question
//     }
//   };

//   const questions = [
//     {
//       text: "What is the capital of France?",
//       answers: ["London", "Paris", "Berlin"],
//       correctAnswer: "Paris",
//     },
//     {
//       text: "What is the capital of Egypt?",
//       answers: ["London", "Paris", "Cairo"],
//       correctAnswer: "Cairo",
//     },
//     {
//       text: "What is the capital of Germany?",
//       answers: ["London", "Berlin", "Paris"],
//       correctAnswer: "Berlin",
//     },
//     {
//       text: "What is the capital of the UAE?",
//       answers: ["London", "Dubai", "Berlin"],
//       correctAnswer: "Dubai",
//     },
//     // Add more questions here
//   ];

//   const currentQuestion = questions[currentQuestionIndex];
//   const isLastQuestion = currentQuestionIndex === questions.length - 1;

//   const handleAnswerSelection = (answer) => {
//     setSelectedAnswers((prevAnswers) => {
//       const updatedAnswers = [...prevAnswers];
//       updatedAnswers[currentQuestionIndex] = answer;
//       return updatedAnswers;
//     });
//   };

//   const calculateScore = () => {
//     let score = 0;
//     selectedAnswers.forEach((answer, index) => {
//       if (answer === questions[index].correctAnswer) {
//         score++;
//       }
//     });
//     return score;
//   };

//   const handleQuizSubmit = () => {
//     const score = calculateScore();
//     setScore(score);
//   };

//   return (
//     <div className="quiz-wrapper">
//       <Container className="quiz-container">
//       {!currentQuestionIndex && (
//           <div className="intro-section">
//             <h2>Welcome to the Quiz!</h2>
//             <p>This quiz will test your knowledge of world capitals.</p>
//             <Button onClick={handleStartQuiz} variant="primary">
//               Start Quiz
//             </Button>
//           </div>
//         )}

// {currentQuestionIndex !== null && (
//         <Card className="quiz-card">
//           <Card.Body className="m-1">
//             <Card.Title className="quiz-title"> Quiz </Card.Title>
//             <Badge className="badge timer-Badge">
//               Time: {timeRemaining} seconds
//             </Badge>
//             {currentQuestionIndex > 0 && (
//                 <button
//                   type="button"
//                   className="prev"
//                   variant="primary"
//                   onClick={handlePreviousQuestion}
//                 >
//                   <i className="fa-solid fa-arrow-left"></i> Previous Question
//                 </button> 
//             )}

//             {currentQuestion ? (
//               <div>
//                 <Card.Title className="question-title mt-5">
//                   {currentQuestion.text}
//                 </Card.Title>
//                 <ul className="m-5 quiz-ul">
//                   {currentQuestion.answers.map((answer, index) => (
//                     <li key={index} className="quiz-li">
//                       <input
//                         className="answer-input mt-3"
//                         type="radio"
//                         id={`answer-${index}`}
//                         name="answer"
//                         value={answer}
//                         checked={selectedAnswers[currentQuestionIndex] === answer}
//                         onChange={() => handleAnswerSelection(answer)}
//                       />
//                       <label
//                         className="quiz-answer"
//                         htmlFor={`answer-${index}`}
//                       >
//                         {answer}
//                       </label>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="form-buttons mt-5">
//                   <Button
//                     type="button"
//                     className="prev"
//                     variant="primary"
//                     disabled={currentQuestionIndex === 0}
//                     onClick={handlePreviousQuestion}
//                   >
//                     <i className="fa-solid fa-arrow-left"></i> Previous Question
//                   </Button>
//                   <Button
//                     type="button"
//                     className="next"
//                     variant="primary"
//                     disabled={!selectedAnswers[currentQuestionIndex]}
//                     onClick={isLastQuestion ? handleQuizSubmit : handleNextQuestion}
//                   >
//                     {isLastQuestion ? "Submit" : "Next Question"}
//                     <i className="fa-solid fa-arrow-right"></i>
//                   </Button>
//                 </div>
//               </div>
//             ) : (
//               <div className="thank">
//                 Thank you! You've completed the quiz!
//                 <div>Your score: {score}</div>
//               </div>
//             )}
//           </Card.Body>
//         </Card>
//   )}
//       </Container>
//     </div>
//   );
// }
// export default Quiz;


// import React, { useState, useEffect } from "react";
// import { Card, Container, Button, Badge } from "react-bootstrap";
// import "./quiz.css"; // Import your CSS file

// function Quiz() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [quizTime, setQuizTime] = useState(300); // Adjust time in seconds
//   const [timeRemaining, setTimeRemaining] = useState(null);
//   const [score, setScore] = useState(null);


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
//     // Set the current question index to 0 when the quiz starts
//     setCurrentQuestionIndex(0);
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
//       text: "What is the capital of France?",
//       answers: ["London", "Paris", "Berlin"],
//     },
//     {
//       text: "What is the capital of Egypt?",
//       answers: ["London", "Paris", "Cairo"],
//     },
//     {
//       text: "What is the capital of Germany?",
//       answers: ["London", "Berlin", "Paris"],
//     },
//     {
//       text: "What is the capital of the UAE?",
//       answers: ["London", "Dubai", "Berlin"],
//     },
//     // Add more questions here
//   ];
//   const handleQuizSubmit = () => {
//     // Calculate the score based on the selected answers
//     let correctAnswers = 0;
//     for (let i = 0; i < questions.length; i++) {
//       if (selectedAnswers[i] === questions[i].correctAnswer) {
//         correctAnswers++;
//       }
//     }
//     const calculatedScore = (correctAnswers / questions.length) * 100;
//     setScore(calculatedScore);
//   };
//   const currentQuestion = questions[currentQuestionIndex];
//   const isLastQuestion = currentQuestionIndex === questions.length - 1;

//   return (
//     <div className="quiz-wrapper">
//       <Container className="quiz-container">
//         {!currentQuestionIndex && (
//           <div className="intro-section">
//             <h2>Welcome to the Quiz!</h2>
//             <p>This quiz will test your knowledge of world capitals.</p>
//             <Button onClick={handleStartQuiz} variant="primary">
//               Start Quiz
//             </Button>
//           </div>
//         )}
//         {currentQuestionIndex !== null && (
//           <Card className="quiz-card">
//             <Card.Body className="m-1">
//               <Card.Title className="quiz-title"> Quiz </Card.Title>
//               <Badge className="badge timer-Badge">
//                 Time: {timeRemaining} seconds
//               </Badge>

//              {currentQuestion ? (
//               <div>
//                 <Card.Title className="question-title mt-5">
//                   {currentQuestion.text}
//                 </Card.Title>
//                 <ul className="m-5 quiz-ul">
//                   {currentQuestion.answers.map((answer, index) => (
//                     <li key={index} className="quiz-li">
//                       <input
//                         className="answer-input mt-3"
//                         type="radio"
//                         id={`answer-${index}`}
//                         name="answer"
//                         value={answer}
//                         checked={selectedAnswers[currentQuestionIndex] === answer}
//                         onChange={() => handleAnswerSelection(answer)}
//                       />
//                       <label
//                         className="quiz-answer"
//                         htmlFor={`answer-${index}`}
//                       >
//                         {answer}
//                       </label>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="form-buttons mt-5">

//                 {currentQuestionIndex > 0 && (
//                 <button
//                   type="button"
//                   className="prev"
//                   variant="primary"
//                   onClick={handlePreviousQuestion}
//                 >
//                   <i className="fa-solid fa-arrow-left"></i> Previous Question
//                 </button>
//               )}
//                   <Button
//                     type="button"
//                     className="next"
//                     variant="primary"
//                     disabled={!selectedAnswers[currentQuestionIndex]}
//                     onClick={isLastQuestion ? handleQuizSubmit : handleNextQuestion}
//                   >
//                     {isLastQuestion ? "Submit" : "Next Question"}
//                     <i className="fa-solid fa-arrow-right"></i>
//                   </Button>
//                 </div>
//               </div>
//             ) : (
//               <div className="thank">
//                 Thank you! You've completed the quiz!
//                 <div>Your score: {score}</div>
//               </div>
//             )}
//             </Card.Body>
//           </Card>
//         )}
//       </Container>
//     </div>
//   );
// }
// export default Quiz;










// import React, { useState, useEffect } from "react";
// import { Card, Container, Button, Badge } from "react-bootstrap";
// import "./quiz.css"; // Import your CSS file

// function Quiz() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [quizTime, setQuizTime] = useState(300); // Adjust time in seconds
//   const [timeRemaining, setTimeRemaining] = useState(null);
//   const [score, setScore] = useState(null);

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
//     console.log("Start quiz button clicked");
//     // Set the current question index to 0 when the quiz starts
//     setCurrentQuestionIndex(0);
//     console.log("Current question index:", currentQuestionIndex);
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
//       text: "What is the capital of France?",
//       answers: ["London", "Paris", "Berlin"],
//     },
//     {
//       text: "What is the capital of Egypt?",
//       answers: ["London", "Paris", "Cairo"],
//     },
//     {
//       text: "What is the capital of Germany?",
//       answers: ["London", "Berlin", "Paris"],
//     },
//     {
//       text: "What is the capital of the UAE?",
//       answers: ["London", "Dubai", "Berlin"],
//     },
//     // Add more questions here
//   ];

//   const handleQuizSubmit = () => {
//     // Calculate the score based on the selected answers
//     let correctAnswers = 0;
//     for (let i = 0; i < questions.length; i++) {
//       if (selectedAnswers[i] === questions[i].correctAnswer) {
//         correctAnswers++;
//       }
//     }
//     const calculatedScore = (correctAnswers / questions.length) * 100;
//     setScore(calculatedScore);
//   };

//   const currentQuestion = questions[currentQuestionIndex];
//   const isLastQuestion = currentQuestionIndex === questions.length - 1;
//   {console.log("Current question:", currentQuestion)}
//   return (
//     <div className="quiz-wrapper">
//       <Container className="quiz-container">
//         {!currentQuestionIndex ? (
//           <div className="intro-section">
//             <h2>Welcome to the Quiz!</h2>
//             <p>This quiz will test your knowledge of world capitals.</p>
//             <Button onClick={handleStartQuiz} variant="primary">
//               Start Quiz
//             </Button>
//           </div>
          
//         ) : (
//           <Card className="quiz-card">
//             <Card.Body className="m-1">
//               <Card.Title className="quiz-title"> Quiz </Card.Title>
//               <Badge className="badge timer-Badge">
//                 Time: {timeRemaining} seconds
//               </Badge>
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
//                           checked={
//                             selectedAnswers[currentQuestionIndex] === answer
//                           }
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
//                         <i className="fa-solid fa-arrow-left"></i> Previous
//                         Question
//                       </button>
//                     )}
//                     <Button
//                       type="button"
//                       className="next"
//                       variant="primary"
//                       disabled={!selectedAnswers[currentQuestionIndex]}
//                       onClick={
//                         isLastQuestion ? handleQuizSubmit : handleNextQuestion
//                       }
//                     >
//                       {isLastQuestion ? "Submit" : "Next Question"}
//                       <i className="fa-solid fa-arrow-right"></i>
//                     </Button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="thank">
//                   Thank you! You've completed the quiz!
//                   <div>Your score: {score}</div>
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
import { Card, Container, Button, Badge } from "react-bootstrap";
import "./quiz.css"; // Import your CSS file

function Quiz() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizTime, setQuizTime] = useState(300); // Adjust time in seconds
  const [timeRemaining, setTimeRemaining] = useState(quizTime);
  const [score, setScore] = useState(0);

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
    {
      text: "1- Who is the father of HTML ?",
      answers: ["a. Rasmus Lerdorf", "b. Tim Berners-Lee", "c. Brendan Eich","d. Sergey Brin"],
      correctAnswer: "b. Tim Berners-Lee",
    },
    {
      text: "2- The correct sequence of HTML tags for starting a webpage is ?",
      answers: ["a. Head, Title, HTML, body", "b. HTML, Body, Title, Head", "c. HTML, Head, Title, Body","d. HTML, Title, Head , Body"],
      correctAnswer: "c. HTML, Head, Title, Body",
    },
    {
      text: "3- An HTML program is saved by using the ____ extension ?",
      answers: ["a. .ht", "b. .hmtl", "c. .hml","d. None of the above"],
      correctAnswer: "d. None of the above",
    },
    {
      text: "4- To create HTML document you require a...... ?",
      answers: ["a. web page editing software", "b. High powered computer", "c. Just a notepad can be used","d. None of the above"],
      correctAnswer: "c. Just a notepad can be used",
    },
    {
      text: "5- ?How to insert an image in HTML?",
      answers: ["a. <img href = 'image.png' />", "b. <img scr = 'image.png' />", "c. <img link = 'image.png' />","d. <img src = 'image.png' />"],
      correctAnswer: "d. <img src = 'image.png' />",
    },
    // Add more questions here
  ];

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const calculateScore = () => {
    let score = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });
    return score;
  };

  
  const handleQuizSubmit = () => {
    const score = calculateScore();
    setScore(score);
  };

  return (
    <div className="quiz-wrapper">
      <Container className="quiz-container">
        {!isQuizStarted && (
         <div className=" start-quiz">
            
             
            <h1 className="welcome-quiz-">Welcome to the Quiz!</h1>
            <p>This quiz will test your knowledge of world capitals.</p>
            <Button onClick={handleStartQuiz} variant="primary">
              Start Quiz
            </Button>
            
            </div>
          
        )}
        {isQuizStarted && (
          <Card className="quiz-card">
            <Card.Body className="m-1">
              <Card.Title className="quiz-title"> Quiz </Card.Title>
              <Badge className="badge timer-Badge">
                Time: {timeRemaining} seconds
              </Badge>

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
                    onClick={handleNextQuestion}
                  >
                    {isLastQuestion ? "Submit" : "Next Question"}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="thank">
                Thank you! You've completed the quiz!
                <div>Your score: {score}</div>
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