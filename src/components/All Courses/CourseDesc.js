import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tabs, Tab, Button } from "react-bootstrap";
import axios from 'axios';
import { useParams, Link, useNavigate, json } from 'react-router-dom';
import asidecourseimg from "../../Assets/asidecourseimg.png";
import Swal from 'sweetalert2';
import Api from "../../config/api";
import CourseVideo from './CourseVideo';

const CourseDesc = ({ course }) => {
  const { id } = useParams();
  // const [course, setCourse] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userData = JSON.parse(localStorage.getItem('userData'));
  const token = localStorage.getItem("access_token");
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const instructorMail = "mailto:"

  const handleEnrollClick = async () => {
    if (!isLoggedIn) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need to be logged in to enroll in this course.'
      });
      navigate('/login');
    } else {
      try {
        const response = await axios.post(
          `https://edutrax.vercel.app/api/enroll-course/enroll/${userData._id}`,
          { course: id },
          {
            headers: {
              token: `${token}`
            }
          }
        );
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: response.data.message
        }).then(() => {
          // Redirect to the course video page or perform enrollment logic
          navigate(`/courses/coursedesc/${id}/coursevideo`);
        });
      } catch (error) {
        console.error('Error enrolling in course:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.message || 'An error occurred while enrolling in the course.'
        });
        if (error.response.data.message === "Already enrolled in this course") {
          navigate(`/courses/coursedesc/${id}/coursevideo`);
        }
      }
    }
  };

  if (!course) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <div className="CourseInfoMainData">
        <Container>
          <h2 className="CourseInfoMainData_header">{course.title}</h2>

          <p className="text-12px px-5 me-1 created_by">{course.header}</p>
          <div className="info-tag">
            <img loading="lazy" width="35px" height="35px" className="rounded-circle object-fit-cover me-1" src={course.instructor.avatar.url} alt="instructor img" />
            <p className="text-12px mt-5px me-1 created_by ">Created by</p>
            <p>
              <a className="created-by-instructor" href={"mailto:" + course.instructor.email}>
                {course.instructor.name}
              </a>
            </p>
            <br />
          </div>
          <div className="selection">
            <span className="language-icon">
              <i className="fas fa-globe"></i>
            </span>
            <select>
              <option value="en" className="language">
                English
              </option>
            </select>
            <div className="last-updated">
              <i className="fa-solid fa-calendar-days calender-icon"></i>
              <span>Last updated: {course.updatedAt}</span>

              <i className="far fa-clock  clock-icon"></i>
              <span> {course.hours} Hours</span>
            </div>
          </div>
        </Container>
      </div>

      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={8} lg={7} xl={7} className=" ms-auto">
            <div className="custom-box colm">
              <Tabs
                defaultActiveKey="Overview"
                id="fill-tab-example"
                className="mb-3"
                fill
              >
                <Tab eventKey="Overview" title="Overview">
                  <h3 className="overview_header">Course description</h3>
                  <p className="overview_content">
                    {course.description}
                  </p>
                  <h3 className="overview_what">What will I learn?</h3>
                  <p className="overview_content">
                    {course.willLearn}
                  </p>
                  <h3 className="overview_req">Requirements</h3>
                  <p>
                    <ul>
                      <li className="overview_content">
                        {course.requirement.r1}
                      </li>
                      <li className="overview_content">
                        {course.requirement.r2}
                      </li>
                    </ul>
                  </p>
                </Tab>
                <Tab eventKey="Instructor" title="Instructor">
                  <div className="instructorinfo">
                    <Container className="instructor-info">
                      <Row>
                        <Col
                          xs={12}
                          sm={12}
                          md={3}
                          lg={3}
                          xl={3}
                          className="instructor mx-auto"
                        >
                          <div>
                            <img
                              src={course.instructor.avatar.url}
                              className="instructorimg rounded-circle object-fit-cover me-1"
                              alt="instructorimg"
                              width="35px" height="35px"
                            />
                          </div>
                        </Col>
                        <Col
                          xs={12}
                          sm={12}
                          md={9}
                          lg={9}
                          xl={9}
                          className="instructor"
                        >
                          <div>
                            <h4 className="instructorName">{course.instructor.name}</h4>
                            <p className="instructorp">
                              {course.instructor.title}
                            </p>
                            <p className="instructorp">
                              {course.instructor.about}
                            </p>
                            <ul className="instructor_social-icons">
                              <li>
                                <a href={course.instructor} className="instructor_facebook">
                                  <i className="fa-brands fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a className="instructor_linkedin" href={"mailto:" + course.instructor.email}>
                                  <i class="fa-solid fa-envelope" title='Mail Me'></i>
                                </a>
                              </li>
                              <li>
                                <a href={course.instructor} className="instructor_twitter">
                                  𝕏
                                </a>
                              </li>
                              <button className="instructor_profile my-auto" >
                                <a className='my-auto' href={"mailto:" + course.instructor.email}>Contact Us</a>
                              </button>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Col>

          {/* //////////////////////////////////////////////////////////////////////////// */}
          <Col xs={12} sm={12} md={4} lg={3} xl={3} className="me-auto">
            <div className="custom-box">
              <img src={asidecourseimg} className="asidecourseimg " alt={""} />
              <h3 className="price">Free</h3>
              <div class="info-card">
                <div class="info-item">
                  <i class="icon ms-0">📚</i>
                  <span className="spanaside">Lectures</span>
                  <span>{course.lessons}</span>
                </div>
                <div class="info-item">
                  <i class="icon ms-0">⭐</i>
                  <span className="spanaside">Skill level</span>
                  <span>Beginner</span>
                </div>
                <div class="info-item">
                  <i class="icon ms-0">🕒</i>
                  <span className="spanaside">Expiry period</span>
                  <span>Lifetime</span>
                </div>
                <div class="info-item">
                  <i class="icon ms-0">🎓</i>
                  <span className="spanaside">Certificate</span>
                  <span>Soon.......</span>
                </div>
              </div>

              <Button className="enrollbtn" type="enroll" onClick={handleEnrollClick}>Enroll</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseDesc;
