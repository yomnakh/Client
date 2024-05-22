import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap';
import './BuildYourCareer.css'
import { Link } from 'react-router-dom';

const BuildYourCareer = () => {
  return (
    <Container className="career-div">
    <Row className="buildYourCareer">
    <Col className='col-lg-6 col-md-6 col-sm-12 col-12 '>
    <div className='col1'>
<p className='p-career1'>Build Your Career</p>
<h2 className='h2-career1'>Become an <p className='course' >Instructor</p></h2>
<img src="https://demo.alhikmahsoft.com/edufu/wp-content/uploads/2023/06/line-shape.svg" className='orange-underline1' />
<p className='pp-career1'>It is long established fact that reader distracted <br></br> by the readable content. </p>
<Link to={"/courses"}><button className='btn getcoursesBtn'>Become an Instructor <i class="fa-solid fa-angle-right"></i></button></Link>

    </div>
        </Col>
        <Col className='col-lg-6 col-md-6 col-sm-12 col-12  '>
        <div  className='col2'>
        <p className='p-career1'>Build Your Career</p>
        <h2 className='h2-career1'>Get Free <p className='course' > Courses</p></h2>
        <img src="https://demo.alhikmahsoft.com/edufu/wp-content/uploads/2023/06/line-shape.svg" className='orange-underline2' />
        <p className='pp-career1'>It is long established fact that reader distracted <br></br> by the readable content. </p>
        <Link to={"/courses"}><button className='btn getcoursesBtn'>Explore Courses <i class="fa-solid fa-angle-right"></i></button></Link>
        </div>
        </Col>
    </Row>
</Container>
  )
}

export default BuildYourCareer
