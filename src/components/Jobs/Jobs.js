import React from "react";
import "./jobs.css";
import jobimg from "../../Assets/job.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Button,
  Container,
  Col,
  Row,
  Form
} from "react-bootstrap";
import { Link } from "react-router-dom";
import JobsData from "./JobsData";
import Swal from "sweetalert2";

const Jobs = () => {
  const [selectedJobType, setSelectedJobType] = useState("All");
  const [selectedSalaryRanges, setSelectedSalaryRanges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();

  const handleShowDetails = (jobId) => {
    if (isLoggedIn) {
      navigate(`/JobsShow/${jobId}`);
    }
    else {
      Swal.fire({
        icon: 'warning',
        title: 'Not Logged In',
        text: 'Please log in first 🙁',
      });
    }
  };

  const handleJobTypeChange = (event) => {
    setSelectedJobType(event.target.value);
  };

  const handleSalaryRangeChange = (event) => {
    const { value, checked } = event.target;
    setSelectedSalaryRanges((prevSelected) =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter((range) => range !== value)
    );
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterJobs = (job) => {
    const salary = parseInt(job.salary.toString().replace(/[^0-9]/g, ""), 10);

    const salaryFilter = (salaryRange) => {
      if (salaryRange === "under 6000 EGP") return salary < 6000;
      if (salaryRange === "Between 4000 & 10000") return salary >= 4000 && salary <= 10000;
      if (salaryRange === "More Than 10000 EGP") return salary > 10000;
      return false;
    };

    const salaryMatches = selectedSalaryRanges.length
      ? selectedSalaryRanges.some((range) => salaryFilter(range))
      : true;

    const jobTypeMatches = selectedJobType === "All" || job.jobType === selectedJobType;

    const searchTermMatches = job.jobsTitle.toLowerCase().includes(searchTerm.toLowerCase());
    return salaryMatches && jobTypeMatches && searchTermMatches;
  };

  const filteredJobs = JobsData.jobscard.filter(filterJobs);
  return (
    <div>
      <div className="firstpage-jop-bg shadow text-dark">
        <div style={{ height: "100px" }}></div>
        <div>
          <section className="job-screen1">
            <Container>
              <Row className="justify-content-md-center"></Row>
              <Row>
                <Col
                  md={12}
                  lg={6}
                  className="mb-4 contentjobscreen"
                  style={{ color: "#1B3F6B" }}
                >
                  <h2>Looking For a Job ? </h2>
                  <span>
                    Hear ypu can find your beast match between 1000s <br></br>
                    and updated and available positions.
                  </span>
                </Col>
                <Col lg={6} className="my-4">
                  <div className="d-flex flex-lg-row mt-1 p-3">
                    <Form.Control
                      className="input-sub1 my-2 w-100"
                      size="lg"
                      type="search"
                      placeholder="Search for job"
                      value={searchTerm}
                      onChange={handleSearchChange}
                    ></Form.Control>
                    <Button className="btn-subscribe1 my-2 h-100">Search</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
        <div className="container d-flex justify-content-center ">
          <div>
            <div className=" left-menu"/* style={{position:"fixed"}} */>
              <div className="menu-job-component1 d-lg-block d-none text-dark" >
                <br></br>
                <div className="m-auto menu-section1">
                  <div className="location1">
                  </div>
                  <div className="mt-5 icons1">
                    <div className="job-type1 ">
                      <Form>
                        <Form.Label className="fw-bold">Job Type</Form.Label>
                        <Form.Select
                          onChange={handleJobTypeChange}
                          value={selectedJobType}
                        >
                          <option value="All">All</option>
                          <option value="On-Site">On-Site</option>
                          <option value="Remote">Remote</option>
                        </Form.Select>
                      </Form>
                    </div>
                  </div>
                  <div className="salary-range1">
                    <Form>
                      <Form.Label className="fw-bold">Salary Range</Form.Label>
                      {[
                        "under 6000 EGP",
                        "Between 4000 & 10000",
                        "More Than 10000 EGP",
                      ].map((type, index) => (
                        <div key={`default-${index}`} className="mb-3">
                          <Form.Check
                            type="checkbox"
                            id={`default-${type}`}
                            label={type}
                            value={type}
                            onChange={handleSalaryRangeChange}
                          />
                        </div>
                      ))}
                    </Form>
                  </div>
                </div>
              </div>
              <Link to="/cv">
                <Button className=" Create-your-cv text-white mt-5 w-100  transition mt-4 d-lg-block d-none">
                  Create your cv
                </Button>
              </Link>
            </div>
          </div>
          <Container className="">
            <Row>
              <Col md={12} xs={12}>
                <div>
                  {filteredJobs.map((job) => (
                    <Card
                      className="job-card-component gy-4 p-2 mb-4 shadow "
                      style={{ color: "var(--seco)" }}
                      key={job.id}
                    >
                      <Card.Body className="text-withe ">
                        <div className="row">
                          <div className="col-lg-1 col-12">
                            <img src={jobimg} className="jobimg" alt='img' />
                          </div>
                          <div className="col-lg-6 col-12 ms-2">
                            <h3 className="h3">{job.jobsTitle}</h3>
                            <Card.Subtitle className="mb-2">
                              <p className="p-subtitle text-dark">{job.companyName}, {job.jobLocation}</p>
                            </Card.Subtitle>
                          </div>
                          <div className="col-lg-4 col-12 ">
                            <div
                              className="jobs-details row"
                              style={{ textAlign: "end" }}
                            >
                              <div className="col-lg-12 col-6 ">
                                <strong>{job.salary} EGP per month</strong>
                              </div>
                              <div className="col-lg-12 col-6 ">
                                <span className="mt-0 col-lg-12 col-1">
                                  <span>
                                    <i class="fas fa-map-marker-alt main-color m-2"></i>
                                  </span>
                                  {job.jobType}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="col-lg-10 col-12 my-3 job-p text-dark">
                          {job.jobDescription1}
                        </p>
                        <div className="row mt-4 ">
                          <div className="col-lg-7 col-5 ms-2">
                            <span>
                              <i
                                class="far fa-clock p-2 fs-4 "
                                style={{ color: "grey", fontSize: "13px" }}
                              ></i>{" "}
                              <span className="">2h ago</span>
                            </span>
                          </div>
                          <div
                            className="col-lg-4 col-6 mb-0"
                            style={{ textAlign: "right" }}
                          >
                            <Button
                              className="btn1"
                              onClick={() => handleShowDetails(job.id)}
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};
export default Jobs;