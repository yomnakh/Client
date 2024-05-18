import React from 'react'
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import AboutImage from '../../../Assets/AboutImage.jpg'
import './About.css'

const About = () => {
  return (
    <div>

      <Container className='aboutcontainer' style={{ marginTop: "100px"  }} >
        <Row>
          <Col className='col-lg-6 col-md-6 col-sm-12 col-12'>
            <img className='aboutimg' src={AboutImage} />
          </Col>
          <Col className='col-lg-6 col-md-6 col-sm-12 col-12  aboutxt'>
            <span class="badge rounded-pill ms-0 "> Get More About Us </span>
            <h1 className='h1badge' >Thousand Of Top <p className='course' > Courses</p> <br></br> Now in One Place  </h1>
            <p className='pbadge'>Groove’s intuitive shared inbox makes it easy for team members to <br></br> organize, prioritize and.In this episode of the Smashing Pod we’re <br></br> talking about Web Platform Baseline.</p>
            <i class="fas fa-check-circle abouticon"></i>  <span className='abouticontxt '> The Most World Class Instructors
            </span>
            <br></br>
            <i class="fas fa-check-circle abouticon"></i> <span className='abouticontxt' >Access Your Class anywhere</span>
            <br></br>
            <i class="fas fa-check-circle abouticon"></i> <span className='abouticontxt'>Flexible Course Plan</span>
            <br></br>
            <Button className='aboutbutton' style={{ borderRadius: "30px", fontSize: "16px", backgroundColor: "#f5656d", marginTop: "50px", border: "none" }}>Start Free Trial <i class="fas fa-arrow-right aboutbuttonicon"></i></Button>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About;
