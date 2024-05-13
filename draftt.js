// import React, { useState, useEffect } from "react";
// import { Card, Container, Button, Badge } from "react-bootstrap";
// import "./quiz.css"; // Import your CSS file

// function Quiz() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [quizTime, setQuizTime] = useState(300); // Adjust time in seconds
//   const [timeRemaining, setTimeRemaining] = useState(null);

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

//   const currentQuestion = questions[currentQuestionIndex];

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
//               {currentQuestionIndex > 0 && (
//                 <button
//                   type="button"
//                   className="prev"
//                   variant="primary"
//                   onClick={handlePreviousQuestion}
//                 >
//                   <i className="fa-solid fa-arrow-left"></i> Previous Question
//                 </button>
//               )}
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
//             </Card.Body>
//           </Card>
//         )}
//       </Container>
//     </div>
//   );
// }

// export default Quiz;
