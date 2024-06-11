import React ,{ useState } from 'react'
import Cv from './Cv'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import "./Cv.css";
import { setHobbies } from '../../redux/slices/cv.slice'

function CvPage7() {
    const Navigate= useNavigate()
    const dispatch = useDispatch();
  const hobbiesData = useSelector((state) => state.cv.hobbies);
  const [skillsArr, setSkillsArr] = useState([])

  const handleChange = (value, index) => {
    let temp = [...hobbiesData]
    temp[index] = value
    dispatch(setHobbies(temp));
  };
  
  const handleSubmit = () => {
    const OldData = localStorage.getItem('CvData');
    localStorage.setItem('CvData', { ...OldData, hobbies: hobbiesData });
    // You might want to dispatch an action to update profile data in Redux store

    Navigate('/CV/Form8'); // Navigate to the next form
  };
  const addHobbiesField = () => {
    dispatch(setHobbies([...hobbiesData, '']))
  };
  const removehobbiesField = (index) => {
    const updatedHobbies = hobbiesData.filter((_, i) => i !== index);
    dispatch(setHobbies(updatedHobbies));
  };
console.log(hobbiesData);

    const initialValues = {
        Hobbies: [""],
      };
    
      const onSubmit = (values) => {
        const OldData = localStorage.getItem("CvData");
        localStorage.setItem("CvData", { ...OldData, ...values });        
      };
    
      const formik = useFormik({
        initialValues,
        onSubmit,
      });
    
      const addHobbyField = () => {
        formik.setValues({
          ...formik.values,
          Hobbies: [...formik.values.Hobbies, ""],
        });
      };
    
      const removeHobbyField = (index) => {
        const updatedHobbies = formik.values.Hobbies.filter((_, i) => i !== index);
        formik.setValues({
          ...formik.values,
          Hobbies: updatedHobbies,
        });
      };
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
        <div className="col d-flex align-items-center" onClick={()=> Navigate('/CV/Form4')}>
            <div className="btn-golden-border me-3 createcv-active">4</div>
            <span className="text-uppercase">Experience</span>
        </div>
        <div className="col d-flex align-items-center" onClick={()=> Navigate('/CV/Form5')}>
            <div className="btn-golden-border me-3 createcv-active">5</div>
            <span className="text-uppercase">education</span>
        </div>
        <div className="col d-flex align-items-center" onClick={()=> Navigate('/CV/Form6')}>
            <div className="btn-golden-border me-3 createcv-active">6</div>
            <span className="text-uppercase">Honers & Awards</span>
        </div>
        <div className="col d-flex align-items-center" onClick={()=> Navigate('/CV/Form7')}>
            <div className="btn-golden-border me-3 createcv-active">7</div>
            <span className="text-uppercase">Hobbies & Interest</span>
        </div>
        <div className="col d-flex align-items-center" onClick={()=> Navigate('/CV/Form8')}>
            <div className="btn-golden-border me-3">8</div>
            <span className="text-uppercase">Links</span>
        </div>
    </div>
</div>
<div className="container px-4 py-4 background-transparent rounded d-block d-lg-none">
<div className="row">
    <div className="col d-flex align-items-center" onClick={()=> Navigate('/CV/Form7')}>
        <div className="btn-golden-border me-3 createcv-active">7</div>
        <span className="text-uppercase">Hobbies & interests</span>
    </div>
    <div className="col d-flex align-items-center" onClick={()=> Navigate('/CV/Form8')}>
        <div className="btn-golden-border me-3 ">8</div>
        <span className="text-uppercase">Links</span>
    </div>
</div>
</div>

    <div className="container mt-4 px-4 py-4 background-transparent rounded form-container d-flex">
    
    <form
    className="col-12 col-lg-4 me-lg-5"
    onSubmit={handleSubmit}
  >
    <h5 className="text-dark ms-3">Hobbies and interests</h5>
    {hobbiesData.map((hobby, index) => (
      <div className="d-flex my-2 ms-3" key={index}>
        <input
          className="col-10"
          type="text"
          value={hobby}
          // onChange={(e) => {
          //   const updatedSkills = [...formik.values.Hobbies];
          //   updatedSkills[index] = e.target.value;
          //   formik.setValues({
          //     ...formik.values,
          //     Hobbies: updatedSkills,
          //   });
          // }}
          onChange={(e) => handleChange(e.target.value, index)}
        />
        <button
          className="btn col-1 border-0"
          style={{ backgroundColor: "transparent", color: "#1b3f6b" }}
          type="button"
          onClick={() => removehobbiesField(index)}
        >
          <FontAwesomeIcon icon={faTrashCan } />
        </button>
      </div>
    ))}
    <div className="d-flex justify-content-end ">
      <button
        type="button"
        className="col-1 border-0 add-skill-cv"
        style={{ backgroundColor: "transparent", color: "#1b3f6b" }}
        onClick={addHobbiesField}
      >
        <FontAwesomeIcon
          className="rounded-circle p-1"
          style={{ border: "2px solid #1b3f6b" }}
          icon={faPlus}
        />
      </button>
    </div>
  </form>
        <Cv/>
    </div>
    <div className="container btns-form-part">
        <div className="row my-3">
          <div className="col-12 col-lg-2 mb-3 mb-lg-0">
            <button
              type="submit"
              onClick={() => (handleSubmit(), Navigate("/CV/Form8"))}
              className="btn  text-white btn-gold-hover w-100 btn-back-cv"
            >
              Continue
            </button>
          </div>
          <div className="col-12 col-lg-2 order-lg-first">
            {/* to make continue btn appear first in md sm screens */}
            <button
              type="button"
              onClick={() => Navigate("/CV/Form6")}
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

export default CvPage7