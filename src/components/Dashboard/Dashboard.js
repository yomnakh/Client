import { Link, Route, Routes } from 'react-router-dom';
import StudentDash from './StudentDash';
import InstructorDash from './InstructorDash';
import QuizzesDash from './QuizzesDash';
import CourseDash from './CourseDash';
import CourseQuizeDash from './CourseQuizeDash';
import ErrorPage from '../../Pages/ErrorPage';
import LessonDash from './LessonDash';
import './Dashboard.css'

const Dashboard = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userRole = userData ? userData.role : null;
    return (
        <div className='container-fluid dshh dash'>
            <div className='row'>
                {isLoggedIn && userData.role === "admin" && (
                    <div className={`interview dash-side shadow col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column`}>
                        <div className='interviewSide dashAside'>
                            <hr className='text-secondary' />
                            <Link className='text-decoration-none text-white  d-flex justify-content-evenly align-content-center' style={{ marginTop: "100px" }}>
                                {/* <i class="fa-solid fa-gauge interviewIcon"></i> */}
                                <span className=' d-none d-sm-inline interviewSpan dash-header m-auto'>Dashboard</span>
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

                                <li className="nav-item text-white ">
                                    <Link to={"lessons"} className="nav-link  text-white d-flex justify-content-evenly align-content-center" aria-current="page">
                                        <i class="fa-regular fa-file-video interviewIcon"></i>
                                        <span className=' d-none d-sm-inline interviewSpan'>Lessons</span>
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
                                        <span className=' d-none d-sm-inline interviewSpan'>Course Exam</span>
                                    </Link>
                                </li>

                            </ul>
                        </div>

                    </div>
                )}
                {isLoggedIn && userData.role === "instructor" && (
                    <div className={`interview  dash-side shadow col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column`}>
                        <div className='interviewSide'>
                            <hr className='text-secondary' />
                            <Link className='text-decoration-none text-white  d-flex justify-content-evenly align-content-center' style={{ marginTop: "90px" }}>
                                {/* <i class="fa-solid fa-gauge interviewIcon"></i> */}
                                <span className=' d-none d-sm-inline interviewSpan dash-header1 mb-3'>Dashboard</span>
                            </Link>
                            <ul className="nav nav-pills flex-column">
                                <hr className='text-secondary' />
                                <li className="nav-item text-white ">
                                    <Link to={"courses"} className="nav-link  text-white d-flex justify-content-evenly align-content-center" aria-current="page">
                                        <i class="fa-solid fa-laptop-code interviewIcon"></i>
                                        <span className=' d-none d-sm-inline interviewSpan'>Courses</span>
                                    </Link>
                                </li>

                                <hr className='text-secondary' />

                                <li className="nav-item text-white ">
                                    <Link to={"lessons"} className="nav-link  text-white d-flex justify-content-evenly align-content-center" aria-current="page">
                                        <i class="fa-regular fa-file-video interviewIcon"></i>
                                        <span className=' d-none d-sm-inline interviewSpan'>Lessons</span>
                                    </Link>
                                </li>
                                <hr className='text-secondary' />


                                <li className="nav-item text-white ">
                                    <Link to={"course-quizzes"} className="nav-link  text-white d-flex justify-content-evenly align-content-center" aria-current="page">
                                        <i class="fa-solid fa-file-circle-question interviewIcon"></i>
                                        <span className=' d-none d-sm-inline interviewSpan'>Course Exam</span>
                                    </Link>
                                </li>

                                <hr className='text-secondary' />
                            </ul>
                        </div>
                    </div>
                )}
                {
                    isLoggedIn && userData.role === "student" && (
                        <div style={{ height: "100vh" }}>
                            <ErrorPage />
                        </div>
                    )
                }
                <div style={{ marginTop: "100px" }} className='dashContent col-auto col-md-10 mx-auto'>
                    {
                        userData.role === "admin" && (<Routes>
                            <Route path="/students" element={<StudentDash />} />
                            <Route path="/instructors" element={<InstructorDash />} />
                            <Route path="/courses" element={<CourseDash />} />
                            <Route path="/quizzes" element={<QuizzesDash />} />
                            <Route path="/course-quizzes" element={<CourseQuizeDash />} />
                            <Route path="/lessons" element={<LessonDash />} />
                        </Routes>)}
                    {userData.role === "instructor" && (<Routes>
                        <Route path="/courses" element={<CourseDash />} />
                        <Route path="/course-quizzes" element={<CourseQuizeDash />} />
                        <Route path="/lessons" element={<LessonDash />} />
                    </Routes>)}

                </div>
            </div>
        </div>

    )
}

export default Dashboard