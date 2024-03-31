
import React, { useState } from 'react';
import './MainInformation.css'
import '../CVButtons.css'
import {FaCloudArrowUp} from 'react-icons/fa6'
  
const MainInformation = ({active,setActive,square,formData,setFormData}) => {
    
const [image,setImage] = useState(null);
const [fileName,setFileName] = useState("No selected file");
    const handleSubmit = () => {
    console.log(formData);
  };

const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <form  className= 'd-flex col-6 info-form'  >
    
      <label className='cv-info-form-label cv-first-name-label'>
         first name
       <input
        type="text"
        name="name"
        value={formData.name}
        onChange={ (e)=> setFormData({...formData,name:e.target.value }
            
          )}
        className='cv-info-form-input'
        />
       </label>
      
      <label className='cv-info-form-label cv-last-name-label'>
        last name
        <input
          type="text"
          name="last"
          value={formData.last}
          onChange={handleChange}
          className='cv-info-form-input cv-last-name-input'
        />
        </label>
     <div className='cv-profession-div'>
         <label className='cv-profession-label'>
        profession
        <input
          type="text"
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          className='cv-info-form-input cv-profession-input'
        />
      </label>
       <label className='cv-country-label'>
        country
        <input
          type="text"  
          name="country"
          value={formData.country}
          onChange={handleChange} 
          className='cv-info-form-input cv-country-input'
        />
      </label>
     </div>
     
        <div className='cv-profession-div cv-form-position'>
         <label className='cv-city-label '>
         city
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className=' cv-city-input'
        />
      </label>
       <label className=' cv-mobile-label'>
        mobile number
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className='cv-mobile-input'
        />
      </label>
     </div>
     <div className='cv-profession-div cv-email-position'>
         <label className='cv-email-label'>
        email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className='cv-email-input'
        />
      </label>
     </div>
     <label className='cv-upload-label '>Personal Photo </label>
      <div className="cv-uploader d-flex flex-column justify-content-center align-items-center"
         onClick={()=> document.querySelector(".img-upload").click()}
      >
            <input 
              type='file'
              accept='image/*'
              name='file'
              value={formData.file}
              className='img-upload ' hidden
              onChange={({ target: {files}}) => {
                   files[0] && setFileName(files[0].name)
                    if(files){
                   setImage(URL.createObjectURL(files[0]))
                      }
                }}
            />
            {image ?
              <img src= {image} width={150} height={150} alt={fileName}/>
              :
              <>
               <FaCloudArrowUp color='#BF9B30' size={60}/>
               <p className='cv-img-upload-desc'>Drag & drop files or <span className='img-upload-span'>Browse</span></p>
               <p className='cv-img-upload-info'>Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, 
             <p className='d-flex justify-content-center'> AI, Word, PPT </p>
               </p>
              </>
              
            }
      </div>
       <div className='cv-button'> 
        
          <button className='cv-back-btn cv-btn' disabled={active <= 1} onClick={() => setActive(active - 1)}>Back</button>
          <button className='cv-continue-btn cv-btn' disabled={active >= square - 1} onClick={() => {setActive(active + 1); handleSubmit()}} >Continue</button>
        </div>
    </form>
  );
};

export default MainInformation;