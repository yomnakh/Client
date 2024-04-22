import Cv from './Cv'
import img from '../../Assets/404 Page.jpg'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useState } from 'react'
import './Cv.css'


function CvPage1() {
    const Navigate = useNavigate()
    const [image, setImage] = useState('')

    const handleSubmit = (values) => {
      const OldData = localStorage.getItem('CvData')
      localStorage.setItem( 'CvData',JSON.stringify({...OldData,...values, image}) )
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
            <p className="col-lg-12 col-lg-5">Here you can create your CV by answering question and getting it
                ready for download or applying to jobs through the platform.
            </p>
        </div>
    </div>
    {/* End big title */}

    {/* Start categories */}
    <div className="container px-4 py-4 background-transparent rounded d-none d-lg-block">
        <div className="row">
            <div className="col d-flex align-items-center" onClick={()=>Navigate('/CV')} >
                <div className="btn-golden-border me-3 bg-warning">1</div>
                <span className="text-uppercase">main information</span>
            </div>
            <div className="col d-flex align-items-center" onClick={()=>Navigate('/CV/Form2')}>
                <div className="btn-golden-border me-3 ">2</div>
                <span className="text-uppercase">about</span>
            </div>
            <div className="col d-flex align-items-center" onClick={()=>Navigate('/CV/Form3')}>
                <div className="btn-golden-border me-3">3</div>
                <span className="text-uppercase">skills</span>
            </div>
            <div className="col d-flex align-items-center" onClick={()=>Navigate('/CV/Form4')}>
                <div className="btn-golden-border me-3">4</div>
                <span className="text-uppercase">experience</span>
            </div>
            <div className="col d-flex align-items-center" onClick={()=>Navigate('/CV/Form5')}>
                <div className="btn-golden-border me-3">5</div>
                <span className="text-uppercase">education</span>
            </div>
        </div>
    </div>
    <div className="container px-4 py-4 background-transparent rounded d-block d-lg-none">
    <div className="row">
        <div className="col d-flex align-items-center" onClick={()=>Navigate('/CV')}>
            <div className="btn-golden-border me-3 bg-warning" >1</div>
            <span className="text-uppercase">main information</span>
        </div>
        <div className="col d-flex align-items-center" onClick={()=>Navigate('/CV/Form2')}>
            <div className="btn-golden-border me-3 ">2</div>
            <span className="text-uppercase">about</span>
        </div>
    </div>
    </div>

    <div className="container mt-4 px-4 py-4 background-transparent rounded form-container d-flex">
    
    <form className="col-12 col-lg-4 me-lg-5" >
    <div className="row">
      <div className="col-md col-lg me-3">
        <label for="firstName" className="mb-3">
          First Name
        </label>
        <input
          type="text"
          className="form-control px-3 py-2"
          id="firstName"
          placeholder="Enter your first name"
          name="fName"
          value={formik.values.fName}
          onChange={formik.handleChange}
        />
      </div>
      <div className="col-md col-lg">
        <label for="lastName" className="mb-3 mt-3 mt-lg-0">
          Last Name
        </label>
        <input
          type="text"
          className="form-control px-3 py-2"
          id="lastName"
          placeholder="Enter your last name"
          name="lName"
          value={formik.values.lName}
          onChange={formik.handleChange}
        />
      </div>
    </div>

    <div className="row mt-3">
      <div className="col-md col-lg me-3">
        <label for="profession" className="mb-3">
          Profession
        </label>
        <input
          type="text"
          className="form-control px-3 py-2"
          id="profession"
          placeholder="Enter your profession"
          name="profession"
          value={formik.values.profession}
          onChange={formik.handleChange}
        />
      </div>
      <div className="col-md col-lg">
        <label for="country" className="mb-3 mt-3 mt-lg-0">
          Country
        </label>
        <input
          type="text"
          className="form-control px-3 py-2"
          id="country"
          placeholder="Enter your country"
          name="country"
          value={formik.values.country}
          onChange={formik.handleChange}
        />
      </div>
    </div>

    <div className="row mt-3">
      <div className="col-md col-lg me-3">
        <label for="city" className="mb-3">
          City
        </label>
        <input
          type="text"
          className="form-control px-3 py-2"
          id="city"
          placeholder="Enter your city"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
        />
      </div>
      <div className="col-md col-lg-8">
        <label for="phone" className="mb-3 mt-3 mt-lg-0">
          Mobile Number
        </label>
        <br />
        <input
          type="tel"
          className="form-control px-5 py-2"
          id="phone"
          placeholder="Enter your mobile number"
          name="mobileNumber"
          value={formik.values.mobileNumber}
          onChange={formik.handleChange}
        />
      </div>
    </div>

    <div className="row mt-3">
      <div className="col-md col-lg">
        <label for="email" className="mb-3">
          Email
        </label>
        <input
          type="email"
          className="form-control px-3 py-2"
          id="email"
          placeholder="Enter your email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
    </div>

    <div className="row mt-3">
      <div className="col-6">
        <label for="personalPhoto" className="d-none d-lg-block">
          Personal Photo
        </label>
        <label for="personalPhoto" className="d-lg-none">
          Upload CV
        </label>
      </div>
    </div>

    <div className="row mt-3">
      <div className="col golden-dashed-border d-flex flex-column align-items-center py-5">
        <img src={img} alt="" width="80px" />
        <p className="fw-bold mt-3">
          Drag & drop files or
          <label
            for="personalPhoto"
            id="fileLink"
            className="gold-txt browse-txt"
          >
            Browse
          </label>
          <input type="file" style={{ display: "none" }} onChange={(e)=>setImage(URL.createObjectURL(e.currentTarget.files[0]))} id="personalPhoto" />
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
        <button type="submit" onClick={ () => (formik.handleSubmit(), Navigate('/CV/Form2'))} className="btn bg-gold text-white text-uppercase btn-gold-hover py-3 w-100">Continue</button>
    </div>
    <div className="col-12 col-lg-2 order-lg-first">{/* to make continue btn appear first in md sm screens */}
    <button type="button" onClick={()=> Navigate('/')} className="btn btn-secondary text-white text-uppercase me-3 py-3 mb-3 mb-lg-0 w-100">Back</button>
</div>
</div>
</div>
</div>
)
}

export default CvPage1