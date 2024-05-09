import React, { useState } from "react";
import {
  Card,
  Col,
  Row,
  Button,
  Container,
  Form,
  FormControl,
  ProgressBar,
} from "react-bootstrap";
import front from "../../Assets/frontlearning.jpeg";
import back from "../../Assets/backlearing.png";
import bootstrap from "../../Assets/bootstarpleaning.jpeg";
import "./learning.css";

const Learning = () => {
  const progress = 60;
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([
    { id: 1, name: "FrontEnd", image: front },
    { id: 2, name: "BackEnd", image: back },
    { id: 3, name: "Bootstrap", image: bootstrap },
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="col">
      <div className="mylearning-header">
        <div className="d-flex justify-content-center align-content-center">
          <h2 className="header-mylearning">My Learning </h2>
        </div>
      </div>
      <Form className=" mylearning-search">
        <i class="fa-solid fa-magnifying-glass mylearning-search-icon"></i>
        <FormControl
          type="text"
          placeholder="Search my courses"
          value={searchTerm}
          onChange={handleSearch}
        />
      </Form>
      <Container>
        <Row className="d-flex  mylearning-cards">
          {filteredCourses.map((course) => (
            <Col
              key={course.id}
              xs="12"
              sm="12"
              md={6}
              lg="6"
              xl="4"
              xxl="4"
              className="mb-3 d-xl-block d-flex"
            >
              <Card className="mylearning-card" style={{ width: "17rem" }}>
                <Card.Img variant="top" src={course.image} />
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>
                    <p>track your progress</p>
                    <ProgressBar
                      variant="success"
                      className="mylearning-bar"
                      now={progress}
                      label={`${progress}%`}
                      visuallyHidden
                    />
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star unchecked"></span>
                    <span class="fa fa-star unchecked"></span>
                    <span class="fa fa-star unchecked"></span>{" "}
                  </Card.Text>
                  <Button className="start-lesson-btn">Start Lesson</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Learning;
