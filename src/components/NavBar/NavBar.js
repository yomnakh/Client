// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from '../../Assets/logo4.png'
// import './NavBar.css'
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { Link } from 'react-router-dom';
// import { DropdownDivider } from 'react-bootstrap';

// const NavBar = () => {
//     return (
//         <Navbar expand='xl' className="p-3 shadow" fixed="top">
//             <Container className='mx-auto'>
//                 <Link to={'/'}><Navbar.Brand ><img src={logo} alt='Edu-Logo' className='EduLogo' /></Navbar.Brand></Link>
//                 <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
//                 <Navbar.Offcanvas
//                     id={`offcanvasNavbar-expand-xl`}
//                     aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
//                     placement="start"
//                 >
//                     <Offcanvas.Header closeButton>
//                         <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
//                             EduTrax
//                         </Offcanvas.Title>
//                     </Offcanvas.Header>
//                     <Offcanvas.Body>
// <Nav className="justify-content-center flex-grow-1 pt-3 home-block">
//     <Link to={'/'} className='homeNav'>Home</Link>
//     <NavDropdown title="Road Maps" id="basic-nav-dropdown">
//         <NavDropdown.Item><Link to={'/roadmap/front'}>Front End</Link></NavDropdown.Item>
//         <NavDropdown.Item><Link to={'/roadmap/back'}>Back End</Link></NavDropdown.Item>
//         <NavDropdown.Item><Link to={'/roadmap/js'}>JavaScript</Link></NavDropdown.Item>
//         <NavDropdown.Item><Link to={'/roadmap/fullstack'}>FullStack</Link></NavDropdown.Item>
//         <NavDropdown.Item><Link to={'/roadmap/security'}>Security</Link></NavDropdown.Item>
//     </NavDropdown>
//     <Link to={'/courses'} className='homeNav'>Courses</Link>
//     {/* <NavDropdown title="Courses" id="basic-nav-dropdown">
//         <NavDropdown.Item >Front End</NavDropdown.Item>
//         <NavDropdown.Item> Back End </NavDropdown.Item>
//         <NavDropdown.Item >JavaScript</NavDropdown.Item>
//         <NavDropdown.Item> CS50 </NavDropdown.Item>
//         <NavDropdown.Item >FullStack</NavDropdown.Item>
//         <NavDropdown.Item> Network </NavDropdown.Item>
//         <NavDropdown.Item >Security</NavDropdown.Item>
//         <DropdownDivider />
//         <NavDropdown.Item ><Link to={"/courses"}>All Courses</Link></NavDropdown.Item>
//     </NavDropdown> */}
//     <NavDropdown title="Quizzes" id="basic-nav-dropdown">
//         <NavDropdown.Item >HTML</NavDropdown.Item>
//         <NavDropdown.Item >CSS</NavDropdown.Item>
//         <NavDropdown.Item >JavaScript</NavDropdown.Item>
//         <NavDropdown.Item >React</NavDropdown.Item>
//         <NavDropdown.Item >Security</NavDropdown.Item>
//         <NavDropdown.Item >Node.Js</NavDropdown.Item>
//     </NavDropdown>
//     <NavDropdown title="About" id="basic-nav-dropdown">
//         <NavDropdown.Item >CV</NavDropdown.Item>
//         <NavDropdown.Item ><Link to={"/interview"}>Interview</Link></NavDropdown.Item>
//         <NavDropdown.Item >Jobs</NavDropdown.Item>
//     </NavDropdown>
// </Nav>
// <div className="d-flex auth-div mt-3">
//     <h6 className='auth' title='Login Now'><Link to={'/login'}>Login</Link></h6>
//     <h6 className='auth' title='Register Now'><Link to={'/register'}>Register</Link></h6>
// </div>
//                     </Offcanvas.Body>
//                 </Navbar.Offcanvas>
//             </Container>
//         </Navbar>
//     )
// }

// export default NavBar;

// import React, { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from '../../Assets/logo4.png';
// import './NavBar.css';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
//     const [userName, setUserName] = useState(''); // State to store user name

//     // Function to handle logout
//     const handleLogout = () => {
//         // Perform logout logic, e.g., clear localStorage, reset state, etc.
//         setIsLoggedIn(false);
//         setUserName('');
//     };

//     return (
//         <Navbar expand='xl' className="p-3 shadow" fixed="top">
//             <Container className='mx-auto'>
//                 <Link to={'/'}><Navbar.Brand ><img src={logo} alt='Edu-Logo' className='EduLogo' /></Navbar.Brand></Link>
//                 <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
//                 <Navbar.Offcanvas
//                     id={`offcanvasNavbar-expand-xl`}
//                     aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
//                     placement="start"
//                 >
//                     <Offcanvas.Header closeButton>
//                         <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
//                             EduTrax
//                         </Offcanvas.Title>
//                     </Offcanvas.Header>
//                     <Offcanvas.Body>
//                     <Nav className="justify-content-center flex-grow-1 pt-3 home-block">
//                     <Link to={'/'} className='homeNav'>Home</Link>
//                     <NavDropdown title="Road Maps" id="basic-nav-dropdown">
//                         <NavDropdown.Item><Link to={'/roadmap/front'}>Front End</Link></NavDropdown.Item>
//                         <NavDropdown.Item><Link to={'/roadmap/back'}>Back End</Link></NavDropdown.Item>
//                         <NavDropdown.Item><Link to={'/roadmap/js'}>JavaScript</Link></NavDropdown.Item>
//                         <NavDropdown.Item><Link to={'/roadmap/fullstack'}>FullStack</Link></NavDropdown.Item>
//                         <NavDropdown.Item><Link to={'/roadmap/security'}>Security</Link></NavDropdown.Item>
//                     </NavDropdown>
//                     <Link to={'/courses'} className='homeNav'>Courses</Link>
//                     <NavDropdown title="Quizzes" id="basic-nav-dropdown">
//                         <NavDropdown.Item >HTML</NavDropdown.Item>
//                         <NavDropdown.Item >CSS</NavDropdown.Item>
//                         <NavDropdown.Item >JavaScript</NavDropdown.Item>
//                         <NavDropdown.Item >React</NavDropdown.Item>
//                         <NavDropdown.Item >Security</NavDropdown.Item>
//                         <NavDropdown.Item >Node.Js</NavDropdown.Item>
//                     </NavDropdown>
//                     <NavDropdown title="About" id="basic-nav-dropdown">
//                         <NavDropdown.Item >CV</NavDropdown.Item>
//                         <NavDropdown.Item ><Link to={"/interview"}>Interview</Link></NavDropdown.Item>
//                         <NavDropdown.Item >Jobs</NavDropdown.Item>
//                     </NavDropdown>
//                 </Nav>
//                         <div className="d-flex auth-div mt-3">
//                             {isLoggedIn ? (
//                                 <div>
//                                     <h6 className='auth' title='Logout' onClick={handleLogout}>Logout</h6>
//                                     <h6 className='auth'>{userName}</h6>
//                                 </div>
//                             ) : (
//                                 <div className="d-flex auth-div mt-3">
//                                 <h6 className='auth' title='Login Now'><Link to={'/login'}>Login</Link></h6>
//                                 <h6 className='auth' title='Register Now'><Link to={'/register'}>Register</Link></h6>
//                             </div>
//                             )}
//                         </div>
//                     </Offcanvas.Body>
//                 </Navbar.Offcanvas>
//             </Container>
//         </Navbar>
//     );
// };

// export default NavBar;

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
        // Clear user data and authentication status from local storage
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userData');
        // Redirect to the login page
        navigate('/login');
    };
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
                            <NavDropdown title="Quizzes" id="basic-nav-dropdown">
                                <NavDropdown.Item ><Link to={"/quiz/html"}>HTML</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to={"/quiz/css"}>CSS</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to={"/quiz/js"}>JavaScript</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to={"/quiz/react"}>React</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to={"/quiz/security"}>Security</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to={"/quiz/nodejs"}>Node.Js</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="About" id="basic-nav-dropdown">
                                <NavDropdown.Item ><Link to={"/cv"}>CV</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to={"/interview"}>Interview</Link></NavDropdown.Item>
                                <NavDropdown.Item >Jobs</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <div className="d-flex auth-div mt-3">
                            {userName ? (
                                <div className="d-flex">
                                    <h6 className='mt-2 me-3 userfeild' title='Logged in as'>{userName}</h6>
                                    <h6 className='auth' title='Log Out'><Link onClick={handleLogout} ><i class="fa-solid fa-right-from-bracket"></i></Link></h6>
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