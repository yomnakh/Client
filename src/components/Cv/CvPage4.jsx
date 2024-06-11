import React, { useRef } from "react";
import Cv from "./Cv";
import { useNavigate } from "react-router-dom";
import imgD from "../../Assets/AboutImage.jpg";
import img from "../../Assets/404 Page.jpg";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Cv.css";
import { setExperience } from "../../redux/slices/cv.slice";

function CvPage4() {
  const Navigate = useNavigate();
  const [image, setImage] = useState("");
  const initialValues = {
    forms: [
      {
        id: 1,
        inputs: [
          { id: 1, label: "Company Name", value: "", style: { width: "100%" } },
          { id: 2, label: "Position", value: "", style: { width: "100%" } },
          {
            id: 3,
            label: "From",
            value: "",
            style: { width: "100%" },
          },
          {
            id: 4,
            label: "To",
            value: "",
            style: { width: "100%" },
          },
          {
            id: 5,
            label: "Description",
            value: "",
            style: { width: "100%", height: "200px" },
          },
        ],
      },
    ],
  };
  const HandleForm = (values) => {
    const HandleForm = values.map((value) => {
      return {
        CompanyName: value.inputs[0].value,
        Position: value.inputs[1].value,
        From: value.inputs[2].value,
        to: value.inputs[3].value,
        Description: value.inputs[4].value,
        image,
      };
    });
    return HandleForm;
  };
  const onSubmit = (values) => {
    const valuesForm = HandleForm(values.forms);
    const OldData = localStorage.getItem("CvData");
    localStorage.setItem("CvData", { ...OldData, Experiences: valuesForm });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  const refImage = useRef()

  const dispatch = useDispatch();
  const experienceData = useSelector((state) => state.cv.experience);

  function uploadFile(e) {
    let image = e.target.files[0]
    dispatch(setExperience({ ...experienceData, image }));
  }
  const addForm = () => {
    const newForm = {
      id: formik.values.forms.length + 1,
      inputs: initialValues.forms[0].inputs.map((input) => ({
        ...input,
        value: "",
      })),
    };
    formik.setValues({
      ...formik.values,
      forms: [...formik.values.forms, newForm],
    });
  };

  const removeForm = (id) => {
    const updatedForms = formik.values.forms.filter((form) => form.id !== id);
    formik.setValues({
      ...formik.values,
      forms: updatedForms,
    });
  };

  const handleInputChange = (formIndex, inputIndex, value) => {
    const updatedForms = [...formik.values.forms];
    updatedForms[formIndex].inputs[inputIndex].value = value;
    formik.setValues({
      ...formik.values,
      forms: updatedForms,
    });
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
            onClick={() => Navigate("/CV/Form2")}
          >
            <div className="btn-golden-border me-3 createcv-active">2</div>
            <span className="text-uppercase">about</span>
          </div>
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV/Form3")}
          >
            <div className="btn-golden-border me-3 createcv-active">3</div>
            <span className="text-uppercase">skills</span>
          </div>
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV/Form4")}
          >
            <div className="btn-golden-border me-3 createcv-active">4</div>
            <span className="text-uppercase">experience</span>
          </div>
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV/Form5")}
          >
            <div className="btn-golden-border me-3">5</div>
            <span className="text-uppercase">education</span>
          </div>
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV/Form6")}
          >
            <div className="btn-golden-border me-3">6</div>
            <span className="text-uppercase">Honers & Awards</span>
          </div>
        </div>
      </div>
      <div className="container px-4 py-4 background-transparent rounded d-block d-lg-none">
        <div className="row">
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV/Form4")}
          >
            <div className="btn-golden-border me-3 bg-warning">4</div>
            <span className="text-uppercase">Experience</span>
          </div>
          <div
            className="col d-flex align-items-center"
            onClick={() => Navigate("/CV/Form5")}
          >
            <div className="btn-golden-border me-3 ">5</div>
            <span className="text-uppercase">education</span>
          </div>
        </div>
      </div>

      <div className="container mt-4 px-4 py-4 background-transparent rounded form-container d-flex">
        <form
          onSubmit={formik.handleSubmit}
          className="col-12 col-lg-4  me-lg-5"
        >
          <h3>Experience</h3>
          {formik.values.forms.map((form, formIndex) => (
            <div
              key={form.id}
              className="rounded-3 p-3 mt-1 mb-5 text-dark"
              style={{ border: "2px dashed  #1b3f6b" }}
            >
              {form.inputs.map((input, inputIndex) => (
                <div key={input.id} style={{ marginBottom: "10px" }}>
                  <h5 htmlFor={`forms.${formIndex}.inputs.${inputIndex}.value`}>
                    {input.label}
                  </h5>
                  {input.label == "Description" ? (
                    <textarea
                      type="text"
                      id={`forms.${formIndex}.inputs.${inputIndex}.value`}
                      value={input.value}
                      onChange={(e) =>
                        handleInputChange(formIndex, inputIndex, e.target.value)
                      }
                      style={input.style}
                    />
                  ) : (
                    <input
                      type="text"
                      id={`forms.${formIndex}.inputs.${inputIndex}.value`}
                      value={input.value}
                      onChange={(e) =>
                        handleInputChange(formIndex, inputIndex, e.target.value)
                      }
                      style={input.style}
                    />
                  )}
                </div>
              ))}
              <div className="col-12 col-lg-12 mt-3 m-auto me-xl-1">
                <p className="text-dark h4">Company Logo</p>
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
              </div>

              <div className="col-12 pt-2 border-0 d-flex justify-content-end">
                <button
                  type="button"
                  className="border-0"
                  style={{ backgroundColor: "transparent", color: " #1b3f6b" }}
                  onClick={() => removeForm(form.id)}
                >
                  <FontAwesomeIcon className="fs-5" icon={faTrashCan} />
                </button>
              </div>
            </div>
          ))}
          <div className="col-12 pt-2 border-0 d-flex justify-content-end">
            <button
              type="button"
              className=" pe-1 border-0 add-experience-cv"
              style={{ backgroundColor: "transparent", color: " #1b3f6b" , marginTop: "-114px"
             ,marginRight: "50px" }}
              onClick={addForm}
            >
              <FontAwesomeIcon
                className="rounded-circle p-1"
                style={{ border: "2px solid  #1b3f6b" }}
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
              onClick={() => (formik.handleSubmit(), Navigate("/CV/Form5"))}
              className="btn  text-white btn-gold-hover w-100 btn-back-cv"
            >
              Continue
            </button>
          </div>
          <div className="col-12 col-lg-2 order-lg-first">
            {/* to make continue btn appear first in md sm screens */}
            <button
              type="button"
              onClick={() => Navigate("/CV/Form3")}
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

export default CvPage4;
// import React from "react";
// import Cv from "./Cv";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setExperience } from "../../redux/slices/cv.slice";
// import imgD from "../../Assets/AboutImage.jpg";
// import { useFormik } from "formik";
// import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
// import "./Cv.css";

// function CvPage4() {
//   const Navigate = useNavigate();
//   const dispatch = useDispatch();
//   const experienceData = useSelector((state) => state.cv.experience);
//   const [experienceArr, setexperienceArr] = useState([]);
//   const [image, setImage] = useState("");
//   const handleChange = (value, index) => {
//     let temp = [...experienceData];
//     temp[index] = value;
//     dispatch(setExperience(temp));
//   };
//   const handleSubmit = () => {
//     const OldData = localStorage.getItem("CvData");
//     localStorage.setItem("CvData", { ...OldData, Experiences: experienceData });
//     // You might want to dispatch an action to update profile data in Redux store

//     Navigate("/CV/Form5"); // Navigate to the next form
//   };
//   const addExperienceField = () => {
//     dispatch(setExperience([...experienceData, ""]));
//   };
//   const removeExperienceField = (index) => {
//     const updatedExperience = experienceData.filter((_, i) => i !== index);
//     dispatch(setExperience(updatedExperience));
//   };
//   console.log(experienceData);
//   const initialValues = {
//     forms: [
//       {
//         id: 1,
//         inputs: [
//           { id: 1, label: "Company Name", value: "", style: { width: "100%" } },
//           { id: 2, label: "Position", value: "", style: { width: "100%" } },
//           {
//             id: 3,
//             label: "From",
//             value: "",
//             style: { width: "100%" },
//           },
//           {
//             id: 4,
//             label: "To",
//             value: "",
//             style: { width: "100%" },
//           },
//           {
//             id: 5,
//             label: "Description",
//             value: "",
//             style: { width: "100%", height: "200px" },
//           },
//         ],
//       },
//     ],
//   };
//   const HandleForm = (values) => {
//     const HandleForm = values.map((value) => {
//       return {
//         CompanyName: value.inputs[0].value,
//         Position: value.inputs[1].value,
//         From: value.inputs[2].value,
//         to: value.inputs[3].value,
//         Description: value.inputs[4].value,
//         image,
//       };
//     });
//     return HandleForm;
//   };
//   const onSubmit = (values) => {
//     const valuesForm = HandleForm(values.forms);
//     const OldData = localStorage.getItem("CvData");
//     localStorage.setItem("CvData", { ...OldData, Experiences: valuesForm });
//   };
//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//   });

//   const addForm = () => {
//     const newForm = {
//       id: formik.values.forms.length + 1,
//       inputs: initialValues.forms[0].inputs.map((input) => ({
//         ...input,
//         value: "",
//       })),
//     };
//     formik.setValues({
//       ...formik.values,
//       forms: [...formik.values.forms, newForm],
//     });
//   };

//   const removeForm = (id) => {
//     const updatedForms = formik.values.forms.filter((form) => form.id !== id);
//     formik.setValues({
//       ...formik.values,
//       forms: updatedForms,
//     });
//   };

//   const handleInputChange = (formIndex, inputIndex, value) => {
//     const updatedForms = [...formik.values.forms];
//     updatedForms[formIndex].inputs[inputIndex].value = value;
//     formik.setValues({
//       ...formik.values,
//       forms: updatedForms,
//     });
//   };
//   return (
//     <div>
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <p className="my-2">Create CV</p>
//             <div className="gold-border"></div>
//             <p className="pt-2">6th June 2023</p>
//           </div>
//         </div>
//       </div>
//       {/* End small title */}

//       {/* Start big title */}
//       <div className="container pt-4">
//         <div className="row">
//           <h2>Customize your cv</h2>
//           <p className="col-lg-12 col-lg-5">
//             Here you can create your CV by answering question and getting it
//             ready for download or applying to jobs through the platform.
//           </p>
//         </div>
//       </div>
//       {/* End big title */}

//       {/* Start categories */}
//       <div className="container px-4 py-4 background-transparent rounded d-none d-lg-block">
//         <div className="row">
//           <div
//             className="col d-flex align-items-center"
//             onClick={() => Navigate("/CV/Form2")}
//           >
//             <div className="btn-golden-border me-3 createcv-active">2</div>
//             <span className="text-uppercase">about</span>
//           </div>
//           <div
//             className="col d-flex align-items-center"
//             onClick={() => Navigate("/CV/Form3")}
//           >
//             <div className="btn-golden-border me-3 createcv-active ">3</div>
//             <span className="text-uppercase">skills</span>
//           </div>
//           <div
//             className="col d-flex align-items-center"
//             onClick={() => Navigate("/CV/Form4")}
//           >
//             <div className="btn-golden-border me-3 createcv-active">4</div>
//             <span className="text-uppercase">experience</span>
//           </div>
//           <div
//             className="col d-flex align-items-center"
//             onClick={() => Navigate("/CV/Form5")}
//           >
//             <div className="btn-golden-border me-3">5</div>
//             <span className="text-uppercase">education</span>
//           </div>
//           <div
//             className="col d-flex align-items-center"
//             onClick={() => Navigate("/CV/Form6")}
//           >
//             <div className="btn-golden-border me-3">6</div>
//             <span className="text-uppercase">Honers & Awards</span>
//           </div>
//         </div>
//       </div>
//       <div className="container px-4 py-4 background-transparent rounded d-block d-lg-none">
//         <div className="row">
//           <div
//             className="col d-flex align-items-center"
//             onClick={() => Navigate("/CV/Form4")}
//           >
//             <div className="btn-golden-border me-3 createcv-active">4</div>
//             <span className="text-uppercase">Experience</span>
//           </div>
//           <div
//             className="col d-flex align-items-center"
//             onClick={() => Navigate("/CV/Form5")}
//           >
//             <div className="btn-golden-border me-3 ">5</div>
//             <span className="text-uppercase">education</span>
//           </div>
//         </div>
//       </div>

//       <div className="container mt-4 px-4 py-4 background-transparent rounded form-container d-flex">
//         <form onSubmit={handleSubmit} className="col-12 col-lg-4  me-lg-5">
//           <h3>Experience</h3>
//           {experienceData.map((formIndex, form) => (
//             <div
//               key={form.id}
//               className="rounded-3 p-3 mt-1 mb-5 bg-black text-white"
//               style={{ border: "2px dashed #BF9B30" }}
//             >
//               {experienceData.map((input, inputIndex) => (
//                 <div key={input.id} style={{ marginBottom: "10px" }}>
//                   <h5 htmlFor={`forms.${formIndex}.inputs.${inputIndex}.value`}>
//                     {input.label}
//                   </h5>
//                   {input.label == "Description" ? (
//                     <textarea
//                       type="text"
//                       id={`forms.${formIndex}.inputs.${inputIndex}.value`}
//                       value={input.value}
//                       onChange={(e) =>
//                         handleInputChange(formIndex, inputIndex, e.target.value)
//                       }
//                       style={input.style}
//                     />
//                   ) : (
//                     <input
//                       type="text"
//                       id={`forms.${formIndex}.inputs.${inputIndex}.value`}
//                       value={input.value}
//                       onChange={(e) =>
//                         handleInputChange(formIndex, inputIndex, e.target.value)
//                       }
//                       style={input.style}
//                     />
//                   )}
//                 </div>
//               ))}
//               <div className="col-12 col-lg-12 mt-3 m-auto me-xl-1">
//                 <p className="text-light h4">Company Logo</p>
//                 <div
//                   className="d-flex flex-column rounded-3 mt-4 bg-black bg-opacity-50 align-items-center py-3 py-lg-5 px-5"
//                   style={{ border: "2px dashed #BF9B30" }}
//                 >
//                   <img src={imgD} alt="" width="80px" />
//                   <p className="fw-bold mt-3 text-white">
//                     Drag & drop files or
//                     <label
//                       for="personalPhoto"
//                       id="fileLink"
//                       className="gold-txt browse-txt ms-1"
//                       style={{ color: "#BF9B30", cursor: "pointer" }}
//                     >
//                       Browse
//                     </label>
//                     <input
//                       type="file"
//                       style={{ display: "none" }}
//                       id="personalPhoto"
//                       onChange={(e) =>
//                         setImage(URL.createObjectURL(e.currentTarget.files[0]))
//                       }
//                     />
//                   </p>
//                   <p className="text-secondary small-txt">
//                     Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word,
//                     PPT
//                   </p>
//                 </div>
//               </div>

//               <div className="col-12 pt-2 border-0 d-flex justify-content-end">
//                 <button
//                   type="button"
//                   className="border-0"
//                   style={{ backgroundColor: "transparent", color: "#BF9B30" }}
//                   onClick={() => removeForm(form.id)}
//                 >
//                   <FontAwesomeIcon className="fs-5" icon={faTrashCan} />
//                 </button>
//               </div>
//             </div>
//           ))}
//           <div className="col-12 pt-2 border-0 d-flex justify-content-end">
//             <button
//               type="button"
//               className="me-2 pe-1 border-0"
//               style={{ backgroundColor: "transparent", color: "#BF9B30" }}
//               onClick={addForm}
//             >
//               <FontAwesomeIcon
//                 className="rounded-circle p-1"
//                 style={{ border: "2px solid #BF9B30" }}
//                 icon={faPlus}
//               />
//             </button>
//           </div>
//         </form>
//         <Cv />
//       </div>
//       <div className="container btns-form-part">
//         <div className="row my-3">
//           <div className="col-12 col-lg-2 mb-3 mb-lg-0">
//             <button
//               type="submit"
//               onClick={() => (formik.handleSubmit(), Navigate("/CV/Form5"))}
//               className="btn bg-gold text-white text-uppercase btn-gold-hover py-3 w-100"
//             >
//               Continue
//             </button>
//           </div>
//           <div className="col-12 col-lg-2 order-lg-first">
//             {/* to make continue btn appear first in md sm screens */}
//             <button
//               type="button"
//               onClick={() => Navigate(-1)}
//               className="btn btn-secondary text-white text-uppercase me-3 py-3 mb-3 mb-lg-0 w-100"
//             >
//               Back
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CvPage4;

// import React from "react";
// import Cv from "./Cv";
// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setExperience } from "../../redux/slices/cv.slice";
// import imgD from "../../Assets/AboutImage.jpg";
// import "./Cv.css";

// function CvPage4() {
//   const Navigate = useNavigate();
//   const dispatch = useDispatch();
//   const experienceData = useSelector((state) => state.cv.experience);
//   const [image, setImage] = useState('');

//   const handleSubmit = () => {
//     const OldData = localStorage.getItem('CvData');
//     localStorage.setItem('CvData', { ...OldData, Experiences: experienceData });
//     // You might want to dispatch an action to update profile data in Redux store

//     Navigate('/CV/Form4'); // Navigate to the next form
//   };

//   const initialValues = {
//     forms: experienceData.length ? experienceData : [
//       {
//         id: 1,
//         inputs: [
//           { id: 1, label: "Company Name", value: "", style: { width: "100%" } },
//           { id: 2, label: "Position", value: "", style: { width: "100%" } },
//           { id: 3, label: "From", value: "", style: { width: "100%" } },
//           { id: 4, label: "To", value: "", style: { width: "100%" } },
//           { id: 5, label: "Description", value: "", style: { width: "100%", height: "200px" } },
//         ],
//       },
//     ],
//   };

//   const handleFormChange = (formIndex, inputIndex, value) => {
//     const updatedForms = [...formik.values.forms];
//     updatedForms[formIndex].inputs[inputIndex].value = value;
//     formik.setValues({ ...formik.values, forms: updatedForms });
//     dispatch(setExperience(updatedForms));
//   };

//   const handleFormSubmit = (values) => {
//     const valuesForm = values.forms.map((form) => ({
//       CompanyName: form.inputs[0].value,
//       Position: form.inputs[1].value,
//       From: form.inputs[2].value,
//       To: form.inputs[3].value,
//       Description: form.inputs[4].value,
//       image,
//     }));
//     const oldData = JSON.parse(localStorage.getItem('CvData')) || {};
//     localStorage.setItem('CvData', JSON.stringify({ ...oldData, Experiences: valuesForm }));
//   };

//   const formik = useFormik({
//     initialValues,
//     onSubmit: handleFormSubmit,
//   });

//   const addForm = () => {
//     const newForm = {
//       id: formik.values.forms.length + 1,
//       inputs: initialValues.forms[0].inputs.map((input) => ({ ...input, value: "" })),
//     };
//     formik.setValues({ ...formik.values, forms: [...formik.values.forms, newForm] });
//   };

//   const removeForm = (id) => {
//     const updatedForms = formik.values.forms.filter((form) => form.id !== id);
//     formik.setValues({ ...formik.values, forms: updatedForms });
//     dispatch(setExperience(updatedForms));
//   };

//   return (
//     <div style={{marginTop:"100px"}}>
//       <div className="container">
//         <div className="row">
//         </div>
//       </div>
//       <div className="container pt-4">
//         <div className="row">
//           <h2>Customize your CV</h2>
//           <p className="col-lg-12 col-lg-5">
//             Here you can create your CV by answering questions and getting it
//             ready for download or applying to jobs through the platform.
//           </p>
//         </div>
//       </div>
//       <div className="container px-4 py-4 background-transparent rounded d-none d-lg-block">
//         <div className="row">
//           <div className="col d-flex align-items-center" onClick={() => Navigate("/CV/Form2")}>
//             <div className="btn-golden-border me-3 createcv-active">2</div>
//             <span className="text-uppercase">About</span>
//           </div>
//           <div className="col d-flex align-items-center" onClick={() => Navigate("/CV/Form3")}>
//             <div className="btn-golden-border me-3 createcv-active">3</div>
//             <span className="text-uppercase">Skills</span>
//           </div>
//           <div className="col d-flex align-items-center" onClick={() => Navigate("/CV/Form4")}>
//             <div className="btn-golden-border me-3 createcv-active">4</div>
//             <span className="text-uppercase">Experience</span>
//           </div>
//           <div className="col d-flex align-items-center" onClick={() => Navigate("/CV/Form5")}>
//             <div className="btn-golden-border me-3">5</div>
//             <span className="text-uppercase">Education</span>
//           </div>
//           <div className="col d-flex align-items-center" onClick={() => Navigate("/CV/Form6")}>
//             <div className="btn-golden-border me-3">6</div>
//             <span className="text-uppercase">Honors & Awards</span>
//           </div>
//         </div>
//       </div>
//       <div className="container px-4 py-4 background-transparent rounded d-block d-lg-none">
//         <div className="row">
//           <div className="col d-flex align-items-center" onClick={() => Navigate("/CV/Form4")}>
//             <div className="btn-golden-border me-3 createcv-active">4</div>
//             <span className="text-uppercase">Experience</span>
//           </div>
//           <div className="col d-flex align-items-center" onClick={() => Navigate("/CV/Form5")}>
//             <div className="btn-golden-border me-3">5</div>
//             <span className="text-uppercase">Education</span>
//           </div>
//         </div>
//       </div>

//       <div className="container mt-4 px-4 py-4 background-transparent rounded form-container d-flex">
//         <form onSubmit={handleSubmit} className="col-12 col-lg-4 me-lg-5">
//           <h3>Experience</h3>
//           {experienceData.map((form, formIndex) => (
//             <div key={form.id} className="rounded-3 p-3 mt-1 mb-5 bg-black text-white" style={{ border: "2px dashed #BF9B30" }}>
//               {form.inputs.map((input, inputIndex) => (
//                 <div key={input.id} style={{ marginBottom: "10px" }}>
//                   <h5 htmlFor={`forms.${formIndex}.inputs.${inputIndex}.value`}>{input.label}</h5>
//                   {input.label === "Description" ? (
//                     <textarea
//                       id={`forms.${formIndex}.inputs.${inputIndex}.value`}
//                       value={input.value}
//                       onChange={(e) => handleFormChange(formIndex, inputIndex, e.target.value)}
//                       style={input.style}
//                     />
//                   ) : (
//                     <input
//                       type="text"
//                       id={`forms.${formIndex}.inputs.${inputIndex}.value`}
//                       value={input.value}
//                       onChange={(e) => handleFormChange(formIndex, inputIndex, e.target.value)}
//                       style={input.style}
//                     />
//                   )}
//                 </div>
//               ))}
//               <div className="col-12 col-lg-12 mt-3 m-auto me-xl-1">
//                 <p className="text-light h4">Company Logo</p>
//                 <div className="d-flex flex-column rounded-3 mt-4 bg-black bg-opacity-50 align-items-center py-3 py-lg-5 px-5" style={{ border: "2px dashed #BF9B30" }}>
//                   <img src={imgD} alt="" width="80px" />
//                   <p className="fw-bold mt-3 text-white">
//                     Drag & drop files or
//                     <label htmlFor="personalPhoto" className="gold-txt browse-txt ms-1" style={{ color: "#BF9B30", cursor: "pointer" }}>
//                       Browse
//                     </label>
//                     <input
//                       type="file"
//                       style={{ display: "none" }}
//                       id="personalPhoto"
//                       onChange={(e) => setImage(URL.createObjectURL(e.currentTarget.files[0]))}
//                     />
//                   </p>
//                   <p className="text-secondary small-txt">
//                     Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
//                   </p>
//                 </div>
//               </div>

//               <div className="col-12 pt-2 border-0 d-flex justify-content-end">
//                 <button
//                   type="button"
//                   className="border-0"
//                   style={{ backgroundColor: "transparent", color: "#BF9B30" }}
//                   onClick={() => removeForm(form.id)}
//                 >
//                   <FontAwesomeIcon className="fs-5" icon={faTrashCan} />
//                 </button>
//               </div>
//             </div>
//           ))}
//           <div className="col-12 pt-2 border-0 d-flex justify-content-end">
//             <button
//               type="button"
//               className="me-2 pe-1 border-0"
//               style={{ backgroundColor: "transparent", color: "#BF9B30" }}
//               onClick={addForm}
//             >
//               <FontAwesomeIcon
//                 className="rounded-circle p-1"
//                 style={{ border: "2px solid #BF9B30" }}
//                 icon={faPlus}
//               />
//             </button>
//           </div>
//         </form>
//         <Cv />
//       </div>
//       <div className="container btns-form-part">
//         <div className="row my-3">
//           <div className="col-12 col-lg-2 mb-3 mb-lg-0">
//             <button
//               type="submit"
//               onClick={() => (handleSubmit(), Navigate("/CV/Form5"))}
//               className="btn bg-gold text-white text-uppercase btn-gold-hover py-3 w-100"
//             >
//               Continue
//             </button>
//           </div>
//           <div className="col-12 col-lg-2 order-lg-first">
//             {/* to make continue btn appear first in md sm screens */}
//             <button
//               type="button"
//               onClick={() => Navigate(-1)}
//               className="btn btn-secondary text-white text-uppercase me-3 py-3 mb-3 mb-lg-0 w-100"
//             >
//               Back
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CvPage4;
