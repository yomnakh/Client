import React from 'react'
import RoadMaps from './Pages/RoadMaps'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CoursesPage from './Pages/CoursesPage';
import CourseDesc from './components/All Courses/CourseDesc';
import CourseDescPage from './Pages/CourseDescPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import ErrorPage from './Pages/ErrorPage';



const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/roadmap/*' element={<RoadMaps />} />
        <Route path='/courses' element={<CoursesPage />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={< SignUpPage/>} />
        <Route path="/coursedescription/:id" element={<CourseDescPage />} />
         {/* <Route path="/" element={<CoursesPage /> } component={<DescPage/>} />
        <Route path="/courseData/:id" element={<DescPage/>}></Route>
        <Route path="/courseData/:id" element={<DescPage />} /> */}
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App;

