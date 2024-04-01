// import React from "react";
// import { Container, Row, Col, Tabs, Tab, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Courseinfo.css";
// import instructor from "../../../Assets/instructor.png";
// import asidecourseimg from "../../../Assets/asidecourseimg .png";

// const Courseinfo = () => {
//   return (
//     <div>
//       <div className="CourseInfoMainData">
//         <Container>
//           <h2 className="CourseInfoMainData_header">
//             DESIGN RULES: Principles + Practices <br></br>for Great UI Design
//           </h2>
//           <p className="CourseInfoMainData_p">
//             Getting Started is the perfect course for you. In this course,
//             you’ll learn how to build <br></br> apps with Flutter, the new
//             mobile platform backed by Google.
//           </p>
//           <div class="info-tag">
//             <img
//               loading="lazy"
//               width="25px"
//               height="25px"
//               class="rounded-circle object-fit-cover me-1"
//               src="https://demo.alhikmahsoft.com/edufu/wp-content/uploads/2023/06/team4.png"
//             />
//             <p class="text-12px mt-5px me-1 created_by ">Created by</p>
//             <p>
//               <a
//                 class="created-by-instructor"
//                 href="https://www.facebook.com/profile.php?id=100006483658713"
//               >
//                 Salma Khaled
//               </a>
//             </p>
//             <br></br>
//           </div>
//           <div class="selection">
//             <span class="language-icon">
//               <i class="fas fa-globe"></i>
//             </span>
//             <select>
//               <option value="en" className="language">
//                 English
//               </option>
//             </select>
//             <div class="last-updated">
//               {" "}
//               <i class="fa-solid fa-calendar-days calender-icon"></i>
//               <span>Last updated: 2023-01-05</span>
//             </div>
//           </div>
//         </Container>
//       </div>
//       {/* /////////////////////////////////////////////////////////////////////////// */}

//       <Container fluid>
//         <Row>
//           <Col xs={12} sm={12} md={8} lg={7} xl={7} className=" ms-auto">
//             <div className="custom-box colm">
//               <Tabs
//                 defaultActiveKey="Overview"
//                 id="fill-tab-example"
//                 className="mb-3"
//                 fill
//               >
//                 <Tab eventKey="Overview" title="Overview">
//                   <h3 className="overview_header">Course description</h3>
//                   <p className="overview_content">
//                     Have you ever tried to create an app for IOS and Android,
//                     and looked for a fast, reliable, and single-code-base
//                     platform? If so, this course, Flutter: Getting Started, is
//                     the perfect course for you. In this course, you’ll learn how
//                     to build apps with Flutter, the new mobile platform backed
//                     by Google. First, you’ll explore how to build a Hello World
//                     app with Flutter. Next, you’ll build a user interface and
//                     add interactivity. Finally, you’ll discover how to create a
//                     complete database app. When you’re finished with this
//                     course, you’ll have a foundational knowledge of Flutter that
//                     will help you as you move forward to build great and
//                     successful mobile apps for Android and IOS with Flutter.
//                   </p>
//                   <h3 className="overview_what">What will i learn?</h3>
//                   <p className="overview_content">
//                     Flutter android and IOS mobile app development.
//                   </p>
//                   <h3 className="overview_req">Requirements</h3>
//                   <p>
//                     <ul>
//                       <li className="overview_content">
//                         To start with flutter you need to learn Dart language
//                       </li>
//                       <li className="overview_content">
//                         Android and web development background
//                       </li>
//                     </ul>
//                   </p>
//                 </Tab>
//                 <Tab eventKey="Instructor" title="Instructor">
//                   <div className="instructorinfo">
//                     {" "}
//                     <Container className="instructor-info">
//                       <Row>
//                         <Col
//                           xs={12}
//                           sm={12}
//                           md={3}
//                           lg={3}
//                           xl={3}
//                           className="instructor mx-auto"
//                         >
//                           <div>
//                             <img
//                               src={instructor}
//                               className="instructorimg"
//                               alt="instructorimg"
//                             />
//                           </div>
//                         </Col>
//                         <Col
//                           xs={12}
//                           sm={12}
//                           md={9}
//                           lg={9}
//                           xl={9}
//                           className="instructor"
//                         >
//                           <div>
//                             <h4 className="instructorName">salma</h4>
//                             <p className="instructorp">
//                               Adobe Certified Instructor & Adobe Certified
//                               Expert
//                             </p>
//                             <p className="instructorp">
//                               Sharing is who I am, and teaching is where I am at
//                               my best, because I've been on both sides of that
//                               equation, and getting to deliver useful{" "}
//                             </p>
//                             <ul class="instructor_social-icons">
//                               <li>
//                                 <a href="#" class="instructor_facebook">
//                                   {" "}
//                                   <i class="fa-brands fa-facebook"></i>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#" class="instructor_linkedin">
//                                   <i class="fa-brands fa-linkedin"></i>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#" class="instructor_twitter">
//                                   𝕏{" "}
//                                 </a>
//                               </li>

//                               <button className="instructor_profile">
//                                 View profile
//                               </button>
//                             </ul>
//                           </div>
//                         </Col>
//                       </Row>
//                     </Container>
//                   </div>
//                 </Tab>
//               </Tabs>
//             </div>
//           </Col>

//           {/* //////////////////////////////////////////////////////////////////////////// */}
//           <Col xs={12} sm={12} md={4} lg={3} xl={3} className="me-auto">
//             <div className="custom-box">
//               <img src={asidecourseimg} className="asidecourseimg " />
//               <h3 className="price">Free</h3>
//               <div class="info-card">
//                 <div class="info-item">
//                   <i class="icon">📚</i>
//                   <span className="spanaside">Lectures</span>
//                   <span>0</span>
//                 </div>
//                 <div class="info-item">
//                   <i class="icon">⭐</i>
//                   <span className="spanaside">Skill level</span>
//                   <span>Beginner</span>
//                 </div>
//                 <div class="info-item">
//                   <i class="icon">🕒</i>
//                   <span className="spanaside">Expiry period</span>
//                   <span>Lifetime</span>
//                 </div>
//                 <div class="info-item">
//                   <i class="icon">🎓</i>
//                   <span className="spanaside">Certificate</span>
//                   <span>Yes</span>
//                 </div>
//               </div>
//               <Button className="enrollbtn" type="enroll">
//                 Enroll
//               </Button>

//               {/* <ul class="social-icons">
//         <li><a href="#" class="facebook"> <i class="fa-brands fa-facebook"></i></a></li>
//         <li><a href="#" class="linkedin"><i class="fa-brands fa-linkedin" ></i></a></li>
//         <li><a href="#" class="youtube"><i class="fa-brands fa-youtube"></i></a></li>
//     </ul> */}
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Courseinfo;
