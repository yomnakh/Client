import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Certificate.css";
import certificateImage from "../../../Assets/certificateImage.png";
import mint from "../../../Assets/mint.jpg";

const Certificate = () => {
  return (
    <div>
      {/* <Container className='certificatecontainer'>
        <Row>

          <Col className='certificatetxt'>

            <h1 className='certificateh1'>get your quaility</h1>
            <p className='certificatep'> Skill Certificate <br></br>From The EduTrax.</p>
            <Button className='certificatebtn' style={{ borderRadius: "30px", fontSize: "16px", backgroundColor: "#018883", marginTop: "30px", border: "none", marginLeft: "280px" }}>Get Start Now <i class="fas fa-arrow-right"></i></Button>


          </Col>
          <Col>
            <img className='certificateimg' style={{ height: "300px", marginTop: "50px ", marginLeft: "800px" }} src={certificateImage} />
          </Col>
        </Row>
      </Container> */}
      <div className="container certificatecontainer py-4">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="certificatetxt my-auto py-lg-3 px-lg-5">
              <h1 className="certificateh1 my-4 px-md-2">get your quaility</h1>
              <p className="certificatep px-md-2">
                Skill Certificate From The EduTrax.
              </p>
              <Button className="certificatebtn px-md-2">
                Get Start Now <i class="fas fa-arrow-right"></i>
              </Button>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img className="certificateimg" src={certificateImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
