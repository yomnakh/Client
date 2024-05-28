import "./Why.css";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
const WhyCards = () => {
  return (
    <Container fluid className="why-us">
      <Container className="why">

        <Row>
          <div><h2 className=" why-header text-center" style={{ marginTop: "100px" }}>Why Choose <p className='why-color'>EduTrax</p></h2>
            <img src="https://demo.alhikmahsoft.com/edufu/wp-content/uploads/2023/06/line-shape.svg" style={{ width: "150px", marginLeft:"690px" ,marginTop:"-30px"}} /></div>

          <Col xs="12"
            sm="12"
            md={6}
            lg="6"
            xl="4"
            xxl="4" className="mb-3 justify-content-center d-xl-block d-flex">
            <Card className="why-card" >
              <Card.Body>
                <Card.Title>
                  <div className="div-why-icon">   <i class="fa-solid fa-globe why-icon "></i> </div>

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
          <Col xs="12"
            sm="12"
            md={6}
            lg="6"
            xl="4"
            xxl="4" className="mb-3 justify-content-center d-xl-block d-flex">
            <Card className="why-card">
              <Card.Body>
                <Card.Title>
                  <div className="div-why-icon">   <i class="fa-solid fa-laptop why-icon "></i> </div>

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
          <Col xs="12"
            sm="12"
            md={6}
            lg="6"
            xl="4"
            xxl="4" className="mb-3 justify-content-center d-xl-block d-flex">
            <Card className="why-card">
              <Card.Body>
                <Card.Title>
                  <div className="div-why-icon">   <i class="fa-solid fa-headphones why-icon "></i> </div>

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
