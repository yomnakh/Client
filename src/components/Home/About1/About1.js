import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./About1.css";
import about1img from '../../../Assets/about3.png'


const About1 = () => {
  return (
    <Container fluid className='about1container' style={{ marginTop: "100px"  }} >
    <Row>
      <Col className='col-lg-6 col-md-6 col-sm-12 col-12'>
        <img className='about1img' src={about1img} />
      </Col>
      <Col className='col-lg-6 col-md-6 col-sm-12 col-12  aboutxt'>
        {/* <span class="badge rounded-pill ms-0 "> Get More About Us </span> */}
        <p className="p-about1"> Best Online Learning Platform </p>
        <h1 className='h1badge1' >One Platfrom & Many <br></br>   <p className='course' > Courses</p>  For You </h1>
        <p className='pbadge1'>A Learning Management System (LMS) is a digital platform designed to <br></br> facilitate the administration,tracking, and delivery of educational courses <br></br> or training programs.</p>
        <i class="fas fa-check-circle abouticon1"></i>  <span className='abouticontxt1 '> 9/10 Average Satisfaction Rate
        </span>
        <br></br>
        <i class="fas fa-check-circle abouticon1"></i> <span className='abouticontxt1' >96% Completitation Rate</span>
        <br></br>
        <i class="fas fa-check-circle abouticon1"></i> <span className='abouticontxt1'>Friendly Environment & Expert Teacher</span>
        <br></br>
        <Button className='about1button' style={{ borderRadius: "5px", fontSize: "16px", backgroundColor: "#f5656d", marginTop: "50px", border: "none" }}>Start Free Trial <i class="fas fa-arrow-right aboutbuttonicon"></i></Button>

      </Col>
    </Row>
  </Container>
  );
};

export default About1;
