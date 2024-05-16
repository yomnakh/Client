import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBars,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
//bootstrap
import { Col, Container, Row } from "react-bootstrap";
import itlogo from "../../Assets/itlogo.jpg";

//style
// import MenuCheckBoxs from "../menu-checkboxs/MenuCheckBoxs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./jobs.css";

const JobsApp = () => {
  return (
    <>
    {/* <Header /> */}

    {/* <BackgroundLayer /> */}
    <section className="job-app-screen_1 text-white bg-dark">
    <div className=" bg-image">
      <div className="bg-layer">
      <Container className="pt-3">
        
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <h2>Locating For a Job</h2>
            <span>
              Hear ypu can find your beast match between 1000s and updated and
              available positions.
            </span>
          </Col>
          <Col xs={12} md={6}>
            <form class="form-inline my-1 my-lg-0 mt-3 row align-items-center position-relative">
              <input
                class="form-control mr-sm-2 mainLoginInput search flex-fill"
                type="search"
                placeholder="&#xF002; Search "
                aria-label="Search"
              />
                <i class="fa-solid fa-magnifying-glass search-icon main-color "></i>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>

              <span className="bar-icon">
                <FontAwesomeIcon icon={faBars} size="lg" />{" "}
              </span>
            </form>
          </Col>
        </Row>
      </Container>

      <Container className="apply-job justify-content-between mt-3 ">
        <Row>
          <Col md={4}>


            {/* <MenuCheckBoxs /> */}
            <>
      {" "}
      <div className="menu-job-box1 my-3">
        <Container>
        {/* Fillter */}
        <div className="m-auto menu-section1 ">
          <div className="fitter-container1 px-3 d-flex justify-content-between align-items-center">
            <div className="filter1 h5 fw-bolder">Filters</div>
            <div className="clear-all1">Clear All</div>
          </div>
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
            <div className="contacts-job">
              <br></br>
              <div className="comp-name d-flex justify-content-between align-items-center  ">
                <div className="job-company-post d-flex  ">
                  <span className="col-xs-12">
                    <img src={itlogo} alt="company logo" />
                  </span>
                  <div className="col-xs-12 ms-2 ">
                    <p className="job-titel mb-0">Frontend Developer</p>
                    <p className="minmiz-font">
                      <small>Lorem ipsum dolor sit.</small>
                    </p>
                  </div>
                </div>

                <div className="">
                  <div className="mb-1 my-2">
                    5000 EGP - 8000 EGP per month{" "}
                    <span className="onsite-mob-view mt-0 onsite">
                      <span className="onsite-icon">
                        <FontAwesomeIcon icon={faLocationDot} />
                      </span>
                      Onsite
                    </span>
                  </div>
                  <p className="onsite-web-view mt-0 onsite  mb-0 ">
                    <span className="onsite-icon">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    Onsite
                  </p>
                </div>
              </div>
              <br />
              <div className="comp-post my-4">
                <h4 className="fw-bold">Yousef Ehab Farok</h4>
                <p>Computer Science, international islamic university</p>
              </div>
              <div className="filed-appliction">
                <Form>
                  <Row className="mb-3">
                    <Form.Group
                      className=" email-field fields"
                      as={Col}
                      controlId="formGridEmail"
                    >
                      <Form.Label className='fw-bold'>Email</Form.Label>
                      <Form.Control
                        className="input-fields"
                        type="email"
                        placeholder=""
                        controlId="formGridEmail"
                      />
                    </Form.Group>
                    <Form.Group
                      className=" fields"
                      as={Col}
                      controlId="formGridEmail"
                    >
                      <Form.Label className='fw-bold'>Years of Experinse</Form.Label>
                      <Form.Control
                        className="input-field fields"
                        type="number"
                      />
                    </Form.Group>
                  </Row>
                  <Form.Group className=" ">
                    <Form.Label className='fw-bold'>Phone Number</Form.Label>
                    <Form.Control
                      className="input-field"
                      type="number"
                      placeholder=""
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="my-2">
                <div className="my-2 fw-bold">Upload CV</div>
                <div className="upload-cv ">
                  <div>
                    <FontAwesomeIcon icon={faCloudArrowUp} size="2xl" />{" "}
                  </div>
                  <div className="text-center">
                    <p className="text-center">
                      Drag & Drop file or{" "}
                      <span className="spcial-style">Browser</span>
                    </p>
                    <p className="small-style-text m-auto">
                      <small className="text-break text-lighjt small-style-text">
                        supported formate : JPEG, PNG, GIF, MP4, PDF, PSD,
                        Al,Word, PPT
                      </small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="btn-submit-app text-end my-3">
                <span className="mx-3  ">
                  <Button variant="warning">Submit</Button>
                </span>
                <span>
                  <Button variant="secondary">
                    Cancel
                  </Button>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
            </div>
            </div>
    </section>
    {/* <ButtonTop /> */}
    {/* <Footer /> */}
  </>
  )
}

export default JobsApp
