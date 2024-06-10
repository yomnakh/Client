import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Assets/EduTrax_Logo.jpg";
import "./NavBar.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button, Form, Nav } from "react-bootstrap";
import Api from "../../config/api";
import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "react-toastify";

const NavBar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log("isLoggedIn:", isLoggedIn);
  console.log("userData:", userData);
  const userName = isLoggedIn ? userData.name : null;
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [showUserDataModal, setShowUserDataModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState('');
  const [changePassword, setChangePassword] = useState(false);
  const [imageFile, setImageFile] = useState(null);


  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    navigate("/");
  };

  const handleUpdateProfile = () => {
    setShowUserDataModal(true)
    setName(userData.name);
    setEmail(userData.email);
    setPassword(userData.password);
    setConfirmNewPassword("")
    setShowUserDataModal(true);
  }

  const updateUser = async () => {
    try {
      if (changePassword && password !== confirmNewPassword) {
        console.error("Passwords do not match");
        Swal.fire({
          title: "Oooops......",
          text: "Passwords do not match ☹️",
          icon: "warning"
        });
        return;
      }
      const requestData = {
        name,
        email,
      };
      if (changePassword) {
        requestData.password = password;
      }
      const response = await Api.put(
        `/api/users/profile/${userData._id}`,
        { name, email, password }
      );
      console.log("User updated successfully:", response.data);
      Swal.fire({
        title: "Success",
        text: "Profile updated successfully 🎉",
        icon: "success"
      });
      setShowUserDataModal(false);
      const updatedUserData = { ...userData, name, email };
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
    } catch (error) {
      console.error("Error updating user:", error);
      alert(error)
    }
  };

  const updateImage = async () => {
    try {
      if (!imageFile) {
        console.error("No image file provided");
        return;
      }
      const formData = new FormData();
      formData.append("image", imageFile);
      const response = await Api.post(`/api/users/profile/profile-photo-upload`, formData)
      console.log(response.data);
    } catch (error) {
      console.error("Error updating user profile picture:", error);
      alert(error)
    }
  }


  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]); // Step 2: Update the selected image file
    console.log(imageFile);
  };

  return (
    <Navbar expand="xl" className=" shadow-nav" fixed="top">
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
              <Nav className="justify-content-center flex-grow-1 pt-2 home-block">
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
                  <NavDropdown.Item> <Link to={"/cv"}>CV</Link></NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to={"/interview"}>Interview</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to={"/jobs"}>Jobs</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
            {isLoggedIn && userData.role === "student" && (
              <Nav className="justify-content-center flex-grow-1 pt-2 home-block">
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
                  <NavDropdown.Item> <Link to={"/cv"}>CV</Link></NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to={"/interview"}>Interview</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to={"/jobs"}>jobs</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
            {isLoggedIn &&
              (userData.role === "admin" || userData.role === "instructor") && (
                <Nav className="justify-content-center flex-grow-1 pt-2 home-block">
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
            <div className="d-flex auth-div mt-2">
              {(userName) ? (
                <div className="d-flex">
                  <h6 className="mt-2 me-3 userfeild" title="Logged in as">
                    {userName}
                  </h6>
                  {
                    (userData.role === "admin" || userData.role === "instructor") ? (
                      <NavDropdown
                        className="dropImag"
                        id="profile-dropdown"
                        open={isProfileDropdownOpen}
                        onToggle={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                        title={
                          <div className="d-flex align-items-center">
                            <img
                              src={userData.avatar.url}
                              alt="ProfilePicture"
                              className="profile-pic me-2 h-100"
                            />
                          </div>
                        }
                      >
                        <NavDropdown.Item className="NavItem d-flex justify-content-around" onClick={handleUpdateProfile}>
                          <i className="fa-solid fa-user"></i>
                          <span >Update Profile</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="NavItem d-flex justify-content-around text-start" onClick={handleLogout}>
                          <i className="fa-solid fa-right-from-bracket fs-5"></i>
                          <span className="me-5">Log Out</span>
                        </NavDropdown.Item>
                      </NavDropdown>
                    ) : (
                      <NavDropdown
                        className="dropImag"
                        id="profile-dropdown"
                        open={isProfileDropdownOpen}
                        title={
                          <div className="d-flex align-items-center">
                            <img
                              src={userData.avatar.url}
                              alt="ProfilePicture"
                              className="profile-pic me-2"
                            />
                          </div>
                        }
                      >
                        <NavDropdown.Item className="NavItem d-flex justify-content-around" as={Link} to="/mylearning">
                          <i className="fa-regular fa-file-video fs-5"></i>
                          <span className="me-3">My Learning </span>
                        </NavDropdown.Item>

                        <NavDropdown.Item className="NavItem d-flex justify-content-around" onClick={handleUpdateProfile}>
                          <i className="fa-solid fa-user"></i>
                          <span >Update Profile</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="NavItem d-flex justify-content-around text-start" onClick={handleLogout}>
                          <i className="fa-solid fa-right-from-bracket fs-5"></i>
                          <span className="me-5">Log Out</span>
                        </NavDropdown.Item>
                      </NavDropdown>

                    )
                  }
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
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      {/* Modal for updating user data */}
      <Modal show={showUserDataModal} onHide={() => setShowUserDataModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "600" }}>Update Your Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <img
        src={profilePicture}
        alt="ProfilePicture"
        className="profile-pic me-2"
      /> */}
          {/* <input type="file" accept="image/*" onChange={handleImageChange} />
      {profilePicture && <img src={profilePicture} alt="ProfilePicture" />}
      <Button variant="primary" onClick={updateImage}>Update Image</Button> {/* Step 4: Button to upload image */}
          <Form>
            {/* Form fields for updating user data */}

            <Form.Group controlId="formBasicName" style={{ marginTop: "-50px" }}>
              <Form.Control
                className="logininput"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Update Your Name"
              />
            </Form.Group>

            <Form.Group className="navFormCheck">
              <Form.Control
                className="logininput"
                type="email"
                placeholder="Update Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled
              />
              <Form.Check
                type="checkbox"
                label="Change Password"
                checked={changePassword}
                onChange={(e) => setChangePassword(e.target.checked)}
                style={{ marginTop: "30px" }}

              />

              {changePassword && (
                <div>
                  <Form.Control
                    className="logininput"
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Control
                    className="logininput"
                    type="password"
                    placeholder="Confirm New Password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                  />
                </div>
              )}
            </Form.Group>
            {/* Add more form fields for other user data */}
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-around">
          <Button style={{ backgroundColor: "#132f53" }} onClick={updateUser}>
            Save Changes
          </Button>
          <Button variant="danger" onClick={() => setShowUserDataModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};
export default NavBar;
