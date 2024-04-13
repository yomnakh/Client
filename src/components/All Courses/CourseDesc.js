import React from 'react';
import "./AllCourses.css";
import { Container, Row, Col, Tabs, Tab, Button } from "react-bootstrap";
import { courseData } from './CoursesData';
import instructor from "../../Assets/instructor.png";
import asidecourseimg from "../../Assets/asidecourseimg.png";
import { useParams } from 'react-router-dom';

const CourseDesc = () => {
  const { id } = useParams();
  const course = courseData.courses.find(course => course.id === parseInt(id));
  if (!course) {
    return <div>Course not found</div>;
  }
  return (
    <div>
      <div className="CourseInfoMainData">
        <Container>
          <h2 className="CourseInfoMainData_header">{course.title}</h2>

          <p class="text-12px px-5 me-1 created_by">{course.courseHeader} </p>
          <div class="info-tag">
            <img loading="lazy" width="35px" height="35px" class="rounded-circle object-fit-cover me-1" src={course.instructor.img} alt="instructor img" />
            <p class="text-12px mt-5px me-1 created_by ">Created by</p>
            <p>
              <a
                class="created-by-instructor"
                href="https://www.facebook.com/profile.php?id=100006483658713"
              >
                {course.instructor.name}
              </a>
            </p>
            <br></br>
          </div>
          <div class="selection">
            <span class="language-icon">
              <i class="fas fa-globe"></i>
            </span>
            <select>
              <option value="en" className="language">
                English
              </option>
            </select>
            <div class="last-updated">
              {" "}
              <i class="fa-solid fa-calendar-days calender-icon"></i>
              <span>Last updated: 2024-04-04</span>

              <i class="far fa-clock  -icon"></i>
              <span> {course.hours} Hours</span>

            </div>
          </div>
        </Container>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////// */}

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
                    {course.disc}
                  </p>
                  <h3 className="overview_what">What will i learn?</h3>
                  <p className="overview_content">
                    {course.willLearn}
                  </p>
                  <h3 className="overview_req">Requirements</h3>
                  <p>
                    <ul>
                      <li className="overview_content">
                        {course.require.r1}
                      </li>
                      <li className="overview_content">
                        {course.require.r2}
                      </li>
                    </ul>
                  </p>
                </Tab>
                <Tab eventKey="Instructor" title="Instructor">
                  <div className="instructorinfo">
                    {" "}
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
                              src={course.instructor.img}
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
                            <ul class="instructor_social-icons">
                              <li>
                                <a href="#" class="instructor_facebook">
                                <i class="fa-brands fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="instructor_linkedin">
                                  <i class="fa-brands fa-linkedin"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="instructor_twitter">
                                  𝕏
                                </a>
                              </li>

                              <button className="instructor_profile">
                                View profile
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
              <img src={asidecourseimg} className="asidecourseimg " />
              <h3 className="price">Free</h3>
              <div class="info-card">
                <div class="info-item">
                  <i class="icon">📚</i>
                  <span className="spanaside">Lectures</span>
                  <span>{course.lessons}</span>
                </div>
                <div class="info-item">
                  <i class="icon">⭐</i>
                  <span className="spanaside">Skill level</span>
                  <span>Beginner</span>
                </div>
                <div class="info-item">
                  <i class="icon">🕒</i>
                  <span className="spanaside">Expiry period</span>
                  <span>Lifetime</span>
                </div>
                <div class="info-item">
                  <i class="icon">🎓</i>
                  <span className="spanaside">Certificate</span>
                  <span>Yes</span>
                </div>
              </div>
              <Button className="enrollbtn" type="enroll">
                Enroll
              </Button>

              {/* <ul class="social-icons">
        <li><a href="#" class="facebook"> <i class="fa-brands fa-facebook"></i></a></li>
        <li><a href="#" class="linkedin"><i class="fa-brands fa-linkedin" ></i></a></li>
        <li><a href="#" class="youtube"><i class="fa-brands fa-youtube"></i></a></li>
    </ul> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default CourseDesc