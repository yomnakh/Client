import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Assets/logo4.png'
import './NavBar.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { DropdownDivider } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar expand='xl' className="p-3 shadow" fixed="top">
            <Container className='mx-auto'>
                <Link to={'/'}><Navbar.Brand ><img src={logo} alt='Edu-Logo' className='EduLogo' /></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-xl`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                            EduTrax
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
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
                            {/* <NavDropdown title="Courses" id="basic-nav-dropdown">
                                <NavDropdown.Item >Front End</NavDropdown.Item>
                                <NavDropdown.Item> Back End </NavDropdown.Item>
                                <NavDropdown.Item >JavaScript</NavDropdown.Item>
                                <NavDropdown.Item> CS50 </NavDropdown.Item>
                                <NavDropdown.Item >FullStack</NavDropdown.Item>
                                <NavDropdown.Item> Network </NavDropdown.Item>
                                <NavDropdown.Item >Security</NavDropdown.Item>
                                <DropdownDivider />
                                <NavDropdown.Item ><Link to={"/courses"}>All Courses</Link></NavDropdown.Item>
                            </NavDropdown> */}
                            <NavDropdown title="Quizs" id="basic-nav-dropdown">
                                <NavDropdown.Item >HTML</NavDropdown.Item>
                                <NavDropdown.Item >CSS</NavDropdown.Item>
                                <NavDropdown.Item >JavaScript</NavDropdown.Item>
                                <NavDropdown.Item >React</NavDropdown.Item>
                                <NavDropdown.Item >Security</NavDropdown.Item>
                                <NavDropdown.Item >Node.Js</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="About" id="basic-nav-dropdown">
                                <NavDropdown.Item >CV</NavDropdown.Item>
                                <NavDropdown.Item >Interview</NavDropdown.Item>
                                <NavDropdown.Item >Jobs</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <div className="d-flex auth-div mt-3">
                            <h6 className='auth' title='Login Now'><Link to={'/login'}>Login</Link></h6>
                            <h6 className='auth' title='Register Now'><Link to={'/register'}>Register</Link></h6>
                        </div>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavBar;