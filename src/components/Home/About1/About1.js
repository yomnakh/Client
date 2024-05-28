import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./About1.css";
import about1img from '../../../Assets/about3.png'
import about22 from "../../../Assets/about22.png"


const About1 = () => {
  return (
    <Container fluid className='about1container mt-5 mb-5' style={{}} >
    <Row>
      <Col className='col-lg-6 col-md-6 col-sm-12 col-12'>
        {/* <img className='about1img w-75 h-100' src={"https://bestwpware.com/react-templates/edumim/static/media/about1.4d7d45d168730de2759f.png"} /> */}
        <img src={about22} className='about1img w-75 h-75' alt="aboutImage"/>
      </Col>
      <Col className='col-lg-6 col-md-6 col-sm-12 col-12  aboutxt'>
        {/* <span class="badge rounded-pill ms-0 "> Get More About Us </span> */}
        <p className="p-about1"> Best Online Learning Platform </p>
        <h1 className='h1badge1' >One Platfrom & Many <br></br>   <p className='course' > Courses</p>  For You </h1>
        <img src="https://demo.alhikmahsoft.com/edufu/wp-content/uploads/2023/06/line-shape.svg" className='orange-underline-about1' />

        <p className='pbadge1'>A Learning Management System (LMS) is a digital platform designed to <br></br> facilitate the administration,tracking, and delivery of educational courses <br></br> or training programs.</p>
        <i class="fas fa-check-circle abouticon1"></i>  <span className='abouticontxt1 '> 9/10 Average Satisfaction Rate
        </span>
        <br></br>
        <i class="fas fa-check-circle abouticon1"></i> <span className='abouticontxt1' >96% Completitation Rate</span>
        <br></br>
        <i class="fas fa-check-circle abouticon1"></i> <span className='abouticontxt1'>Friendly Environment & Expert Teacher</span>
        <br></br>
        <Button className='about1button' style={{ borderRadius: "5px", fontSize: "16px", backgroundColor: "#f5656d", marginTop: "50px", border: "none" ,fontWeight:"600"}}>Start Free Trial <i class="fas fa-arrow-right aboutbuttonicon"></i></Button>

      </Col>
    </Row>
  </Container>
  );
};

export default About1;
