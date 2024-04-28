// import React, { useState, useEffect } from 'react';

// function Quiz() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [quizTime, setQuizTime] = useState(300); // Adjust time in seconds
//   const [timeRemaining, setTimeRemaining] = useState(quizTime);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeRemaining(prevTime => Math.max(0, prevTime - 1));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleNextQuestion = () => {
//     setCurrentQuestionIndex(prevIndex => prevIndex + 1);
//     setSelectedAnswer(null);
//   };

//   const questions = [
//     /* Your questions here */,
//   ];

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <div className="quiz-container">
//       <h1>Quiz</h1>
//       <div className="timer">Time: {timeRemaining} seconds</div>
//       {currentQuestion ? (
//         <Question
//           question={currentQuestion.text}
//           answers={currentQuestion.answers}
//           setSelectedAnswer={setSelectedAnswer} // Pass the function as a prop
//         />
//       ) : (
//         <div>You've completed the quiz!</div>
//       )}
//       {currentQuestion && timeRemaining > 0 && (
//         <button className="next-button" onClick={handleNextQuestion}>
//           Next Question
//         </button>
//       )}
//     </div>
//   );
// }

// function Question({ question, answers, setSelectedAnswer }) {
//   return (
//     <div>
//       <p>{question}</p>
//       <ul>
//         {answers.map((answer, index) => (
//           <li key={index}>
//             <input
//               type="radio"
//               id={`answer-${index}`}
//               name="answer"
//               value={answer}
//               onChange={() => setSelectedAnswer(answer)}
//             />
//             <label htmlFor={`answer-${index}`}>{answer}</label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Quiz;






// import React, { useState, useEffect } from 'react';
// import { Card, Container, Row, Col, Button } from 'react-bootstrap';
// import "./quiz.css"
// // import Quiz from './Quiz';

// function Quiz() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [quizTime, setQuizTime] = useState(300); // Adjust time in seconds
//   const [timeRemaining, setTimeRemaining] = useState(quizTime);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeRemaining(prevTime => Math.max(0, prevTime - 1));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleNextQuestion = () => {
//     setCurrentQuestionIndex(prevIndex => prevIndex + 1);
//     setSelectedAnswer(null);
//   };

//  const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(prevIndex => prevIndex - 1);
//       setSelectedAnswer(null); // Reset selected answer on previous question
//     }
//   }
  

//   const questions = [
//     {
//       text: 'What is the capital of France?',
//       answers: ['London', 'Paris', 'Berlin'],

//     },
//     {
//         text: 'What is the capital of egypt?',
//         answers: ['London', 'Paris', 'cairo'],
        
//       },
//       {
//         text: 'What is the capital of germeny?',
//         answers: ['London', 'berlin', 'paris'],
        
//       },
//       {
//         text: 'What is the capital of aue?',
//         answers: ['London', 'dubai', 'Berlin'],
        
//       },
//     // Add more questions here
//   ];

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//       <div className="quiz-wrapper">
//     <Container className="quiz-container" >
//       <Card className='quiz-card'>
//         <Card.Header className='quiz-header' as="h5">Quiz</Card.Header>
//         <Card.Body className='m-5'>
//           <div className="timer">Time: {timeRemaining} seconds</div>
//           {currentQuestion ? (
//             <>
//               <Card.Title className='question-title mt-5'>{currentQuestion.text}</Card.Title>
//               <ul className='m-5 quiz-ul'>
//                 {currentQuestion.answers.map((answer, index) => (
//                   <li key={index} className='quiz-li'>
//                     <input
//                     className='answer-input mt-3'
//                       type="radio"
//                       id={`answer-${index}`}
//                       name="answer"
//                       value={answer}
//                       onChange={() => setSelectedAnswer(answer)}
//                     />
//                     <label className='quiz-answer' htmlFor={`answer-${index}`}>{answer}</label>
//                   </li>
//                 ))}
//               </ul>
//             </>
//           ) : (
//             <div className='thank'>Thank you :)  You've completed the quiz!</div>
//           )}
//         </Card.Body>
//         {currentQuestion && timeRemaining > 0 && (
//           <Card.Footer className="text-center">
//             {/* <Button variant="primary" onClick={handleNextQuestion}>
//               Next Question
//             </Button>
//             <Button variant="primary" onClick={handleNextQuestion}>
//               Next Question
//             </Button> */}
//             <div class="form-buttons mt-5">
// 				<button type="button" class="prev" variant="primary" disabled={currentQuestionIndex === 0} // Disable if on first question
//                   onClick={handlePreviousQuestion}><i class="fa-solid fa-arrow-left"></i>last question</button>
// 				<button type="button" class="next" variant="primary" onClick={handleNextQuestion}>next question<i class="fa-solid fa-arrow-right"></i></button>
// 				</div>
//           </Card.Footer>
//         )}
//       </Card>
//     </Container>
//     </div>
//   );
// }

// export default Quiz;


import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import './quiz.css'; // Import your CSS file

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizTime, setQuizTime] = useState(300); // Adjust time in seconds
  const [timeRemaining, setTimeRemaining] = useState(quizTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => Math.max(0, prevTime - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNextQuestion = () => {
    if (selectedAnswer) { // Check if user selected an answer
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null); // Reset selected answer on next question
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
      setSelectedAnswer(null); // Reset selected answer on previous question
    }
  };

  const questions = [
    {
      text: 'What is the capital of France?',
      answers: ['London', 'Paris', 'Berlin'],
    },
    {
      text: 'What is the capital of egypt?',
      answers: ['London', 'Paris', 'cairo'],
    },
    {
      text: 'What is the capital of germeny?',
      answers: ['London', 'berlin', 'paris'],
    },
    {
      text: 'What is the capital of aue?',
      answers: ['London', 'dubai', 'Berlin'],
    },
    // Add more questions here
  ];

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-wrapper">
      <Container className="quiz-container">
        <Card className="quiz-card">
          <Card.Header className="quiz-header" as="h5">
            Quiz
          </Card.Header>
          <Card.Body className="m-5">
            <div className="timer">Time: {timeRemaining} seconds</div>
            {currentQuestion ? (
              <>
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
                        onChange={() => setSelectedAnswer(answer)}
                      />
                      <label className="quiz-answer" htmlFor={`answer-${index}`}>
                        {answer}
                      </label>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="thank">Thank you :) You've completed the quiz!</div>
            )}


{currentQuestion && timeRemaining > 0 && (

<div className="form-buttons mt-5">
                <button
                  type="button"
                  className="prev"
                  variant="primary"
                  disabled={currentQuestionIndex === 0} // Disable if on first question
                  onClick={handlePreviousQuestion}
                >
                  <i className="fa-solid fa-arrow-left"></i> Previous Question
                </button>
                <button
                  type="button"
                  className="next"
                  variant="primary"
                  disabled={!selectedAnswer} // Disable if no answer selected
                  onClick={handleNextQuestion}
                >
                  {currentQuestionIndex === questions.length - 1 ? (
                    'Submit'
                  ) : (
                    'Next Question'
                  )}
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
               )}
          </Card.Body>

        </Card>
      </Container>

    </div>
   );
 }

     export default Quiz;
