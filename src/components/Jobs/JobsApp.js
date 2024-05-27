// import React,{useState,useEffect} from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLocationDot,
//   faBars,
//   faCloudArrowUp,
// } from "@fortawesome/free-solid-svg-icons";
// import { Col, Container, Row } from "react-bootstrap";
// import jobimg from "../../Assets/job.png";
// import Button from "react-bootstrap/Button";
// import { useNavigate,useParams } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import "./jobs.css";
// import JobsData from "./JobsData";

// const JobsApp = () => {

//   // const [job, setjob] = useState([JobsData]);
//   // const filteredJobs = JobsData.jobscard.filter(filterJobs);

//   const [selectedJobType, setSelectedJobType] = useState("All");
//   const [selectedSalaryRanges, setSelectedSalaryRanges] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   // const handleShowDetails = (jobId) => {
//   //   navigate(`/JobsShow/${jobId}`);
//   // };

//   // const handleJobTypeChange = (event) => {
//   //   setSelectedJobType(event.target.value);
//   // };

//   // const handleSalaryRangeChange = (event) => {
//   //   const { value, checked } = event.target;
//   //   setSelectedSalaryRanges((prevSelected) =>
//   //     checked
//   //       ? [...prevSelected, value]
//   //       : prevSelected.filter((range) => range !== value)
//   //   );
//   // };
//   // const handleSearchChange = (event) => {
//   //   setSearchTerm(event.target.value);
//   // };
//   const { jobId } = useParams(); // Get jobId from URL
//   const [jobDetails, setJobDetails] = useState(null);

//   useEffect(() => {
//     console.log("jobId from URL:", jobId); // Debug: Log jobId
//     const filteredJob = JobsData.jobscard.find((job) => job.id.toString() === jobId);
//     console.log("Filtered job:", filteredJob); // Debug: Log filteredJob
//     setJobDetails(filteredJob);
//   }, [jobId]); // Update jobDetails on jobId change

//   const filterJobs = (job) => {
//     const salary = parseInt(job.salary.toString().replace(/[^0-9]/g, ""), 10);

//     const salaryFilter = (salaryRange) => {
//       if (salaryRange === "under 6000 EGP") return salary < 6000;
//       if (salaryRange === "Between 4000 & 10000") return salary >= 4000 && salary <= 10000;
//       if (salaryRange === "More Than 10000 EGP") return salary > 10000;
//       return false;
//     };

//     const salaryMatches = selectedSalaryRanges.length
//       ? selectedSalaryRanges.some((range) => salaryFilter(range))
//       : true;

//     const jobTypeMatches = selectedJobType === "All" || job.jobType === selectedJobType;

//     const searchTermMatches = job.jobsTitle.toLowerCase().includes(searchTerm.toLowerCase());
//     return salaryMatches && jobTypeMatches && searchTermMatches;
//   };

//   const filteredJobs = JobsData.jobscard.filter(filterJobs);

//   if (!jobDetails) {
//     return <div>Job not found</div>;
//   }
// return (
//   <>
//     <section className="job-app-screen_1 text-dark">
//       <div className=" bg-image">
//         <Container className="pt-3">
//           <Row className="align-items-center jobapp-row">
//             <Col
//               className="jobapp-col mt-4"
//               xs={12}
//               md={6}
//               style={{ color: "#1B3F6B" }}
//             >
//               <h2>Locating For a Job</h2>
//               <span>
//                 Hear ypu can find your beast match between 1000s and updated
//                 and available positions.
//               </span>
//             </Col>
//             <Col lg={6} className="  my-4 "></Col>
//           </Row>
//         </Container>

//         {/* {JobsData.jobscard.map((job) => ( */}
//         {/* {filteredJobs.map((job) => ( */}
//         {filteredJobs.map((job) => (
//         <Container className="apply-job justify-content-between mt-3 ">
//           <Row>
//             <Col lg={12} md={8} xs={10}>
//               <div className="contacts-job shadow">
//                 <br></br>
//                 <div className="comp-name d-flex justify-content-between align-items-center  ">
//                   <div className="job-company-post d-flex  ">
//                     <span className="col-xs-12">
//                       <img src={jobimg} alt="company logo" />
//                     </span>
//                     <div className="col-xs-12 ms-2 ">
//                       <p className="job-titel mb-0">{jobDetails.jobsTitle}</p>
//                       <p className="minmiz-font ">
//                         <small>{jobDetails.companyName}, {jobDetails.jobLocation}</small>
//                       </p>
//                     </div>
//                   </div>

//                   <div className="">
//                     <div className="mb-1 my-2">
//                       5000 EGP EGP per month{" "}
//                       <span className="onsite-mob-view mt-0 onsite">
//                         <span className="onsite-icon">
//                           <FontAwesomeIcon icon={faLocationDot} />
//                         </span>
//                       {jobDetails.jobType}
//                       </span>
//                     </div>
//                     <p className="onsite-web-view mt-0 onsite mb-0 ">
//                       <span className="onsite-icon">
//                         <FontAwesomeIcon icon={faLocationDot} />
//                       </span>
//                       {jobDetails.jobType}
//                     </p>
//                   </div>
//                 </div>
//                 <br />
//                 <div className="filed-appliction">
//                   <Form>
//                     <Row className="mb-3 d-flex">
//                       <div className="col-6">
//                         <Form.Group
//                           className=" email-field fields"
//                           controlId="formGridEmail"
//                         >
//                           <Form.Label className="fw-bold1 ">Email</Form.Label>
//                           <Form.Control
//                             className="input-fields"
//                             type="email"
//                             placeholder="Enter your Email"
//                             controlId="formGridEmail"
//                           />
//                           <Form.Label className="fw-bold1 mt-4">
//                             Years of Experince
//                           </Form.Label>
//                           <Form.Control
//                             className="input-fields fields mb-4"
//                             type="number"
//                             placeholder="Enter Number of Years"
//                           />
//                           <Form.Label className="fw-bold1 ">
//                             Phone Number
//                           </Form.Label>
//                           <Form.Control
//                             className="input-fields"
//                             type="number"
//                             placeholder="Enter your Phone Number"
//                           />
//                         </Form.Group>
//                       </div>

//                       <div className="my-2 col-6">
//                         <div className="my-2 fw-bold1">Upload CV</div>
//                         <div className="upload-cv">
//                           <div>
//                             <FontAwesomeIcon
//                               icon={faCloudArrowUp}
//                               size="2xl"
//                             />{" "}
//                           </div>
//                           <div className="text-center">
//                             <p className="text-center">
//                               Drag & Drop file or{" "}
//                               <span className="spcial-style ">Browser</span>
//                             </p>
//                             <p className="small-style-text m-auto">
//                               <small className="text-break text-lighjt small-style-text ">
//                                 supported formate : JPEG, PNG, GIF, MP4, PDF,
//                                 PSD, Al,Word, PPT
//                               </small>
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </Row>
//                   </Form>
//                 </div>

//                 <div className=" text-end my-3">
//                   <span className="mx-3  ">
//                     <Button className="btn-submit-app"> Submit</Button>
//                   </span>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//         ))}
//       </div>
//     </section>
//   </>
// );
// };

// export default JobsApp;

// {
//   /* <div className="my-2">
//                 <div className="my-2 fw-bold1">Upload CV</div>
//                 <div className="upload-cv">
//                   <div>
//                     <FontAwesomeIcon icon={faCloudArrowUp} size="2xl" />{" "}
//                   </div>
//                   <div className="text-center">
//                     <p className="text-center">
//                       Drag & Drop file or{" "}
//                       <span className="spcial-style ">Browser</span>
//                     </p>
//                     <p className="small-style-text m-auto">
//                       <small className="text-break text-lighjt small-style-text ">
//                         supported formate : JPEG, PNG, GIF, MP4, PDF, PSD,
//                         Al,Word, PPT
//                       </small>
//                     </p>
//                   </div>
//                 </div>
//               </div> */
// }

// return (
//   <>
//     <section className="job-app-screen_1 text-dark">
//       <div className="bg-image">
//         <Container className="pt-3">
//           <Row className="align-items-center jobapp-row">
//             <Col
//               className="jobapp-col mt-4"
//               xs={12}
//               md={6}
//               style={{ color: "#1B3F6B" }}
//             >
//               <h2>Looking For a Job ?</h2>
//               <span>
//                 Here you can find your best match between 1000s of updated and
//                 available positions.
//               </span>
//             </Col>
//             <Col lg={6} className="my-4"></Col>
//           </Row>
//         </Container>

//         <Container className="apply-job justify-content-between mt-3">
//           <Row>
//             <Col lg={12} md={8} xs={10}>
//               <div className="contacts-job shadow">
//                 <br></br>
//                 <div className="comp-name d-flex justify-content-between align-items-center">
//                   <div className="job-company-post d-flex">
//                     <span className="col-xs-12">
//                       <img src={jobimg} alt="company logo" />
//                     </span>
//                     <div className="col-xs-12 ms-2">
//                       <p className="job-titel mb-0">{jobDetails.jobsTitle}</p>
//                       <p className="minmiz-font">
//                         <small>
//                           {jobDetails.companyName}, {jobDetails.jobLocation}
//                         </small>
//                       </p>
//                     </div>
//                   </div>

//                   <div className="">
//                     <div className="mb-1 my-2">
//                       {jobDetails.salary} EGP per month{" "}
//                       <span className="onsite-mob-view mt-0 onsite">
//                         <span className="onsite-icon">
//                           <FontAwesomeIcon icon={faLocationDot} />
//                         </span>
//                         {jobDetails.jobType}
//                       </span>
//                     </div>
//                     <p className="onsite-web-view mt-0 onsite mb-0">
//                       <span className="onsite-icon">
//                         <FontAwesomeIcon icon={faLocationDot} />
//                       </span>
//                       {jobDetails.jobType}
//                     </p>
//                   </div>
//                 </div>
//                 <br />
//                 <div className="filed-appliction">
//                   <Form>
//                     <Row className="mb-3 d-flex">
//                       <div className="col-6">
//                         <Form.Group
//                           className="email-field fields"
//                           controlId="formGridFirstName"
//                         >
//                           <Form.Label>Full Name</Form.Label>
//                           <Form.Control
//                             type="text"
//                             placeholder="Enter name Name"
//                           />
//                         </Form.Group>
//                       </div>
//                       <div className="col-6">
//                         <Form.Group
//                           className="email-field fields"
//                           controlId="formGridLastName"
//                         >
//                           <Form.Label>Last Name</Form.Label>
//                           <Form.Control
//                             type="text"
//                             placeholder="Enter Name"
//                           />
//                         </Form.Group>
//                       </div>
//                     </Row>
//                     <Row className="mb-3">
//                       <Form.Group
//                         className="email-field fields"
//                         controlId="formGridEmail"
//                       >
//                         <Form.Label>Email Address</Form.Label>
//                         <Form.Control
//                           type="email"
//                           placeholder="Enter email"
//                         />
//                       </Form.Group>

//                       <Form.Group
//                         className="fields"
//                         controlId="formGridPhone"
//                       >
//                         <Form.Label>Phone</Form.Label>
//                         <Form.Control
//                           type="text"
//                           placeholder="Phone Number"
//                         />
//                       </Form.Group>
//                     </Row>

//                     <Form.Group
//                       className="fields"
//                       controlId="formGridLinkedIn"
//                     >
//                       <Form.Label>LinkedIn Account</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="LinkedIn Account"
//                       />
//                     </Form.Group>

//                     <Row className="mb-3"></Row>

//                     <Form.Group
//                       className="email-field fields"
//                       controlId="formGridPortfolio"
//                     >
//                       <Form.Label>Portfolio or Demo Website</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Portfolio or Demo Website"
//                       />
//                     </Form.Group>

//                     <Form.Group controlId="formFile" className="fields">
//                       <Form.Label>Upload CV</Form.Label>
//                       <Form.Control type="file" />
//                     </Form.Group>
//                     <div className="d-grid gap-2">
//                       <Button
//                         className="filed-appliction-btn"
//                         size="lg"
//                         style={{ color: "#fff" }}
//                       >
//                         <FontAwesomeIcon icon={faCloudArrowUp} />
//                         &nbsp;Apply Now
//                       </Button>
//                     </div>
//                   </Form>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </section>
//   </>
// );

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import jobimg from "../../Assets/job.png";
import { useParams } from "react-router-dom";
import "./jobs.css";
import JobsData from "./JobsData";

const JobsApp = () => {
  const { jobId } = useParams(); // Get jobId from URL
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    console.log("jobId from URL:", jobId); // Debug: Log jobId
    const filteredJob = JobsData.jobscard.find(
      (job) => job.id.toString() === jobId
    );
    console.log("Filtered job:", filteredJob); // Debug: Log filteredJob
    setJobDetails(filteredJob);
  }, [jobId]); // Update jobDetails on jobId change

  if (!jobDetails) {
    return <div>Job not found</div>;
  }

  return (
    <>
      <section className="job-app-screen_1 text-dark">
        <div className=" bg-image">
          <Container className="pt-3">
            <Row className="align-items-center jobapp-row">
              <Col
                className="jobapp-col mt-4"
                xs={12}
                md={6}
                style={{ color: "#1B3F6B" }}
              >
                <h2>Locating For a Job</h2>
                <span>
                  Hear ypu can find your beast match between 1000s and updated
                  and available positions.
                </span>
              </Col>
              <Col lg={6} className="  my-4 "></Col>
            </Row>
          </Container>

          {/* {JobsData.jobscard.map((job) => ( */}
          {/* {filteredJobs.map((job) => ( */}
          {/* {filteredJobs.map((job) => ( */}
          <Container className="apply-job justify-content-between mt-3 ">
            <Row>
              <Col lg={12} md={8} xs={10}>
                <div className="contacts-job shadow">
                  <br></br>
                  <div className="comp-name d-flex justify-content-between align-items-center  ">
                    <div className="job-company-post d-flex  ">
                      <span className="col-xs-12">
                        <img src={jobimg} alt="company logo" />
                      </span>
                      <div className="col-xs-12 ms-2 ">
                        <p className="job-titel mb-0">{jobDetails.jobsTitle}</p>
                        <p className="minmiz-font ">
                          <small>
                            {jobDetails.companyName}, {jobDetails.jobLocation}
                          </small>
                        </p>
                      </div>
                    </div>

                    <div className="">
                      <div className="mb-1 my-2">
                        5000 EGP EGP per month{" "}
                        <span className="onsite-mob-view mt-0 onsite">
                          <span className="onsite-icon">
                            <FontAwesomeIcon icon={faLocationDot} />
                          </span>
                          {jobDetails.jobType}
                        </span>
                      </div>
                      <p className="onsite-web-view mt-0 onsite mb-0 ">
                        <span className="onsite-icon">
                          <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                        {jobDetails.jobType}
                      </p>
                    </div>
                  </div>
                  <br />
                  <div className="filed-appliction">
                    <Form>
                      <Row className="mb-3 d-flex">
                        <div className="col-6">
                          <Form.Group
                            className=" email-field fields"
                            controlId="formGridEmail"
                          >
                            <Form.Label className="fw-bold1 ">Email</Form.Label>
                            <Form.Control
                              className="input-fields"
                              type="email"
                              placeholder="Enter your Email"
                              controlId="formGridEmail"
                            />
                            <Form.Label className="fw-bold1 mt-4">
                              Years of Experince
                            </Form.Label>
                            <Form.Control
                              className="input-fields fields mb-4"
                              type="number"
                              placeholder="Enter Number of Years"
                            />
                            <Form.Label className="fw-bold1 ">
                              Phone Number
                            </Form.Label>
                            <Form.Control
                              className="input-fields"
                              type="number"
                              placeholder="Enter your Phone Number"
                            />
                            <Form.Label className="fw-bold1 mt-4">
                              LinkedIn Account
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className="input-fields mb-4"
                              placeholder="LinkedIn Account"
                            />
                            <Form.Label className="fw-bold1">Portfolio or Demo Website</Form.Label>
                            <Form.Control
                              type="text"
                              className="input-fields"
                              placeholder="Portfolio or Demo Website"
                            />
                          </Form.Group>
                        </div>

                        <div className="my-2 col-6">
                          <div className="my-2 fw-bold1">Upload CV</div>
                          <div className="upload-cv">
                            <div>
                              <FontAwesomeIcon
                                icon={faCloudArrowUp}
                                size="2xl"
                              />{" "}
                            </div>
                            <div className="text-center">
                              <p className="text-center">
                                Drag & Drop file or{" "}
                                <span className="spcial-style" controlId="formFile">Browser</span>
                              </p>
                              <p className="small-style-text m-auto">
                                <small className="text-break text-lighjt small-style-text ">
                                  supported formate : JPEG, PNG, GIF, MP4, PDF,
                                  PSD, Al,Word, PPT
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </Row>
                    </Form>
                  </div>

                  <div className=" text-end my-3">
                    <span className="mx-3  ">
                      <Button className="btn-submit-app"> Submit</Button>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default JobsApp;
