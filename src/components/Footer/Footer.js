import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} sm={6}>
            <h1 className="footer-h1" style={{ marginTop: "15px" }}>
              EduTrax
            </h1>
            <p
              className="footer-p col-lg-8 col-md-4 col-sm-12"
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
            <h2 className="quicklinks-header"> Quick Links </h2>
            <ul className="quicklinks text-center ms-2">
              <li className="Quicklinksp ms-2"><Link to={"/courses"} className="text-light footerLinks">Join Our Courses</Link></li>
              {/* <li className="Quicklinksp">Mission & Vision</li> */}
              <li className="Quicklinksp ms-2"><Link to={"/jobs"} className="text-light footerLinks">Strat your Career</Link></li>
              {/* <li className="Quicklinksp">Exclusive Advisors</li> */}
              <li className="Quicklinksp ms-2"> <Link to={"/interview"} className="text-light footerLinks">about interviews</Link></li>
            </ul>
          </Col>
          <Col md={4} sm={6}>
            <h2 className="contactus-header">Contact Us</h2>
            <div className=" contacts py-1">
              <li>
                <i class="fas fa-map-marker-alt contact contacticon"></i>
                <span className="connection-p footerLinks" style={{ fontWeight: " 600" }}>
                  Sadat Academy, Maadi, Egypt
                </span>
              </li>
              <li>
                <i class="fas fa-envelope contacticon"></i>
                <span className="connection-p" style={{ fontWeight: " 600" }}>
                  <a href="mailto:edutrax2@gmail.com" className="text-light footerLinks" title="mail to edutrax2@gmail.com">Email: edutrax2@gmail.com</a>
                </span>
              </li>
              <i class="fas fa-phone contacticon"></i>
              <span className="connection-p footerLinks" style={{ fontWeight: " 600" }}>
                Phone: +123 456 789
              </span>
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
                &copy; {new Date().getFullYear()} EduTrax. All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
