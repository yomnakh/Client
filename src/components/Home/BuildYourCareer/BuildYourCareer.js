import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './BuildYourCareer.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

const BuildYourCareer = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container className="career-div my-5">
      <Row className="buildYourCareer">
        <Col className='col-lg-6 col-md-6 col-sm-12 col-12 '>
          <div className='col1'>
            <p className='p-career1'>Build Your Career</p>
            <h2 className='h2-career1'>Become an <p className='course'>Instructor</p></h2>
            <img src="https://demo.alhikmahsoft.com/edufu/wp-content/uploads/2023/06/line-shape.svg" className='orange-underline1' alt='svg.line' />
            <p className='pp-career1'>It is long established fact that reader distracted <br /> by the readable content.</p>
            <a title='edutrax2@gmail.com'><button className='btn getcoursesBtn' onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}>Become an Instructor <i className="fa-solid fa-angle-right"></i></button></a>
            <Collapse in={open} dimension="width">
              <div id="example-collapse-text">
                <Card body style={{ width: '400px' }}>
                  <ul>
                    <li>Send this data into email </li>
                    <hr />
                    <li>1- Full Name</li>
                    <li>2- Phone Number</li>
                    <li>3- Linked in profile</li>
                    <li>4- Github Link</li>
                    <li>5- Your Photo</li>
                    <li>6- Your Resume</li>
                    <hr />
                    <li>Note: All Data is Required , <br/> if you accepted you will recieve an <br/> email with your email and password 📩</li>
                    <hr />
                    <a href="mailto:edutrax2@gmail.com" title='edutrax2@gmail.com'><button className='btn getcoursesBtn'>Apply here<i className="fa-solid fa-angle-right"></i></button></a>
                  </ul>
                </Card>
              </div>
            </Collapse>
          </div>

        </Col>
        <Col className='col-lg-6 col-md-6 col-sm-12 col-12  '>
          <div className='col2'>
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
