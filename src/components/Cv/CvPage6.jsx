import React from 'react'
import Cv from './Cv'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import "./Cv.css";


function CvPage6() {
    const Navigate = useNavigate()
    const initialValues = {
        Award: [
          {
            id: 1,
            inputs: [
              { id: 1, label: "Award Name", value: "", style: { width: "100%" } },
              { id: 2, label: "Year", value: "", style: { width: "100%" } },
              {
                id: 3,
                label: "Description",
                value: "",
                style: { width: "100%", height: "200px" },
              },
            ],
          },
        ],
      };
      const HandleForm = (values)=> {

        const HandleForm = values.map((value) => {
          return {
            AwardName: value.inputs[0].value,
            Year: value.inputs[1].value,
            Description: value.inputs[2].value,
          };
        })
        return HandleForm
      }
      const onSubmit = (values) => {
        const  valuesForm = HandleForm(values.Award)
          const OldData = localStorage.getItem('CvData')
          localStorage.setItem( 'CvData', {...OldData,Award:valuesForm})
      };
    
    
      const formik = useFormik({
        initialValues,
        onSubmit,
      });
    
      const addForm = () => {
        const newForm = {
          id: formik.values.Award.length + 1,
          inputs: initialValues.Award[0].inputs.map((input) => ({
            ...input,
            value: "",
          })),
        };
        formik.setValues({
          ...formik.values,
          Award: [...formik.values.Award, newForm],
        });
      };
    
      const removeForm = (id) => {
        const updatedForms = formik.values.Award.filter((form) => form.id !== id);
        formik.setValues({
          ...formik.values,
          Award: updatedForms,
        });
      };
    
      const handleInputChange = (formIndex, inputIndex, value) => {
        const updatedForms = [...formik.values.Award];
        updatedForms[formIndex].inputs[inputIndex].value = value;
        formik.setValues({
          ...formik.values,
          Award: updatedForms,
        })}
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
            <p className="col-lg-12 col-lg-5">Here you can create your CV by answering question and getting it ready for download or applying to jobs through the platform.
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
                <div className="btn-golden-border me-3">7</div>
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
        <div className="col d-flex align-items-center" onClick={()=> Navigate('/CV/Form6')}>
            <div className="btn-golden-border me-3 createcv-active">6</div>
            <span className="text-uppercase">Honers & Awards</span>
        </div>
        <div className="col d-flex align-items-center" onClick={()=> Navigate('/CV/Form7')}>
            <div className="btn-golden-border me-3 ">7</div>
            <span className="text-uppercase">Hobbies & interests</span>
        </div>
    </div>
    </div>
    <div className="container mt-4 px-4 py-4 background-transparent rounded form-container d-flex">
        
    <form   className="col-12 col-lg-4 me-lg-5">
    <h3>Honers & awards</h3>
    {formik.values.Award.map((form, formIndex) => (
      <div 
        key={form.id}
        className="rounded-3 p-3  text-dark my-3"
        style={{ border: "2px dashed #1b3f6b" }}
      >
        {form.inputs.map((input, inputIndex) => (
          <div key={input.id} style={{ marginBottom: "10px" }}>
            <h5 htmlFor={`Award.${formIndex}.inputs.${inputIndex}.value`}>
              {input.label}
            </h5>
            {input.label == 'Description'?<textarea
            type="text"
            id={`Award.${formIndex}.inputs.${inputIndex}.value`}
            value={input.value}
            onChange={(e) =>
              handleInputChange(formIndex, inputIndex, e.target.value)
            }
            style={input.style}
          />:
            <input
              type="text"
              id={`Award.${formIndex}.inputs.${inputIndex}.value`}
              value={input.value}
              onChange={(e) =>
                handleInputChange(formIndex, inputIndex, e.target.value)
              }
              style={input.style}
            />}
          </div>
        ))}
        <div className="col-12 pt-2 border-0 d-flex justify-content-end">
          <button
            type="button"
            className="border-0"
            style={{ backgroundColor: "transparent", color: "#1b3f6b" }}
            onClick={() => removeForm(form.id)}
          >
            <FontAwesomeIcon className="fs-5" icon={faTrashCan} />
          </button>
        </div>
      </div>
    ))}
    <div className="col-12 pt-2 border-0 ">
      <button
        // type="button"
        className=" pe-1 border-0 add-experience-cv"
        style={{ backgroundColor: "transparent", color: "#1b3f6b" }}
        onClick={addForm}
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
              onClick={() => (formik.handleSubmit(), Navigate("/CV/Form7"))}
              className="btn  text-white btn-gold-hover w-100 btn-back-cv"
            >
              Continue
            </button>
          </div>
          <div className="col-12 col-lg-2 order-lg-first">
            {/* to make continue btn appear first in md sm screens */}
            <button
              type="button"
              onClick={() => Navigate("/CV/Form5")}
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

export default CvPage6