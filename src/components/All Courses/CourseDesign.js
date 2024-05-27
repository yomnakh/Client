import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./AllCourses.css";
import { Link } from "react-router-dom";


const CourseDesign = ({ course }) => {
  return (
    <Col
      xs="12"
      sm="12"
      md={6}
      lg="6"
      xl="4"
      xxl="4"
      className="mb-3 justify-content-center d-xl-block d-flex m-auto"
      style={{ margin: "auto" }}
    >
      <Link to={`/courses/coursedesc/${course._id}`}>
        <Card
          style={{ width: "20rem", border: "1px solid rgb(225, 220, 220)" }}
          className="course_card p-1 mx-auto"
        >
          <Card.Img variant="top" className="cardImage" src={course.image.url} />
          <Card.Body>
            <Card.Text>
              <div className="d-flex flex-row justify-content-between">
                <h6 style={{ color: "#018883" }} className="fw-bold">
                  Free
                </h6>
                <h6 style={{ color: "#018883" }} className="fw-bold">
                  {course.type}
                </h6>
              </div>
            </Card.Text>
            <p className="text-start fw-bold px-2" style={{ color: "#1B3F6B" }}>
              {course.title}
            </p>
            <div className="d-flex flex-row justify-content-between">
              <span style={{ color: "#1B3F6B" }}>
                <i class="fa-regular fa-clock mx-1" style={{ color: "#018883" }}></i> {course.hours}
              </span>
              <span style={{ color: "#1B3F6B" }}>
                <i
                  class="fa-solid fa-book mx-2"
                  style={{ color: "#018883" }}
                ></i>
                {course.lessons}
              </span>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default CourseDesign;
