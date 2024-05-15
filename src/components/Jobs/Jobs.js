import React from "react";
import './jobs.css';
import itlogo from "../../Assets/itlogo.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Container, Col, Row, Form, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const Jobs = () => {

    const [Data, setData] = useState(Array.from({ length: 5 }));
     const navigate=useNavigate();
    return (
        <>
          <div className=" bg-image bg-dark">
            <div className="bg-layer">
              {/* <Header /> */}
              <div style={{ height: "100px" }}></div>
              <>
      <section className="job-screen1 " /* style={{ marginTop: "150px" }} */>
        <Container className=" ">
          <Row className="justify-content-md-center">
            {/* <Col>
              <span style={{ disply: "none" }} className="mt-0">
                <p className="line-after1">Job</p>
              </span>
              <p className="line1 mb-1"></p>
              <span>
                <p>6 jun 2023</p>
              </span>
            </Col> */}
          </Row>
          <Row>
            <Col   md={12} lg={6} className="mb-4 contentjobscreen">
              <h2>Looking For a Job ?</h2>
              <span className="">
                Hear ypu can find your beast match between 1000s <br></br>
                and updated and
                available positions.
              </span>
             
            </Col>
                             <Col lg={6} className='  my-4 '>

                                <div className='d-flex  flex-lg-row mt-4  p-3 '>
                                    <Form.Control className='input-sub1 my-2 w-100' size="lg" type="text " placeholder="Search for job" ></Form.Control>
                                    <Button className=' btn-subscribe1 my-2 h-100' >subscribe</Button>
                                </div>
                            </Col>


          </Row>
        </Container>
      </section>
     </>



    {/* <>
      {Data.map((items, index) => (
        <Card className="job-card-component gy-4 p-2 mb-4">
          <Card.Body className="text-withe ">
            <div className="row">
              <div className="col-lg-1 col-12">
                <img src={ itlogo } className="itlogo" />
              </div>
              <div className="col-lg-6 col-12 ms-2">
                <h3 className="h3">Front-End Developer</h3>
                <Card.Subtitle className="mb-2">
                  <p>Eptikar IT-solutions, obour city</p>
                </Card.Subtitle>
              </div>
              <div className="col-lg-4 col-12 ">
                <div className="jobs-details row" style={{ textAlign: "end" }}>
                  <div className="col-lg-12 col-6 ">
                    <strong>5000 EGP - 8000 EGP </strong>per month
                  </div>
                  <div className="col-lg-12 col-6 ">
                    <span className="mt-0 col-lg-12 col-1">
                      <span>
                        <i class="fas fa-map-marker-alt main-color m-2"></i>
                      </span>
                      Onsite
                    </span>
                  </div>
                </div>
              </div>
            </div>


              <p className="col-lg-10 col-12 my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Integer posuere erat a
                ante.
              </p>

            <div className="d-flex ">
              <Button className="btn2">React Js</Button>
              <Button className="btn2" style={{ marginLeft: "10px" }}>
                Development
              </Button>
            </div>

            <div className="row mt-4 ">
              <div className="col-lg-7 col-5 ms-2">
                <span>
                  <i
                    class="far fa-clock p-2 fs-4"
                    style={{ color: "#e1e1e16e", fontSize: "18px" }}
                  ></i>{" "}
                <span  className="">2h ago</span>
                </span>
              </div>
              <div
                className="col-lg-4 col-6 mb-0"
                style={{ textAlign: "right" }}
              >
                <Button className="btn1"  onClick={()=>navigate('/jobsShow')}>View Details</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </> */}



              <div></div>
              <div className="container d-flex justify-content-center">


          <>
      <div>

        <div className="menu-job-component1 d-lg-block d-none">
          <br></br>
          {/* Fillter */}
          <div className="m-auto menu-section1 ">
            <div className="fitter-container1 p-3 d-flex justify-content-between align-items-center">
              <div className="filter1 h5 fw-bold">Filter</div>
              <div className="clear-all1">Clear All</div>
            </div>


            <div className="location1">
              <div className="location1 fw-bold">Location</div>
              <div className="location-form1 mt-3">
                <Form.Group controlId="custom-select">
                  <Form.Label>Location</Form.Label>
                  <br />
                  <Form.Select as="select" className="rounded-0 shadow text-white select-sidebar">
                    <option className="d-none " value="">
                      Cairo
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
              <div className="job-type1">
                <Form>
                  <Form.Label className='fw-bold'>Jop Type</Form.Label>
                  {["Full Time", "Part Time", "Remot"].map(
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
            </div>
            <div className="level1">
              <Form>
                <Form.Label className='fw-bold'>Level</Form.Label>
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
            <div className="salary-range1">
              <Form>
                <Form.Label className='fw-bold'>Salary Range</Form.Label>
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
        <Link to="/cv">
          <Button variant="" className="bg-info text-white mt-5 w-100  hover-bg-color transition mt-4 d-lg-block d-none">
            Create your cv</Button>
        </Link>
      </div>

    </>



        <Container>
                  <Row>
                    <Col md={12} xs={12}>


            <>
      {Data.map((items, index) => (
        <Card className="job-card-component gy-4 p-2 mb-4">
          <Card.Body className="text-withe ">
            <div className="row">
              <div className="col-lg-1 col-12">
                <img src={itlogo} className="itlogo" />
              </div>
              <div className="col-lg-6 col-12 ms-2">
                <h3 className="h3">Front-End Developer</h3>
                <Card.Subtitle className="mb-2">
                  <p>Eptikar IT-solutions, obour city</p>
                </Card.Subtitle>
              </div>
              <div className="col-lg-4 col-12 ">
                <div className="jobs-details row" style={{ textAlign: "end" }}>
                  <div className="col-lg-12 col-6 ">
                    <strong>5000 EGP - 8000 EGP </strong>per month
                  </div>
                  <div className="col-lg-12 col-6 ">
                    <span className="mt-0 col-lg-12 col-1">
                      <span>
                        <i class="fas fa-map-marker-alt main-color m-2"></i>
                      </span>
                      Onsite
                    </span>
                  </div>
                </div>
              </div>
            </div>


              <p className="col-lg-10 col-12 my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Integer posuere erat a
                ante.
              </p>

            <div className="d-flex ">
              <Button className="btn2">React Js</Button>
              <Button className="btn2" style={{ marginLeft: "10px" }}>
                Development
              </Button>
            </div>

            <div className="row mt-4 ">
              <div className="col-lg-7 col-5 ms-2">
                <span>
                  <i
                    class="far fa-clock p-2 fs-4"
                    style={{ color: "#e1e1e16e", fontSize: "18px" }}
                  ></i>{" "}
                <span  className="">2h ago</span>
                </span>
              </div>
              <div
                className="col-lg-4 col-6 mb-0"
                style={{ textAlign: "right" }}
              >
                <Button className="btn1"  onClick={()=>navigate('/JobsShow')}>View Details</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>


                    </Col>
                  </Row>
                </Container>
              </div>
                 <div className="container ">
            <Stack  gap={2} className="col  d-block d-lg-none p-3 mt-4">
                  <Link to="/app">
                    <Button variant="" className="Default-bg text-white hover-bg-color transition mb-4 w-100">
                      Create your cv
                    </Button>
                  </Link>
            </Stack>
          </div>
            </div>
    
    
          </div>
        </>
      );
    }

export default Jobs
