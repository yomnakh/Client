import React from 'react'
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import about from '../../../Assets/myaboutt.png'
import './About.css'

const About = () => {
  return (
    <Container fluid className='w-100'>
    <div className="container-fluid  w-100">
    <img src={about} className='about' />
  </div>
  </Container>
  )
}

export default About;
