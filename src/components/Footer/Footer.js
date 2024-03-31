import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import logo4 from "../../../src/Assets/logo4.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} sm={6}>
            <img src={logo4} className="logo4 col-lg-7 my-md-4" />

            {/* <h1 className="footerh1" style={{ marginTop: "15px" }}>
              EduTrax
            </h1> */}
            <p
              className="footerp col-lg-8 col-md-4 col-sm-12"
              style={{ color: "white" }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <a href="#">
              <i
                className="fab fa-linkedin linkedin iconspace"
                style={{ color: "006db0", fontSize: "20px" }}
              ></i>
            </a>
            <a href="#">
              <i
                className="fab fa-facebook facebook iconspace"
                style={{ color: "#295ec9", fontSize: "20px" }}
              ></i>
            </a>
            <a href="#">
              <i
                className="fab fa-google google iconspace"
                style={{ fontSize: "20px" }}
              ></i>
            </a>
            <a href="#">
              <i
                className="fab fa-youtube youtube iconspace "
                style={{ color: "#FF0000", fontSize: "20px" }}
              ></i>
            </a>
          </Col>

          <Col md={4} sm={12}>
            <h2> Quick Links </h2>
            <ul className="quicklinks">
              <li className="Quicklinksp"> Latest Courses</li>
              <li className="Quicklinksp">Mission & Vision</li>
              <li className="Quicklinksp">Our Approach</li>
              <li className="Quicklinksp">Exclusive Advisors</li>
              <li className="Quicklinksp"> Join A Carrer </li>
            </ul>
          </Col>
          <Col md={4} sm={6}>
            <h2>Contact Us</h2>
            <div className=" contacts py-1">
              <li>
                <i class="fas fa-map-marker-alt contact contacticon"></i>
                <span style={{ fontWeight: " 600" }}>
                  123 Main Street, City, Country
                </span>
              </li>
              <li>
                <i class="fas fa-envelope contacticon"></i>
                <span style={{ fontWeight: " 600" }}>
                  Email: info@example.com
                </span>
              </li>
              <i class="fas fa-phone contacticon"></i>
              <span style={{ fontWeight: " 600" }}>Phone: +123 456 789</span>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row>
            <hr></hr>
            <Col>
              <p className="text-center" style={{ color: "white" }}>
                &copy; 2024 EduTrax. All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
