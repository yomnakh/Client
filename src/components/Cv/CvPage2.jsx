import React from "react";
import Cv from "./Cv";
import { useNavigate } from "react-router-dom";
import image from "../../Assets/404 Page.jpg";
import { useFormik } from "formik";
import { setAbout, setProfile } from "../../redux/slices/cv.slice";
import { useDispatch, useSelector } from "react-redux";
import "./Cv.css";

function CvPage2() {

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const aboutData = useSelector((state) => state.cv.about);

  const handleSubmit = (values) => {
    const OldData = localStorage.getItem("CvData");
    localStorage.setItem("CvData", { ...OldData, ...values, image });
    dispatch(setProfile(values.about));
  };

  const handleChange = (e) => {
    dispatch(setAbout(e.target.value));
  };

  console.log(aboutData);
  return (
    <div style={{marginTop:"100px"}}>
      <div className="container">
        <div className="row">

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
            <div className="btn-golden-border me-3 createcv-active">1</div>
            <span className="text-uppercase">main information</span>
          </div>
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV/Form2")}
          >
            <div className="btn-golden-border me-3 createcv-active">2</div>
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
            <div className="btn-golden-border me-3 createcv-active">2</div>
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
          onSubmit={handleSubmit}
        >
          <div className="row my-3">
            <div className="col-md col-lg me-3">
              <h5 for="about" className="mb-3">
                About
              </h5>
              <textarea
                className="form-control px-3 py-2 text-dark"
                id="about"
                rows="5"
                cols
                placeholder="Enter text"
                name="about"
                value={aboutData.about}
                onChange={handleChange}
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
              onClick={() => (handleSubmit(), Navigate("/CV/Form3"))}
              className="btn  text-white btn-gold-hover w-100 btn-back-cv"
            >
              Continue
            </button>
          </div>
          <div className="col-12 col-lg-2 order-lg-first">
            {/* to make continue btn appear first in md sm screens */}
            <button
              type="button"
              onClick={() => Navigate("/CV")}
              className="btn btn-secondary text-white me-3 mb-3 mb-lg-0 w-100 btn-back-cv"
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
