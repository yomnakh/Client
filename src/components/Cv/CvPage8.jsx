import React from 'react'
import Cv from './Cv'
import { useNavigate } from 'react-router-dom'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik'
import "./Cv.css";


function CvPage8() {
    const Navigate = useNavigate()
      const [loader, setLoader] = useState(false);

  const downloadPDF = () =>{
    const capture = document.querySelector('.CVPage');
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    })
  }
  const initialValues = {
    URL: [{ id: 1, websiteName: "", url: "" }],
  }
  
  const HandleForm = (values)=> {

    const HandleForm = values.map((value) => {
      return {
        websiteName: value.websiteName,
        url: value.url,
      };
    })
    return HandleForm
  }
const onSubmit = (values) => {
  const  valuesForm = HandleForm(values.URL)
    const OldData = localStorage.getItem("CvData");
    localStorage.setItem("CvData", { ...OldData, URL:valuesForm });
}
  const formik = useFormik({
    initialValues,
    onSubmit
  });

  const addForm = () => {
    const newId = formik.values.URL[formik.values.URL.length - 1].id + 1;
    formik.setValues({
      ...formik.values,
      URL: [...formik.values.URL, { id: newId, websiteName: "", url: "" }],
    });
  };

  const deleteForm = (id) => {
    const updatedForms = formik.values.URL.filter((form) => form.id !== id);
    formik.setValues({ ...formik.values, URL: updatedForms });
  };
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
        <div className="col d-flex align-items-center" onClick={()=> Navigate('/CV/Form4')}>
            <div className="btn-golden-border me-3 bg-warning">4</div>
            <span className="text-uppercase">Experience</span>
        </div>
        <div className="col d-flex align-items-center" onClick={()=> Navigate('/CV/Form5')}>
            <div className="btn-golden-border me-3 bg-warning">5</div>
            <span className="text-uppercase">education</span>
        </div>
        <div className="col d-flex align-items-center" onClick={()=> Navigate('/CV/Form6')}>
            <div className="btn-golden-border me-3 bg-warning">6</div>
            <span className="text-uppercase">Honers & Awards</span>
        </div>
        <div className="col d-flex align-items-center" onClick={()=> Navigate('/CV/Form7')}>
            <div className="btn-golden-border me-3 bg-warning">7</div>
            <span className="text-uppercase">Hobbies & Interest</span>
        </div>
        <div className="col d-flex align-items-center" onClick={()=> Navigate('/CV/Form8')}>
            <div className="btn-golden-border me-3 bg-warning">8</div>
            <span className="text-uppercase">Links</span>
        </div>
    </div>
</div>
<div className="container px-4 py-4 background-transparent rounded d-block d-lg-none">
<div className="row">
    <div className="col d-flex align-items-center" onClick={()=> Navigate('/CV/Form7')}>
        <div className="btn-golden-border me-3 bg-warning">7</div>
        <span className="text-uppercase">Hobbies & interests</span>
    </div>
    <div className="col d-flex align-items-center" onClick={()=> Navigate('/CV/Form8')}>
        <div className="btn-golden-border me-3 bg-warning">8</div>
        <span className="text-uppercase">Links</span>
    </div>
</div>
</div>
    <div className="container mt-4 px-4 py-4 background-transparent rounded form-container d-lg-flex">
    
    <form  className="col-12 col-lg-4 me-lg-5">
      <p>Links</p>
      {formik.values.URL.map((form, index) => (
        <div key={form.id} className="d-lg-flex p-2">
          <div className="form-group col-12 col-lg-4">
            <label className="d-block mb-2" htmlFor={`websiteName-${index}`}>
              Website Name
            </label>
            <input 
              type="text"
              id={`websiteName-${index}`}
              name={`URL[${index}].websiteName`}
              value={formik.values.URL[index].websiteName}
              onChange={formik.handleChange}
              onBlur={formik.handleSubmit}
              className="col-12"
              onInput={formik.handleSubmit}
            />
          </div>
          <div className="form-group col-12 col-lg-7">
            <label className="d-block mb-2 ms-lg-4" htmlFor={`url-${index}`}>
              URL
            </label>
            <input 
              type="text"
              id={`url-${index}`}
              name={`URL[${index}].url`}
              value={formik.values.URL[index].url}
              onChange={formik.handleChange}
              onBlur={formik.handleSubmit}
              onInput={formik.handleSubmit}
              className="col-11 ms-4"
            />
          </div>
          <button
            type="button"
            className="border-0 mt-4 ms-2 pt-2"
            style={{ backgroundColor: "transparent", color: "#BF9B30" }}
            onClick={() => deleteForm(form.id)}
          >
            <FontAwesomeIcon className="fs-5" icon={faTrashCan} />
          </button>
        </div>
      ))}

      <button
        type="button"
        className="me-2 pe-1 border-0"
        style={{ backgroundColor: "transparent", color: "#BF9B30" }}
        onClick={addForm}
      >
        <FontAwesomeIcon
          className="rounded-circle p-1"
          style={{ border: "2px solid #BF9B30" }}
          icon={faPlus}
        />
      </button>

    </form>   
         <Cv/>
    </div>
    <div className="container btns-form-part">
            <div className="d-lg-flex justify-content-between  my-3">
                <div className="col-12 col-lg-2 mb-3 mb-lg-0">
                    <button onClick={downloadPDF} type='button' className="btn bg-gold text-white text-uppercase btn-gold-hover py-3 w-100">{loader == false ? 'Download' : 'Downloading'}</button>
                </div>
                <div className="col-12 col-lg-2 order-lg-first">{/* to make continue btn appear first in md sm screens */}
                <button type="button" onClick={()=> Navigate(-1)} className="btn btn-secondary text-white text-uppercase me-3 py-3 mb-3 mb-lg-0 w-100">Back</button>
            </div>
        </div>
</div>
</div>
)
}

export default CvPage8