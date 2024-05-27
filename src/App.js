import React, { useState } from "react";
import RoadMaps from "./Pages/RoadMaps";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CoursesPage from "./Pages/CoursesPage";
import CourseDesc from "./components/All Courses/CourseDesc";
import CourseDescPage from "./Pages/CourseDescPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import ErrorPage from "./Pages/ErrorPage";
import CourseVideo from "./components/All Courses/CourseVideo";
import InterviewPage from "./Pages/InterviewPage";
import InterviewReact from "./components/Career/interview/InterviewsTracs/InterviewReact";
import InterviewNode from "./components/Career/interview/InterviewsTracs/InterviewNode";
import InterviewAngular from "./components/Career/interview/InterviewsTracs/InterviewAngular";
import InterviewNext from "./components/Career/interview/InterviewsTracs/InterviewNext";
import InterviewNetwork from "./components/Career/interview/InterviewsTracs/InterviewNetwork";
import InterviewAndroid from "./components/Career/interview/InterviewsTracs/InterviewAndroid";
import CvPage1 from './components/Cv/CvPage1';
import CvPage2 from './components/Cv/CvPage2';
import CvPage3 from './components/Cv/CvPage3';
import CvPage4 from './components/Cv/CvPage4';
import CvPage5 from './components/Cv/CvPage5';
import CvPage6 from './components/Cv/CvPage6';
import CvPage7 from './components/Cv/CvPage7';
import CvPage8 from './components/Cv/CvPage8';
import { Outlet } from 'react-router-dom';
import Quiz from "./components/Quizzes/Quiz";
import JobsShow from "../src/components/Jobs/JobsShow";
import JobsApp from "../src/components/Jobs/JobsApp";
import ParentComponent from "./components/All Courses/ParentComponent";
import Dashboard from "./components/Dashboard/Dashboard";
import MyLearning from "./components/Mylearning/Learning"
// import Resetpassword from "./components/Login/ForgetPassword"
import ForgetPage from "./Pages/ForgetPage";
import ResetPage from "./Pages/ResetPage";
import Jobs from "../src/components/Jobs/Jobs"
import VerifyEmail from "./Pages/Verification/VerifyEmail";
import CourseExam from "./components/All Courses/CourseExam";


const App = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleSelectQuiz = (quizType) => {
    setSelectedQuiz(quizType);
  };

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap/*" element={<RoadMaps />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forget-password" element={<ForgetPage />} />
        <Route path="/password/reset-password/:userId/:token" element={<ResetPage />} />

        <Route path="/courses/coursedesc/:id/*" element={<ParentComponent />} />
        <Route path="/interview" element={<InterviewPage />}></Route>
        <Route path='/interview/react' element={<InterviewReact />} />
        <Route path='/interview/node' element={<InterviewNode />} />
        <Route path='/interview/angular' element={<InterviewAngular />} />
        <Route path='/interview/next' element={<InterviewNext />} />
        <Route path='/interview/network' element={<InterviewNetwork />} />
        <Route path='/interview/android' element={<InterviewAndroid />} />
        {isLoggedIn ? (<Route path='/dash/*' element={<Dashboard />} />) : (<Route path="*" element={<ErrorPage />} />)}
        <Route path='/quiz/:type' element={<Quiz />} />
                <Route path='/Jobs' element={<Jobs />} />
                <Route path="/jobsShow/:jobId" element={<JobsShow />} />
                <Route path="/jobApp/:jobId" element={<JobsApp />} />


        <Route path="/course-final-exam/:id" element={<CourseExam />} />
        <Route path="/mylearning" element={<MyLearning />} />
        <Route path='/CV' element={<Outlet />}>
          <Route path='' element={<CvPage1 />} />
          <Route path='Form2' element={<CvPage2 />} />
          <Route path='Form3' element={<CvPage3 />} />
          <Route path='Form4' element={<CvPage4 />} />
          <Route path='Form5' element={<CvPage5 />} />
          <Route path='Form6' element={<CvPage6 />} />
          <Route path='Form7' element={<CvPage7 />} />
          <Route path='Form8' element={<CvPage8 />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
