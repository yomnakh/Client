import React from "react";
import Cv from "./Cv";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "./Cv.css";

function CvPage2() {
  const Navigate = useNavigate();
  const handleSubmit = (values) => {
    const OldData = localStorage.getItem("CvData");
    localStorage.setItem("CvData", { ...OldData, ...values });
  };

  const formik = useFormik({
    initialValues: {
      about: "",
    },
    onSubmit: handleSubmit,
  });
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="my-2">Create CV</p>
            <div className="gold-border"></div>
            <p className="pt-2">6th June 2023</p>
          </div>
        </div>
      </div>
      {/* End small title */}

      {/* Start big title */}
      <div className="container pt-4">
        <div className="row">
          <h2>Customize your cv</h2>
          <p className="col-lg-12 col-lg-5">
            Here you can create your CV by answering question and getting it
            ready for download or applying to jobs through the platform.
          </p>
        </div>
      </div>
      {/* End big title */}

      {/* Start categories */}
      <div className="container px-4 py-4 background-transparent rounded d-none d-lg-block">
        <div className="row">
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV")}
          >
            <div className="btn-golden-border me-3 bg-warning">1</div>
            <span className="text-uppercase">main information</span>
          </div>
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV/Form2")}
          >
            <div className="btn-golden-border me-3 bg-warning">2</div>
            <span className="text-uppercase">about</span>
          </div>
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV/Form3")}
          >
            <div className="btn-golden-border me-3">3</div>
            <span className="text-uppercase">skills</span>
          </div>
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV/Form4")}
          >
            <div className="btn-golden-border me-3">4</div>
            <span className="text-uppercase">experience</span>
          </div>
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV/Form5")}
          >
            <div className="btn-golden-border me-3">5</div>
            <span className="text-uppercase">education</span>
          </div>
        </div>
      </div>
      <div className="container px-4 py-4 background-transparent rounded d-block d-lg-none">
        <div className="row">
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV/Form2")}
          >
            <div className="btn-golden-border me-3 bg-warning">2</div>
            <span className="text-uppercase">About</span>
          </div>
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV/Form3")}
          >
            <div className="btn-golden-border me-3 ">3</div>
            <span className="text-uppercase">Skills</span>
          </div>
        </div>
      </div>

      <div className="container mt-4 px-4 py-4 background-transparent rounded form-container d-flex">
        <form
          className="col-12 col-lg-4 me-lg-5"
          onSubmit={formik.handleSubmit}
        >
          <div className="row my-3">
            <div className="col-md col-lg me-3">
              <label for="about" className="mb-3">
                About
              </label>
              <textarea
                className="form-control px-3 py-2"
                id="about"
                rows="5"
                cols
                placeholder="Enter text"
                name="about"
                value={formik.values.about}
                onChange={formik.handleChange}
              ></textarea>
            </div>
          </div>
        </form>
        <Cv />
      </div>
      <div className="container btns-form-part">
        <div className="row my-3">
          <div className="col-12 col-lg-2 mb-3 mb-lg-0">
            <button
              type="submit"
              onClick={() => (formik.handleSubmit(), Navigate("/CV/Form3"))}
              className="btn bg-gold text-white text-uppercase btn-gold-hover py-3 w-100"
            >
              Continue
            </button>
          </div>
          <div className="col-12 col-lg-2 order-lg-first">
            {/* to make continue btn appear first in md sm screens */}
            <button
              type="button"
              onClick={() => Navigate(-1)}
              className="btn btn-secondary text-white text-uppercase me-3 py-3 mb-3 mb-lg-0 w-100"
            >
              Back
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CvPage2;
