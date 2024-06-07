import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import JobsData from "./JobsData";  // Import the JobsData
import { FaRegClock } from 'react-icons/fa6';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
//bootstrap
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import jobimg from "../../Assets/job.png";

//style
import "./jobs.css";

const JobsShow = () => {
  const navigate = useNavigate();
  const { jobId } = useParams(); // Get jobId from URL
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    console.log("jobId from URL:", jobId); // Debug: Log jobId
    const filteredJob = JobsData.jobscard.find((job) => job.id.toString() === jobId);
    console.log("Filtered job:", filteredJob); // Debug: Log filteredJob
    setJobDetails(filteredJob);
  }, [jobId]); // Update jobDetails on jobId change

  if (!jobDetails) {
    return <div>Job not found</div>;
  }

  const handleApply = () => {
    navigate(`/jobApp/${jobDetails.id}`);
  };

  return (
    <>
      <section className="job-screen-show1">
        <Container className="pt-3">
          <Row className="jobshow-row">
            <Col className="Looking-job1 my-2 mt-4" style={{ color: "#1B3F6B" }} xs={12} md={6}>
              <h2>Looking For a Job?</h2>
              <span>
                Here you can find your best match between 1000s of updated and
                available positions.
              </span>
            </Col>
          </Row>
        </Container>

        <Container className="apply-job1 justify-content-between mt-3">
              <div className="contacts-job1 my-3 shadow ">
                <div className="comp-name1 mt-3 d-flex justify-content-between align-items-center">
                  <div className="job-company-post1 d-flex">
                    <span className="col-xs-12">
                      <img src={jobimg} alt="company logo" />
                    </span>
                    <div className="col-xs-12 ms-2">
                      <p className="job-titel1 mb-0 h3 fw-bolder"> {jobDetails.jobsTitle}</p>
                      <p className="minmiz-font1">
                        <small>{jobDetails.companyName}, {jobDetails.jobLocation}</small>
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <div className="mb-0 content-onsite1">
                      <strong>{jobDetails.salary} EGP Per Month</strong> {" "}
                      <span className="onsite-mob-view1 mt-0 onsite">
                        <span className="onsite-icon1">
                          <FontAwesomeIcon icon={faLocationDot} className="loctaion-icon1" />
                        </span>
                      </span>
                    </div>
                    <p className="mt-0 onsite1 onsite-web-view1 ">
                      <span className="onsite-icon1">
                        <FontAwesomeIcon icon={faLocationDot} />
                      </span>
                      {jobDetails.jobType}
                    </p>
                  </div>
                </div>
                <div className="comp-post1 my-3">
                  <p>
                    {jobDetails.jobDescription1}
                  </p>
                </div>
                <div className="posted-time1 my-2">
                  <span className="me-2 time-icon">
                    <FaRegClock />
                  </span>
                  2 h ago
                </div>
                <div className="about-comp1 my-4">
                  <h4 className="mb-2 fw-bolder">About Us</h4>
                  <p className="info-font-size1 ">
                    {jobDetails.aboutus}
                  </p>
                </div>
                <div className="job-desc1 my-4">
                  <h4 className="mb-2 fw-bolder">Job Description </h4>
                  <p className="info-font-size ">
                    {jobDetails.jobDescription2}
                  </p>
                </div>
                <div className="job-requermnets1 my-4">
                  <h4 className="mb-2 fw-bolder">Job Requirements </h4>
                  <p className="info-font-size1 pb-5 ">
                    {jobDetails.jobrequirements}
                  </p>
                </div>
                <div className="btn-apply1">
                  <Button style={{ color: "#fff" }} onClick={handleApply}>
                    Apply
                  </Button>
                </div>
              </div>
        </Container>
      </section>
    </>
  );
};

export default JobsShow;
