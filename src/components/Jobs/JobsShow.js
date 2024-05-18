import React from "react";
import JobsData from "./JobsData";  // Import the JobsData
import {FaRegClock} from 'react-icons/fa6';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
//bootstrap
import { Col, Container, Row, Button ,Form} from "react-bootstrap";
import jobimg from "../../Assets/job.png";

//style
import "./jobs.css";
// import MenuCheckBoxs from "../menu-checkboxs/MenuCheckBoxs";

const JobsShow = () => {
  const navigate=useNavigate();

  return (
    <>
     
      
      <section className="job-screen-show1">
        
        <Container className="pt-3">
          
          <Row className="jobshow-row">
            <Col className="Looking-job1 my-2 mt-4 " style={{color: "#1B3F6B"}} xs={12} md={6}>
              <h2>Looking For a Job?</h2>
              <span>
                Hear ypu can find your beast match between 1000s of updated and
                available positions.
              </span>
            </Col>
            <Col lg={6} className='  my-4 '>

<div className='d-flex  flex-lg-row mt-4  p-3 '>
    <Form.Control className='input-sub1 my-2 w-100' size="lg" type="text " placeholder="Search for job" ></Form.Control>
    <Button className=' btn-search-show my-2 h-100 py-3' >Search</Button>
</div>
</Col>
          </Row>
        </Container>

        <Container className="apply-job1 justify-content-between mt-3 ">
          <Row>
            <Col md={4} className='menujobshow'>

              <>
      {" "}
      <div className="menu-job-box1 my-3">
        <Container>
        {/* Fillter */}
        <div className="m-auto menu-section1 ">
          {/* <div className="fitter-container1 px-3 d-flex justify-content-between align-items-center">
            <div className="filter1 h5 fw-bolder">Filters</div>
            <div className="clear-all1">Clear All</div>
          </div> */}
          {/* location */}
          <div className="location1">
            <div className="location-form1 mt-3">
              <Form.Group controlId="custom-select">
                <Form.Label className="mx-2 fw-bold h6">Location</Form.Label>
                <br />
                <Form.Select as="select" className="rounded-0 shadow">
                  <option className="d-none " value="">
                    location
                  </option>
                  {["1", "2", "3", "4", "5"].map((option) => (
                    <option key={option} className="options-location">
                      Option {option}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
          </div>
          {/* ********Check Box Section  */}
          <div className="mt-5 icons1">
            <div className="job-type1 mt-4">
              <Form>
                <Form.Label className='fw-bold h6'>Jop Type</Form.Label>
                {["Full Time", "Part Time", "Remot"].map((type, index) => (
                  <div key={`default-${index}`} className="mb-3">
                    <Form.Check // prettier-ignore
                      type="checkbox"
                      id={`default-${type}`}
                      label={type}
                    />
                  </div>
                ))}
              </Form>
            </div>

            <div className="level1 mt-4">
              <Form>
                <Form.Label className='fw-bold h6'>Level</Form.Label>
                {["Entery Level", "Intermediate", "Expert"].map(
                  (type, index) => (
                    <div key={`default-${index}`} className="mb-3">
                      <Form.Check // prettier-ignore
                        type="checkbox"
                        id={`default-${type}`}
                        label={type}
                      />
                    </div>
                  )
                )}
              </Form>
            </div>
            <div className="salary-range1 mt-4">
              <Form >
                <Form.Label className='fw-bold h6'>Salary Range</Form.Label>
                {[
                  "under 4000 EGP",
                  "Between 4000 & 10000",
                  "More Than 1000EGP",
                ].map((type, index) => (
                  <div key={`default-${index}`} className="mb-3">
                    <Form.Check // prettier-ignore
                      type="checkbox"
                      id={`default-${type}`}
                      label={type}
                    />
                  </div>
                ))}
              </Form>
            </div>
          </div>
        </div>
        </Container>
      </div>
    </>

            </Col>
            <Col md={8} xs={10}>
            {JobsData.jobscard.map((job, index) => (

              <div className="contacts-job1 my-3">
                <div className="comp-name1 mt-3 d-flex justify-content-between align-items-center  ">
                  <div className="job-company-post1 d-flex  ">
                    <span className="col-xs-12">
                      <img src={jobimg} alt="company logo" />
                    </span>
                    <div className="col-xs-12 ms-2 ">
                      <p className="job-titel1 mb-0 h3 fw-bolder">Frontend Developer</p>
                      <p className="minmiz-font1 text-light"></p>
                        <small>Lorem ipsum dolor sit.</small>
                      <p className="job-titel1 mb-0 h3 fw-bolder"> {job.jobsTitle}</p>
                      <p className="minmiz-font1">
                        <small>{job.companyName}, {job.jobLocation}</small>
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <div className="mb-0 content-onsite1">
                      <strong>{job.salary} EGP</strong> Per Month{" "}
                      <span className="onsite-mob-view1 mt-0 onsite">
                        <span className="onsite-icon1">
                          <FontAwesomeIcon icon={faLocationDot} className="loctaion-icon1" />
                        </span>
                        {/* Onsite */}
                      </span>
                    </div>
                    <p className="mt-0 onsite1 onsite-web-view1 text-light">
                      <span className="onsite-icon1 ">
                        <FontAwesomeIcon icon={faLocationDot} />
                      </span>
                    {job.jobType}
                    </p>
                  </div>
                </div>
                <div className="comp-post1 my-3">
                  <p className="text-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt tenetur nobis minima officia minus perferendis
                    accusantium incidunt iure, ab nesciunt provident eaque ex
                    quo cupiditate sit! Odio, a.
                  </p>
                </div>
                <div className="search-key1">
                  {/* <span>
                    <Button className=" " variant="outline-warning">
                      React Js
                    </Button>
                  </span> */}
                  {/* <span>
                    <Button className=" mx-3" variant="outline-warning">
                      Development
                    </Button>
                  </span> */}
                </div>
                <div className="posted-time1 my-2">
                  <span className="me-2 time-icon">
                  <FaRegClock />
                  </span>
                  2 h ago
                </div>
                <div className="about-comp1 my-4">
                  <h4 className="mb-2 fw-bolder">About Us</h4>

                  <p className="info-font-size1 text-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus quia error ullam tenetur quos blanditiis cupiditate
                    molestias deleniti reprehenderit nobis!
                  </p>
                </div>
                <div className="job-desc1 my-4">
                  <h4 className="mb-2 fw-bolder">Job Description </h4>
                  <p className="info-font-size text-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatem nobis illum optio commodi explicabo iusto ea
                    similique a laborum saepe!
                  </p>
                </div>
                <div className="job-requermnets1 my-4">
                  <h4 className="mb-2 fw-bolder">Job Requermnets </h4>
                  <p className="info-font-size1 pb-5 text-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum rem repellendus, id maxime ex quae enim neque eaque
                    fugit commodi.
                  </p>
                </div>
                <div className="btn-apply1">
                  <Button style={{ colo: "#fff" }} onClick={()=>navigate('/jobApp')}>
                    Apply
                  </Button>
                </div>
              </div>
            ))}
            </Col>
          </Row>
        </Container>
        
      </section>
      {/* <ButtonTop /> */}
      {/* <Footer /> */}
    </>
  );
};

export default JobsShow;
