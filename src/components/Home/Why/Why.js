import "./Why.css";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const WhyCards = () => {
  return (
    <Container fluid className="why-us">
      <Container className="why">
     
        <Row>
        <h2 className=" why-header text-center" style={{marginTop:"60px" }}>Why Choose <p className='why-color'>EduTrax</p>   </h2>
          <Col  xs="12"
      sm="12"
      md={6}
      lg="6"
      xl="4"
      xxl="4"  className="mb-3 justify-content-center d-xl-block d-flex">
            <Card className="why-card">
              <Card.Body>
                <Card.Title>
                    
                  <i class="fa-solid fa-globe "></i>
                </Card.Title>
                <Card.Text>
                  <h3 className="why-h3">Learn More Anywhere</h3 >
                  <p className="why-p">
                    Learn from anywhere in world on desktop, mobile or tablet
                    with an Internet connection.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col  xs="12"
      sm="12"
      md={6}
      lg="6"
      xl="4"
      xxl="4"  className="mb-3 justify-content-center d-xl-block d-flex">
            <Card  className="why-card">
              <Card.Body>
                <Card.Title>
                  <i class="fa-solid fa-laptop"></i>
                </Card.Title>
                <Card.Text>
                  <h3 className="why-h3">Expert Instructor</h3 >
                  <p className="why-p">
                    Learn from anywhere in world on desktop, mobile or tablet
                    with an Internet connection.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col  xs="12"
      sm="12"
      md={6}
      lg="6"
      xl="4"
      xxl="4"  className="mb-3 justify-content-center d-xl-block d-flex">
            <Card  className="why-card">
              <Card.Body>
                <Card.Title>
                  <i class="fa-solid fa-headphones"></i>
                </Card.Title>
                <Card.Text>
                  <h3 className="why-h3">24/7 Strong Support</h3 >
                  <p className="why-p">
                    Learn from anywhere in world on desktop, mobile or tablet
                    with an Internet connection.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default WhyCards;
