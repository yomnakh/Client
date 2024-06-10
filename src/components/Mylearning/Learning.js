import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  Col,
  Row,
  Button,
  Container,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import "./learning.css";
import Api from "../../config/api";

const Learning = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userID = userData._id;

  // Function to fetch enrolled courses
  const fetchEnrolledCourses = async () => {
    try {
      const userId = userID;
      const response = await Api.get(`/api/enroll-course/allenrollment/${userId}`);
      setCourses(response.data["Enrolled Courses"]);
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    }
  };

  useEffect(() => {
    fetchEnrolledCourses();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="col">
      <div className="mylearning-header">
        <div className="d-flex justify-content-center align-content-center flex-column learningContainer mx-auto">
          <h2 className="header-mylearning">My Learning </h2>
          <div className='searchDiv mx-auto my-3'>
            <input placeholder='Search Course.....' type='search' value={searchTerm} onChange={handleSearch} />
            <button className='my-auto'>Search</button>
          </div>
        </div>
      </div>
      <Container>
        <Row className="d-flex mylearning-cards">
          {filteredCourses.length >= 1 ? (filteredCourses.map((course) => (
            <Col
              key={course._id}
              xs="12"
              sm="12"
              md={6}
              lg="6"
              xl="4"
              xxl="4"
              className="mb-3 d-xl-block d-flex"
            >
              <Card
                style={{ width: "20rem", border: "1px solid rgb(225, 220, 220)" }}
                className="course_card p-2"
              >
                <Card.Img variant="top" className="cardImage" src={course.image.url} />
                <Card.Body className="text-center">
                  <Card.Text>
                    <div className="d-flex flex-row justify-content-between">
                      <h6 style={{ color: "#018883" }} className="fw-bold">
                        Enrolled
                      </h6>
                      <h6 style={{ color: "#018883" }} className="fw-bold">
                        {course.type}
                      </h6>
                    </div>
                  </Card.Text>
                  <p className="text-start fw-bold px-2 text-center" style={{ color: "#1B3F6B" }}>
                    {course.title}
                  </p>
                  <Link to={`/courses/coursedesc/${course._id}/coursevideo`} >
                    <Button className="start-lesson-btn w-75 mx-auto">Start Lesson</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))) : (
            <div className="">
              <h3 className="learningNOCourses">No Enrolled Course Now !</h3>
            </div>)}
        </Row>
      </Container>
    </div>
  );
};

export default Learning;
