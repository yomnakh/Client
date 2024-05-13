// import React, { useEffect, useState } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import logo from "../../Assets/logo4.png";
// import "./NavBar.css";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import { Link, useNavigate } from "react-router-dom";

// const NavBar = () => {
//   const navigate = useNavigate();
//   const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   console.log("isLoggedIn:", isLoggedIn);
//   console.log("userData:", userData);
//   const userName = isLoggedIn ? userData.name : null;
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("userData");
//     navigate("/");
//   };
//   return (
//     <Navbar expand="xl" className="p-3 shadow" fixed="top">
//       <Container className="mx-auto">
//         <Link to={"/"}>
//           <Navbar.Brand>
//             <img src={logo} alt="Edu-Logo" className="EduLogo" />
//           </Navbar.Brand>
//         </Link>
//         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
//         <Navbar.Offcanvas
//           id={`offcanvasNavbar-expand-xl`}
//           aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
//           placement="start"
//         >
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
//               EduTrax
//             </Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
// {!isLoggedIn && (
//   <Nav className="justify-content-center flex-grow-1 pt-3 home-block">
//     <Link to={"/"} className="homeNav">
//       Home
//     </Link>
//     <NavDropdown title="Road Maps" id="basic-nav-dropdown">
//       <NavDropdown.Item>
//         <Link to={"/roadmap/front"}>Front End</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/roadmap/back"}>Back End</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/roadmap/js"}>JavaScript</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/roadmap/fullstack"}>FullStack</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/roadmap/security"}>Security</Link>
//       </NavDropdown.Item>
//     </NavDropdown>
//     <Link to={"/courses"} className="homeNav">
//       Courses
//     </Link>
//     <NavDropdown title="Quizzes" id="basic-nav-dropdown">
//       <NavDropdown.Item>
//         <Link to={"/quiz/html"}>HTML</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/quiz/css"}>CSS</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/quiz/js"}>JavaScript</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/quiz/react"}>React</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/quiz/security"}>Security</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/quiz/nodejs"}>Node.Js</Link>
//       </NavDropdown.Item>
//     </NavDropdown>
//     <NavDropdown title="Career" id="basic-nav-dropdown">
//       <NavDropdown.Item>CV</NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/interview"}>Interview</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>Jobs</NavDropdown.Item>
//     </NavDropdown>
//   </Nav>
// )}
// {isLoggedIn && userData.role === "student" && (
//   <Nav className="justify-content-center flex-grow-1 pt-3 home-block">
//     <Link to={"/"} className="homeNav">
//       Home
//     </Link>
//     <NavDropdown title="Road Maps" id="basic-nav-dropdown">
//       <NavDropdown.Item>
//         <Link to={"/roadmap/front"}>Front End</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/roadmap/back"}>Back End</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/roadmap/js"}>JavaScript</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/roadmap/fullstack"}>FullStack</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/roadmap/security"}>Security</Link>
//       </NavDropdown.Item>
//     </NavDropdown>
//     <Link to={"/courses"} className="homeNav">
//       Courses
//     </Link>
//     <Link to={"/mylearning"} className="homeNav">
//       MyLearning
//     </Link>
//     <NavDropdown title="Quizzes" id="basic-nav-dropdown">
//       <NavDropdown.Item>
//         <Link to={"/quiz/html"}>HTML</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/quiz/css"}>CSS</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/quiz/js"}>JavaScript</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/quiz/react"}>React</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/quiz/security"}>Security</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/quiz/nodejs"}>Node.Js</Link>
//       </NavDropdown.Item>
//     </NavDropdown>
//     <NavDropdown title="Career" id="basic-nav-dropdown">
//       <NavDropdown.Item>CV</NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link to={"/interview"}>Interview</Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>Jobs</NavDropdown.Item>
//     </NavDropdown>
//   </Nav>
// )}
// {isLoggedIn &&
//   (userData.role === "admin" || userData.role === "instructor") && (
//     <Nav className="justify-content-center flex-grow-1 pt-3 home-block">
//       <Link to={"/"} className="homeNav">
//         Home
//       </Link>
//       <NavDropdown title="Road Maps" id="basic-nav-dropdown">
//         <NavDropdown.Item>
//           <Link to={"/roadmap/front"}>Front End</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/roadmap/back"}>Back End</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/roadmap/js"}>JavaScript</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/roadmap/fullstack"}>FullStack</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/roadmap/security"}>Security</Link>
//         </NavDropdown.Item>
//       </NavDropdown>
//       <Link to={"/courses"} className="homeNav">
//         Courses
//       </Link>
//       <NavDropdown title="Quizzes" id="basic-nav-dropdown">
//         <NavDropdown.Item>
//           <Link to={"/quiz/html"}>HTML</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/quiz/css"}>CSS</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/quiz/js"}>JavaScript</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/quiz/react"}>React</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/quiz/security"}>Security</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/quiz/nodejs"}>Node.Js</Link>
//         </NavDropdown.Item>
//       </NavDropdown>
//       <Link to={"/dash"} className="homeNav">
//         Dashboard
//       </Link>
//     </Nav>
//   )}

//             <div className="d-flex auth-div mt-3">
//               {userName ? (
//                 <div className="d-flex">
//                   <h6 className="mt-2 me-3 userfeild" title="Logged in as">
//                     {userName}
//                   </h6>
//                   <h6 className="auth" title="Log Out">
//                     <Link onClick={handleLogout} to={"/"}>
//                       <i class="fa-solid fa-right-from-bracket"></i>
//                     </Link>
//                   </h6>
//                 </div>
//               ) : (
//                 <div className="d-flex">
//                   <h6 className="auth" title="Login Now">
//                     <Link to={"/login"}>Login</Link>
//                   </h6>
//                   <h6 className="auth" title="Register Now">
//                     <Link to={"/register"}>Register</Link>
//                   </h6>
//                 </div>
//               )}
//             </div>
// <NavDropdown
//   title={
//     <span className="d-flex align-items-center">
//       {userData && userData.profilePicture && (
//         <img
//           src={userData.profilePicture}
//           alt="Profile Picture"
//           className="profile-pic me-2"
//         />
//       )}
//       {userName || "Profile"}
//     </span>
//   }
//   id="profile-dropdown"
//   open={isProfileDropdownOpen}
//   onToggle={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
// >
//   {/* Profile dropdown menu items */}
//   <NavDropdown.Item as={Link} to="/my-courses">
//     My Courses
//   </NavDropdown.Item>
//   <NavDropdown.Item as={Link} to="/update-data">
//     Update Data
//   </NavDropdown.Item>
//   <NavDropdown.Item onClick={handleLogout}>
//     Log Out
//   </NavDropdown.Item>
// </NavDropdown>
//           </Offcanvas.Body>
//         </Navbar.Offcanvas>
//       </Container>
//     </Navbar>
//   );
// };
// export default NavBar;

// {!isLoggedIn && (
//     <Nav className="justify-content-center flex-grow-1 pt-3 home-block">
//       <Link to={"/"} className="homeNav">
//         Home
//       </Link>
//       <NavDropdown title="Road Maps" id="basic-nav-dropdown">
//         <NavDropdown.Item>
//           <Link to={"/roadmap/front"}>Front End</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/roadmap/back"}>Back End</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/roadmap/js"}>JavaScript</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/roadmap/fullstack"}>FullStack</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/roadmap/security"}>Security</Link>
//         </NavDropdown.Item>
//       </NavDropdown>
//       <Link to={"/courses"} className="homeNav">
//         Courses
//       </Link>
//       <NavDropdown title="Quizzes" id="basic-nav-dropdown">
//         <NavDropdown.Item>
//           <Link to={"/quiz/html"}>HTML</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/quiz/css"}>CSS</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/quiz/js"}>JavaScript</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/quiz/react"}>React</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/quiz/security"}>Security</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/quiz/nodejs"}>Node.Js</Link>
//         </NavDropdown.Item>
//       </NavDropdown>
//       <NavDropdown title="Career" id="basic-nav-dropdown">
//         <NavDropdown.Item>CV</NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/interview"}>Interview</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>Jobs</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//   )}
//   {isLoggedIn && userData.role === "student" && (
//     <Nav className="justify-content-center flex-grow-1 pt-3 home-block">
//       <Link to={"/"} className="homeNav">
//         Home
//       </Link>
//       <NavDropdown title="Road Maps" id="basic-nav-dropdown">
//         <NavDropdown.Item>
//           <Link to={"/roadmap/front"}>Front End</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/roadmap/back"}>Back End</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/roadmap/js"}>JavaScript</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/roadmap/fullstack"}>FullStack</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/roadmap/security"}>Security</Link>
//         </NavDropdown.Item>
//       </NavDropdown>
//       <Link to={"/courses"} className="homeNav">
//         Courses
//       </Link>
//       <Link to={"/mylearning"} className="homeNav">
//         MyLearning
//       </Link>
//       <NavDropdown title="Quizzes" id="basic-nav-dropdown">
//         <NavDropdown.Item>
//           <Link to={"/quiz/html"}>HTML</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/quiz/css"}>CSS</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/quiz/js"}>JavaScript</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/quiz/react"}>React</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/quiz/security"}>Security</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/quiz/nodejs"}>Node.Js</Link>
//         </NavDropdown.Item>
//       </NavDropdown>
//       <NavDropdown title="Career" id="basic-nav-dropdown">
//         <NavDropdown.Item>CV</NavDropdown.Item>
//         <NavDropdown.Item>
//           <Link to={"/interview"}>Interview</Link>
//         </NavDropdown.Item>
//         <NavDropdown.Item>Jobs</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//   )}
//   {isLoggedIn &&
//     (userData.role === "admin" || userData.role === "instructor") && (
//       <Nav className="justify-content-center flex-grow-1 pt-3 home-block">
//         <Link to={"/"} className="homeNav">
//           Home
//         </Link>
//         <NavDropdown title="Road Maps" id="basic-nav-dropdown">
//           <NavDropdown.Item>
//             <Link to={"/roadmap/front"}>Front End</Link>
//           </NavDropdown.Item>
//           <NavDropdown.Item>
//             <Link to={"/roadmap/back"}>Back End</Link>
//           </NavDropdown.Item>
//           <NavDropdown.Item>
//             <Link to={"/roadmap/js"}>JavaScript</Link>
//           </NavDropdown.Item>
//           <NavDropdown.Item>
//             <Link to={"/roadmap/fullstack"}>FullStack</Link>
//           </NavDropdown.Item>
//           <NavDropdown.Item>
//             <Link to={"/roadmap/security"}>Security</Link>
//           </NavDropdown.Item>
//         </NavDropdown>
//         <Link to={"/courses"} className="homeNav">
//           Courses
//         </Link>
//         <NavDropdown title="Quizzes" id="basic-nav-dropdown">
//           <NavDropdown.Item>
//             <Link to={"/quiz/html"}>HTML</Link>
//           </NavDropdown.Item>
//           <NavDropdown.Item>
//             <Link to={"/quiz/css"}>CSS</Link>
//           </NavDropdown.Item>
//           <NavDropdown.Item>
//             <Link to={"/quiz/js"}>JavaScript</Link>
//           </NavDropdown.Item>
//           <NavDropdown.Item>
//             <Link to={"/quiz/react"}>React</Link>
//           </NavDropdown.Item>
//           <NavDropdown.Item>
//             <Link to={"/quiz/security"}>Security</Link>
//           </NavDropdown.Item>
//           <NavDropdown.Item>
//             <Link to={"/quiz/nodejs"}>Node.Js</Link>
//           </NavDropdown.Item>
//         </NavDropdown>
//         <Link to={"/dash"} className="homeNav">
//           Dashboard
//         </Link>
//       </Nav>
//     )}

import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Assets/logo4.png";
import "./NavBar.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button, Form,Nav } from "react-bootstrap";
import profilePicture from "../../Assets/AbeerHosni.jpg";
import Api from "../../config/api";

const NavBar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log("isLoggedIn:", isLoggedIn);
  console.log("userData:", userData);
  const userName = isLoggedIn ? userData.name : null;
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [showUserDataModal, setShowUserDataModal] = useState(false);
  const userEmail = isLoggedIn ? userData.email : null;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState('');

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    navigate("/");
  };

  const handleUpdateData = () => {
    setShowUserDataModal(true);
  };

  const handleCloseModal = () => {
    setShowUserDataModal(false);
  };

  const handleUpdateUserData = () => {
    // Implement logic to update user data here
    // Once data is updated, close the modal
    handleCloseModal();
  };

  const handleUpdateProfilePicture = (newProfilePicture) => {
    setProfilePicture(newProfilePicture);
  };

  //   const response = Api.post('/api/auth/login', { email, password });
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    
    // Perform checks to ensure a valid file is selected
    if (file && file.type.startsWith("image/")) {
      // Create a FileReader to read the selected file
      const reader = new FileReader();
      
      reader.onload = (e) => {
        // Once the FileReader has finished reading the file, update the profile picture state variable
        setProfilePicture(e.target.result);
        
        // You can then make an API call to upload the image to the server
        uploadProfilePictureToServer(file);
      };
      
      // Read the selected file as a data URL
      reader.readAsDataURL(file);
    }
  };
  
  const uploadProfilePictureToServer = (file) => {
    // Implement the logic to upload the image to the server using an API call
    // You can use libraries like axios or fetch to make the API call
    // Example using axios:
    // const formData = new FormData();
    // formData.append("profilePicture", file);
    // axios.post("/api/uploadProfilePicture", formData)
    //   .then((response) => {
    //     // Handle the response from the server
    //   })
    //   .catch((error) => {
    //     // Handle any errors that occur during the upload
    //   });
  };

  return (
    <Navbar expand="xl" className="p-3 shadow" fixed="top">
      <Container className="mx-auto">
        <Link to={"/"}>
          <Navbar.Brand>
            <img src={logo} alt="Edu-Logo" className="EduLogo" />
          </Navbar.Brand>
        </Link>
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
            {/* Navbar content */}
            {!isLoggedIn && (
    <Nav className="justify-content-center flex-grow-1 pt-3 home-block">
      <Link to={"/"} className="homeNav">
        Home
      </Link>
      <NavDropdown title="Road Maps" id="basic-nav-dropdown">
        <NavDropdown.Item>
          <Link to={"/roadmap/front"}>Front End</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/roadmap/back"}>Back End</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/roadmap/js"}>JavaScript</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/roadmap/fullstack"}>FullStack</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/roadmap/security"}>Security</Link>
        </NavDropdown.Item>
      </NavDropdown>
      <Link to={"/courses"} className="homeNav">
        Courses
      </Link>
      <NavDropdown title="Quizzes" id="basic-nav-dropdown">
        <NavDropdown.Item>
          <Link to={"/quiz/html"}>HTML</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/quiz/css"}>CSS</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/quiz/js"}>JavaScript</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/quiz/react"}>React</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/quiz/security"}>Security</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/quiz/nodejs"}>Node.Js</Link>
        </NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Career" id="basic-nav-dropdown">
        <NavDropdown.Item>CV</NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/interview"}>Interview</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>Jobs</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  )}
  {isLoggedIn && userData.role === "student" && (
    <Nav className="justify-content-center flex-grow-1 pt-3 home-block">
      <Link to={"/"} className="homeNav">
        Home
      </Link>
      <NavDropdown title="Road Maps" id="basic-nav-dropdown">
        <NavDropdown.Item>
          <Link to={"/roadmap/front"}>Front End</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/roadmap/back"}>Back End</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/roadmap/js"}>JavaScript</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/roadmap/fullstack"}>FullStack</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/roadmap/security"}>Security</Link>
        </NavDropdown.Item>
      </NavDropdown>
      <Link to={"/courses"} className="homeNav">
        Courses
      </Link>
      <Link to={"/mylearning"} className="homeNav">
        MyLearning
      </Link>
      <NavDropdown title="Quizzes" id="basic-nav-dropdown">
        <NavDropdown.Item>
          <Link to={"/quiz/html"}>HTML</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/quiz/css"}>CSS</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/quiz/js"}>JavaScript</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/quiz/react"}>React</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/quiz/security"}>Security</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/quiz/nodejs"}>Node.Js</Link>
        </NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Career" id="basic-nav-dropdown">
        <NavDropdown.Item>CV</NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={"/interview"}>Interview</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>Jobs</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  )}
  {isLoggedIn &&
    (userData.role === "admin" || userData.role === "instructor") && (
      <Nav className="justify-content-center flex-grow-1 pt-3 home-block">
        <Link to={"/"} className="homeNav">
          Home
        </Link>
        <NavDropdown title="Road Maps" id="basic-nav-dropdown">
          <NavDropdown.Item>
            <Link to={"/roadmap/front"}>Front End</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={"/roadmap/back"}>Back End</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={"/roadmap/js"}>JavaScript</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={"/roadmap/fullstack"}>FullStack</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={"/roadmap/security"}>Security</Link>
          </NavDropdown.Item>
        </NavDropdown>
        <Link to={"/courses"} className="homeNav">
          Courses
        </Link>
        <NavDropdown title="Quizzes" id="basic-nav-dropdown">
          <NavDropdown.Item>
            <Link to={"/quiz/html"}>HTML</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={"/quiz/css"}>CSS</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={"/quiz/js"}>JavaScript</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={"/quiz/react"}>React</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={"/quiz/security"}>Security</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={"/quiz/nodejs"}>Node.Js</Link>
          </NavDropdown.Item>
        </NavDropdown>
        <Link to={"/dash"} className="homeNav">
          Dashboard
        </Link>
      </Nav>
    )}
            <div className="d-flex auth-div mt-3">
              {userName ? (
                <div className="d-flex">
                  <h6 className="mt-2 me-3 userfeild" title="Logged in as">
                    {userName}
                  </h6>
                  <h6 className="auth" title="Log Out">
                    <Link onClick={handleLogout} to={"/"}>
                      <i class="fa-solid fa-right-from-bracket"></i>
                    </Link>
                  </h6>
                </div>
              ) : (
                <div className="d-flex">
                  <h6 className="auth" title="Login Now">
                    <Link to={"/login"}>Login</Link>
                  </h6>
                  <h6 className="auth" title="Register Now">
                    <Link to={"/register"}>Register</Link>
                  </h6>
                </div>
              )}
            </div>
            {/* Profile dropdown */}
            <NavDropdown 
              id="profile-dropdown"
              open={isProfileDropdownOpen}
              onToggle={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              title={
                <div className="d-flex align-items-center">
                  {/* {userData && userData.profilePicture && ( */}
                  <img
                    src={/* userData. */ profilePicture}
                    alt="Profile Picture"
                    className="profile-pic me-2"
                  />
                  {/* <img
                    src={profilePicture}
                    alt="Profile Picture"
                    className="profile-pic me-2"
                    onClick={() =>
                      handleUpdateProfilePicture(newProfilePicture)
                    }
                  /> */}
                  {/* //   )} */}
                  {userName || "Profile"}
                </div>
              }
            >
              <NavDropdown.Item className="NavItem" disabled>
                <span className="d-flex align-items-center">
                  {userName} <br></br>
                  {userEmail}
                </span>
              </NavDropdown.Item>
              <NavDropdown.Item className="NavItem" as={Link} to="/mylearning">
                My Courses
              </NavDropdown.Item>

              <NavDropdown.Item className="NavItem" onClick={handleUpdateData}>
                Update Data
              </NavDropdown.Item>
              <NavDropdown.Item className="NavItem" onClick={handleLogout}>
                Log Out
              </NavDropdown.Item>
              {/* </NavDropdown.Menu> */}
            </NavDropdown>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      {/* Modal for updating user data */}
      <Modal show={showUserDataModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Your Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <img
            src={profilePicture}
            alt="Profile Picture"
            className="profile-pic me-2"
            onClick={() => handleUpdateProfilePicture(newProfilePicture)}
          /> */}
                            <img
                    src={/* userData. */ profilePicture}
                    alt="Profile Picture"
                    className="profile-pic me-2"
                  />
          <div>
      <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
      {profilePicture && <img src={profilePicture} alt="Profile Picture" />}
    </div>
          <Form>
            {/* Form fields for updating user data */}

            <Form.Group controlId="formBasicName">
              <Form.Control
                className="logininput"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Update Your Name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="logininput"
                type="email"
                placeholder="Update Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control
                className="logininput"
                type="password"
                placeholder="Update Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            {/* Add more form fields for other user data */}
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-around">
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateUserData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};
export default NavBar;
