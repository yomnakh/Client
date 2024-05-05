import React from "react";
import { useState } from "react";
import "./learning.css";
import { Card, Col, Row, Button, Container, Form, FormControl } from "react-bootstrap";
import html from '../../Assets/htmlC.png'
import css from '../../Assets/cs50.png'
import bootstrap from '../../Assets/bootstarp.png'



const Learning = () => {
  
 
  return (
    <div className="col">
      <div className="mylearning-header">
        <div className="d-flex justify-content-center align-content-center">
          <h2 className="header-mylearning">My Courses</h2>
        </div>
      </div>
      <Container fluid className="d-flex justify-content-center mylearning-cards">
      <Row>
      <Form>
        <FormControl
         type="text" placeholder="Search"  
       />
      </Form>
        <Col
          xs="12"
          sm="12"
          md={6}
          lg="6"
          xl="4"
          xxl="4"
          className="mb-3 justify-content-center d-xl-block d-flex"
        >
     
           <Card  style={{ width: "16rem" }}>
            <Card.Img variant="top" src={html} />
            <Card.Body>
              <Card.Title>course Name</Card.Title>
              <Card.Text>
       
                Some quick example text to build on the card title and make up
              
              </Card.Text>
              <Button className="start-lesson-btn" >Start Lesson</Button>
            </Card.Body>
          </Card>
        
        </Col>
        <Col
          xs="12"
          sm="12"
          md={6}
          lg="6"
          xl="4"
          xxl="4"
          className="mb-3 justify-content-center d-xl-block d-flex"
        >
          <Card style={{ width: "16rem" }}>
            <Card.Img variant="top" src={css} />
            <Card.Body>
              <Card.Title>course Name</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
               
              </Card.Text>
              <Button  className="start-lesson-btn" >Start Lesson</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs="12"
          sm="12"
          md={6}
          lg="6"
          xl="4"
          xxl="4"
          className="mb-3 justify-content-center d-xl-block d-flex"
        >
          <Card style={{ width: "16rem" }}>
            <Card.Img variant="top" src={bootstrap} />
            <Card.Body>
              <Card.Title>course Name</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
            
              </Card.Text>
              <Button  className="start-lesson-btn" >Start Lesson</Button>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
      </Container>
    </div>
    
  );
};

export default Learning;
