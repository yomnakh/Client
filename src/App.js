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
import ParentComponent from "./components/All Courses/ParentComponent";
import Dashboard from "./components/Dashboard/Dashboard";


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap/*" element={<RoadMaps />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        {/**<Route path="/courses/coursedesc/:id" element={<CourseDescPage />} />
        <Route path="/courses/coursedesc/coursevideo/:id" element={<CourseVideo />} /> */}
        <Route path="/courses/coursedesc/:id/*" element={<ParentComponent />} />
        <Route path="/interview" element={<InterviewPage />}></Route>
        <Route path='/interview/react' element={<InterviewReact />} />
        <Route path='/interview/node' element={<InterviewNode />} />
        <Route path='/interview/angular' element={<InterviewAngular />} />
        <Route path='/interview/next' element={<InterviewNext />} />
        <Route path='/interview/network' element={<InterviewNetwork />} />
        <Route path='/interview/android' element={<InterviewAndroid />} />
        <Route path="/admin/*"  element={<Dashboard/>}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
