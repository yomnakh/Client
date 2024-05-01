import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import StudentDash from './StudentDash';
import InstructorDash from './InstructorDash';
import QuizzesDash from './QuizzesDash';
import CourseDash from './CourseDash';
import CourseQuizeDash from './CourseQuizeDash';

const Dashboard = () => {
    return (
        <div className='container-fluid' style={{ height: "100vh" }}>
            <div className='row'>
                <div className={`interview shadow col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column`}>
                    <div className='interviewSide'>
                        <Link className='text-decoration-none text-white  d-flex justify-content-evenly align-content-center' style={{ marginTop: "120px" }}>
                            <i class="fa-solid fa-gauge interviewIcon"></i>
                            <span className=' d-none d-sm-inline interviewSpan '>Dashboard</span>
                        </Link>

                        <hr className='text-secondary' />

                        <ul className="nav nav-pills flex-column">

                            <li className="nav-item text-white  mb-2">
                                <Link to={"students"} className="nav-link  text-white d-flex justify-content-evenly align-content-center" aria-current="page">
                                    <i class="fa-solid fa-users interviewIcon"></i>
                                    <span className=' d-none d-sm-inline interviewSpan'>Students</span>
                                </Link>
                            </li>

                            <hr className='text-secondary' />

                            <li className="nav-item text-white  mb-2">
                                <Link to={"instructors"} className="nav-link  text-white d-flex justify-content-evenly align-content-center" aria-current="page">
                                    <i class="fa-solid fa-user-tie interviewIcon"></i>
                                    <span className=' d-none d-sm-inline interviewSpan'>Instructor</span>
                                </Link>
                            </li>

                            <hr className='text-secondary' />

                            <li className="nav-item text-white ">
                                <Link to={"courses"} className="nav-link  text-white d-flex justify-content-evenly align-content-center" aria-current="page">
                                    <i class="fa-solid fa-laptop-code interviewIcon"></i>
                                    <span className=' d-none d-sm-inline interviewSpan'>Courses</span>
                                </Link>
                            </li>

                            <hr className='text-secondary' />

                            <li className="nav-item text-white">
                                <Link to={"quizzes"} className="nav-link  text-white  d-flex justify-content-evenly align-content-center" aria-current="page">
                                    <i class="fa-regular fa-circle-question interviewIcon"></i>
                                    <span className=' d-none d-sm-inline interviewSpan'>Quizzes</span>
                                </Link>
                            </li>


                            <hr className='text-secondary' />


                            <li className="nav-item text-white ">
                                <Link to={"course-quizzes"} className="nav-link  text-white d-flex justify-content-evenly align-content-center" aria-current="page">
                                    <i class="fa-solid fa-file-circle-question interviewIcon"></i>
                                    <span className=' d-none d-sm-inline interviewSpan'>Course Quiz</span>
                                </Link>
                            </li>

                            <hr className='text-secondary' />

                        </ul>
                    </div>
                </div>
                <div style={{ marginTop: "100px" }} className='dashContent col-auto col-md-10'>
                    <Routes>
                        <Route path="/students" element={<StudentDash />} />
                        <Route path="/instructors" element={<InstructorDash />} />
                        <Route path="/courses" element={<CourseDash />} />
                        <Route path="/quizzes" element={<QuizzesDash />} />
                        <Route path="/course-quizzes" element={<CourseQuizeDash />} />
                    </Routes>
                </div>
            </div>
        </div>

    )
}

export default Dashboard