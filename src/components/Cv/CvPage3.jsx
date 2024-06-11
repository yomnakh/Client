
import React, { useState } from 'react';
import Cv from './Cv';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setSkills } from "../../redux/slices/cv.slice";
import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cv.css";
function CvPage3() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const skillsData = useSelector((state) => state.cv.skills);
  const [skillsArr, setSkillsArr] = useState([])

  const handleChange = (value, index) => {
    let temp = [...skillsData]
    temp[index] = value
    dispatch(setSkills(temp));
  };
  // const handleChange = (e, index) => {
  //   const updatedSkills = [...skills];
  //   updatedSkills[index] = e.target.value;
  //   setSkills(updatedSkills);
  // };
  const handleSubmit = () => {
    const OldData = localStorage.getItem('CvData');
    localStorage.setItem('CvData', { ...OldData, Skills: skillsData });
    // You might want to dispatch an action to update profile data in Redux store

    Navigate('/CV/Form4'); // Navigate to the next form
  };
  const addSkillField = () => {
    dispatch(setSkills([...skillsData, '']))
  };
  const removeSkillField = (index) => {
    const updatedSkills = skillsData.filter((_, i) => i !== index);
    dispatch(setSkills(updatedSkills));
  };
console.log(skillsData);
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
          <p className="col-lg-12 col-lg-5">Here you can create your CV by answering question and getting it
            ready for download or applying to jobs through the platform.
          </p>
        </div>
      </div>
      {/* End big title */}

      {/* Start categories */}
      <div className="container px-4 py-4 background-transparent rounded d-none d-lg-block">
        <div className="row">
          <div className="col d-flex align-items-center" onClick={() => Navigate('/CV')} >
            <div className="btn-golden-border me-3 createcv-active">1</div>
            <span className="text-uppercase">main information</span>
          </div>
          <div className="col d-flex align-items-center" onClick={() => Navigate('/CV/Form2')}>
            <div className="btn-golden-border me-3 createcv-active" >2</div>
            <span className="text-uppercase">about</span>
          </div>
          <div className="col d-flex align-items-center" onClick={() => Navigate('/CV/Form3')}>
            <div className="btn-golden-border me-3 createcv-active" >3</div>
            <span className="text-uppercase">Skills</span>
          </div>
          <div className="col d-flex align-items-center" onClick={() => Navigate('/CV/Form4')}>
            <div className="btn-golden-border me-3" >4</div>
            <span className="text-uppercase">experience</span>
          </div>
          <div className="col d-flex align-items-center" onClick={() => Navigate('/CV/Form5')}>
            <div className="btn-golden-border me-3" >5</div>
            <span className="text-uppercase">education</span>
          </div>
        </div>
      </div>
      <div className="container px-4 py-4 background-transparent rounded d-block d-lg-none">
        <div className="row">
          <div className="col d-flex align-items-center" onClick={() => Navigate('/CV/Form3')}>
            <div className="btn-golden-border me-3 createcv-active" >3</div>
            <span className="text-uppercase">Skills</span>
          </div>
          <div className="col d-flex align-items-center" onClick={() => Navigate('/CV/Form4')}>
            <div className="btn-golden-border me-3 " >4</div>
            <span className="text-uppercase">Experience</span>
          </div>
        </div>
      </div>

      <div className="container mt-4 px-4 py-4 background-transparent rounded form-container d-flex">
        <form
          className="col-12 col-lg-4  me-lg-5"
          onSubmit={handleSubmit}
        >
          <h5 className="text-black ms-3">Skills</h5>
          {skillsData.map((skill, index) => (
            <div className="d-flex my-2 ms-3" key={index}>
              <input
                className="col-10"
                type="text"
                // value={skills[index]}
                value={skill}
                // onChange={(e) => {
                //   const updatedSkills = [...skill];
                //   updatedSkills[index] = e.target.value;
                // }}
                // onChange={(e) => handleChange(e, index)}
                onChange={(e) => handleChange(e.target.value, index)}
              />
              <button
                className="btn col-1 border-0"
                style={{ backgroundColor: "transparent", color: "#1b3f6b" , fontSize:"20px"}}
                type="button"
                onClick={() => removeSkillField(index)}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          ))}
          <div className="d-flex justify-content-end ">

            <button
              type="button"
              className="col-1 border-0 add-skill-cv"
              style={{ backgroundColor: "transparent", color: "#1b3f6b" }}
              onClick={addSkillField}
            >
              <FontAwesomeIcon
                className="rounded-circle p-1"
                style={{ border: "3px solid #1b3f6b" }}
                icon={faPlus}
              />
            </button>
          </div>
        </form>
        <Cv />
      </div>
      <div className="container btns-form-part">
        <div className="row my-3">
          <div className="col-12 col-lg-2 mb-3 mb-lg-0">
            <button
              type="submit"
              onClick={() => (handleSubmit(), Navigate("/CV/Form4"))}
              className="btn  text-white btn-gold-hover w-100 btn-back-cv"
            >
              Continue
            </button>
          </div>
          <div className="col-12 col-lg-2 order-lg-first">
            {/* to make continue btn appear first in md sm screens */}
            <button
              type="button"
              onClick={() => Navigate("/CV/Form2")}
              className="btn btn-secondary text-white me-3 mb-3 mb-lg-0 w-100 btn-back-cv"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CvPage3