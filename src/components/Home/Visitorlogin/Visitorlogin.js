import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import "./Visitorlogin.css"
import { Link } from "react-router-dom";


const Visitorlogin = () => {
  return (
    <div className="container-fluid  Visitorlogin">
      <div className="row">
        <div className="col-md-4 d-flex align-items-center justify-content-center d-flex">
          <div className="text-white d-flex div-visitor">
            <i className="fas fa-envelope fa-3x mb-3 visitor-icon "></i>
            <h2 className="mb-3 visitor-h2">Subscribe to <br></br> Newsletter</h2>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="w-90">
            <input
              type="email"
              className="form-control form-control-lg mb-3 visitor-input"
              placeholder="Enter your email address"
              style={{ marginLeft: "90px" }}

            />

          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <Button className='aboutbuttonn' style={{ borderRadius: "5px", fontSize: "16px", backgroundColor: "#fff", border: "none", marginLeft: "70px"}}> <Link className='visitorbtn' to={"/register"}>Register Now</Link></Button>
        </div>

      </div>
    </div>
  )
}

export default Visitorlogin
