import Cv from "./Cv";
import img from "../../Assets/404 Page.jpg";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import "./Cv.css";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../redux/slices/cv.slice";

function CvPage1() {
  const Navigate = useNavigate();
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.cv.profile);

  const handleSubmit = (values) => {
    const OldData = localStorage.getItem("CvData");
    localStorage.setItem("CvData", { ...OldData, ...values, image });
    dispatch(setProfile(values));
  };

  const [formValues, setFormValues] = useState({
    fName: "",
    lName: "",
    profession: "",
    country: "",
    city: "",
    mobileNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    dispatch(setProfile({ ...profileData, [e.target.name]: e.target.value }));
  };

  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      profession: "",
      country: "",
      city: "",
      mobileNumber: "",
      email: "",
    },
    onSubmit: handleSubmit,
  });

  const refImage = useRef()

  function handleClickInput() {
    refImage.current.click()
  }

  function uploadFile(e) {
    let image = e.target.files[0]
    dispatch(setProfile({ ...profileData, image }));
  }
  return (
    <div style={{marginTop:"100px"}}>
      <div className="container">
        <div className="row">
        </div>
      </div>
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
            <div className="btn-golden-border me-3 ">1</div>
            <h6 className="text-uppercase">main information</h6>
          </div>
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV/Form2")}
          >
            <div className="btn-golden-border me-3 ">2</div>
            <h6 className="text-uppercase">about</h6>
          </div>
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV/Form3")}
          >
            <div className="btn-golden-border me-3">3</div>
            <h6 className="text-uppercase">skills</h6>
          </div>
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV/Form4")}
          >
            <div className="btn-golden-border me-3">4</div>
            <h6 className="text-uppercase">experience</h6>
          </div>
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV/Form5")}
          >
            <div className="btn-golden-border me-3">5</div>
            <h6 className="text-uppercase">education</h6>
          </div>
        </div>
      </div>
      <div className="container px-4 py-4 background-transparent rounded d-block d-lg-none">
        <div className="row">
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV")}
          >
            <div className="btn-golden-border me-3 ">1</div>
            <h6 className="text-uppercase">main information</h6>
          </div>
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV/Form2")}
          >
            <div className="btn-golden-border me-3 ">2</div>
            <h6 className="text-uppercase">about</h6>
          </div>
        </div>
      </div>

      <div className="container mt-4 px-4 py-4 background-transparent rounded form-container d-flex">
        <form className="col-12 col-lg-4 me-lg-5">
          <div className="row">
            <div className="col-md col-lg me-3">
              <label for="firstName" className="mb-3 label">
                First Name
              </label>
              <input
                type="text"
                className="form-control px-3 py-2 text-dark text-dark"
                id="firstName"
                placeholder="Enter your first name"
                name="fName"
                value={profileData.fName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md col-lg">
              <label for="lastName" className="mb-3 mt-3 mt-lg-0 label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control px-3 py-2 text-dark"
                id="lastName"
                placeholder="Enter your last name"
                name="lName"
                value={profileData.lName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md col-lg me-3">
              <label for="profession" className="mb-3 label">
                Profession
              </label>
              <input
                type="text"
                className="form-control px-3 py-2 text-dark"
                id="profession"
                placeholder="Enter your profession"
                name="profession"
                value={profileData.profession}
                onChange={handleChange}
              />
            </div>
            <div className="col-md col-lg">
              <label for="country" className="mb-3 mt-3 mt-lg-0 label">
                Country
              </label>
              <input
                type="text"
                className="form-control px-3 py-2 text-dark"
                id="country"
                placeholder="Enter your country"
                name="country"
                value={profileData.country}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md col-lg me-3">
              <label for="city" className="mb-3 label">
                City
              </label>
              <input
                type="text"
                className="form-control px-3 py-2 text-dark"
                id="city"
                placeholder="Enter your city"
                name="city"
                value={profileData.city}
                onChange={handleChange}
              />
            </div>
            <div className="col-md col-lg-8">
              <label for="phone" className="mb-3 mt-3 mt-lg-0 label">
                Mobile Number
              </label>
              <br />
              <input
                type="tel"
                className="form-control px-5 py-2 text-dark"
                id="phone"
                placeholder="Enter your mobile number"
                name="mobileNumber"
                value={profileData.mobileNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md col-lg">
              <label for="email" className="mb-3 label">
                Email
              </label>
              <input
                type="email"
                className="form-control px-3 py-2 text-dark"
                id="email"
                placeholder="Enter your email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-6">
              <label for="personalPhoto" className="d-none d-lg-block label">
                Personal Photo
              </label>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col golden-dashed-border d-flex flex-column align-items-center py-5">
              <img src={img} alt="" width="80px" />
              <p className="fw-bold-cv mt-3" >
                Drag & drop files or
                <label
                  for="personalPhoto"
                  id="fileLink"
                  className="gold-txt browse-txt mx-2"
                >
                  Browse
                </label>
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={uploadFile}
                  id="personalPhoto"
                  ref={refImage}
                />
              </p>
              <p className="text-secondary small-txt">
                Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
              </p>
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
              onClick={() => (handleSubmit(), Navigate("/CV/form2"))}
              className="btn  text-white btn-gold-hover w-100 btn-back-cv"
            >
              Continue
            </button>
          </div>
          <div className="col-12 col-lg-2 order-lg-first">
            {/* to make continue btn appear first in md sm screens */}
            <button
              type="button"
              onClick={() => Navigate("/")}
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

export default CvPage1;
