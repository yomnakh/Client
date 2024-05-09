import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Assets/logo4.png'
import './NavBar.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log('isLoggedIn:', isLoggedIn);
    console.log('userData:', userData);
    const userName = isLoggedIn ? userData.name : null;

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userData');
        navigate('/');
    };
    return (
        <Navbar expand='xl' className="p-3 shadow" fixed="top">
            <Container className='mx-auto'>
                <Link to={'/'}><Navbar.Brand ><img src={logo} alt='Edu-Logo' className='EduLogo' /></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-xl`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                    placement="start">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                            EduTrax
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {
                            (!isLoggedIn) && (
                                <Nav className="justify-content-center flex-grow-1 pt-3 home-block">
                                    <Link to={'/'} className='homeNav'>Home</Link>
                                    <NavDropdown title="Road Maps" id="basic-nav-dropdown">
                                        <NavDropdown.Item><Link to={'/roadmap/front'}>Front End</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to={'/roadmap/back'}>Back End</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to={'/roadmap/js'}>JavaScript</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to={'/roadmap/fullstack'}>FullStack</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to={'/roadmap/security'}>Security</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <Link to={'/courses'} className='homeNav'>Courses</Link>
                                    <NavDropdown title="Quizzes" id="basic-nav-dropdown">
                                        <NavDropdown.Item ><Link to={"/quiz/html"}>HTML</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to={"/quiz/css"}>CSS</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to={"/quiz/js"}>JavaScript</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to={"/quiz/react"}>React</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to={"/quiz/security"}>Security</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to={"/quiz/nodejs"}>Node.Js</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Career" id="basic-nav-dropdown">
                                        <NavDropdown.Item >CV</NavDropdown.Item>
                                        <NavDropdown.Item ><Link to={"/interview"}>Interview</Link></NavDropdown.Item>
                                        <NavDropdown.Item >Jobs</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>)
                        }
                        {
                            (isLoggedIn && userData.role === "student") && (
                                <Nav className="justify-content-center flex-grow-1 pt-3 home-block">
                                    <Link to={'/'} className='homeNav'>Home</Link>
                                    <NavDropdown title="Road Maps" id="basic-nav-dropdown">
                                        <NavDropdown.Item><Link to={'/roadmap/front'}>Front End</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to={'/roadmap/back'}>Back End</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to={'/roadmap/js'}>JavaScript</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to={'/roadmap/fullstack'}>FullStack</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to={'/roadmap/security'}>Security</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <Link to={'/courses'} className='homeNav'>Courses</Link>
                                    <Link to={'/mylearning'} className='homeNav'>MyLearning</Link>
                                    <NavDropdown title="Quizzes" id="basic-nav-dropdown">
                                        <NavDropdown.Item ><Link to={"/quiz/html"}>HTML</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to={"/quiz/css"}>CSS</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to={"/quiz/js"}>JavaScript</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to={"/quiz/react"}>React</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to={"/quiz/security"}>Security</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to={"/quiz/nodejs"}>Node.Js</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Career" id="basic-nav-dropdown">
                                        <NavDropdown.Item >CV</NavDropdown.Item>
                                        <NavDropdown.Item ><Link to={"/interview"}>Interview</Link></NavDropdown.Item>
                                        <NavDropdown.Item >Jobs</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>)
                        }
                        {
                            (isLoggedIn && (userData.role === "admin" || userData.role === "instructor")) && (
                                <Nav className="justify-content-center flex-grow-1 pt-3 home-block">
                                    <Link to={'/'} className='homeNav'>Home</Link>
                                    <NavDropdown title="Road Maps" id="basic-nav-dropdown">
                                        <NavDropdown.Item><Link to={'/roadmap/front'}>Front End</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to={'/roadmap/back'}>Back End</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to={'/roadmap/js'}>JavaScript</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to={'/roadmap/fullstack'}>FullStack</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to={'/roadmap/security'}>Security</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <Link to={'/courses'} className='homeNav'>Courses</Link>
                                    <NavDropdown title="Quizzes" id="basic-nav-dropdown">
                                        <NavDropdown.Item ><Link to={"/quiz/html"}>HTML</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to={"/quiz/css"}>CSS</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to={"/quiz/js"}>JavaScript</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to={"/quiz/react"}>React</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to={"/quiz/security"}>Security</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to={"/quiz/nodejs"}>Node.Js</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <Link to={'/dash'} className='homeNav'>Dashboard</Link>
                                </Nav>)
                        }

                        <div className="d-flex auth-div mt-3">
                            {userName ? (
                                <div className="d-flex">
                                    <h6 className='mt-2 me-3 userfeild' title='Logged in as'>{userName}</h6>
                                    <h6 className='auth' title='Log Out'><Link onClick={handleLogout} to={"/"} ><i class="fa-solid fa-right-from-bracket"></i></Link></h6>
                                </div>
                            ) : (
                                <div className="d-flex">
                                    <h6 className='auth' title='Login Now'><Link to={'/login'}>Login</Link></h6>
                                    <h6 className='auth' title='Register Now'><Link to={'/register'}>Register</Link></h6>
                                </div>
                            )}
                        </div>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavBar;