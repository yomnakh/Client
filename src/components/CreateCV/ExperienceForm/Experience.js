
import React, { useState } from 'react';
import './Experience.css'
import '../CVButtons.css'
import {FaCloudArrowUp} from 'react-icons/fa6'
import {RiDeleteBinLine} from 'react-icons/ri';
import {IoAddCircleOutline} from 'react-icons/io5'

const Experience = ({active,setActive,square,formData,setFormData}) => {
  const [image,setImage] = useState(null);
  const [fileName,setFileName] = useState("No selected file");

    const [showIndex,setShowIndex]=useState(0);
    const handleSubmit = () => {
    console.log(formData);
  };

  const handleChange = (e) => {
    var newArr=formData[e.target.name];
    newArr[showIndex]=e.target.value
    setFormData({
      ...formData,
      [e.target.name]:newArr
    });
  };
  const handleAdd =()=>{
    var changeValues={company: formData.company,
      Position: formData.Position,
      from: formData.from,
      to: formData.to,
      fileExperience: formData.fileExperience,
      description: formData.description
  }
  Object.values(changeValues).forEach(arr => {
    arr.push('')
  });
  setFormData({
    ...formData,
    ...changeValues
  });
    setShowIndex(showIndex+1)
    console.log(formData)
  }
  const handleDelete =()=>{
    var changeValues={company: formData.company,
       Position: formData.Position,
      from: formData.from,
      to: formData.to,
      fileExperience: formData.fileExperience,
      description: formData.description
    }
    if(showIndex>0){
    Object.values(changeValues).forEach(arr => {
      arr.pop()
    });
    setShowIndex(showIndex-1);
    }else{
      changeValues={company: [""],
        Position:  [""],
        from:  [""],
        to:  [""],
        fileExperience: [""],
       description: [""]
      }
    }
    setFormData({
      ...formData,
      ...changeValues
    });
    console.log(formData)
  }
  
  return (
    <form  className= 'd-flex col-6 '  >
       <label className='cv-experience-label'>experience</label>
       <div className='cv-experience-block '>
        <label className='cv-company-label'>
       company name
        <input
          type="text"
          name="company"
          value={formData.company[showIndex]}
          onChange={handleChange}
          className='cv-company-input'
        />
      </label>
        <label className='cv-position-label'>
       Position
        <input
          type="text"
          name="Position"
          value={formData.Position[showIndex]}
          onChange={handleChange}
          className='cv-position-input'
        />
      </label>
      <div className='d-flex'>
        <label className='cv-from-label'>
       from
        <input
          type="text"
          name="from"
          value={formData.from[showIndex]}
          onChange={handleChange}
          className='cv-from-input '
        />
      </label>
       <label className='cv-to-label'>
       to
        <input
          type="text"
          name="to"
          value={formData.to[showIndex]}
          onChange={handleChange}
          className='cv-to-input '
        />
      </label>
      </div>
       
           <label className='cv-company-logo-upload-label '>Company Logo </label>
      <div className="cv-company-logo-uploader d-flex flex-column justify-content-center align-items-center"
         onClick={()=> document.querySelector(".img-upload").click()}
      >
            <input 
              type='file'
              accept='image/*'
              name='fileExperience'
              value={formData.fileExperience[showIndex]}
              className='img-upload ' hidden 
              onChange={({ target: {files}}) => {
                      files[0] && setFileName(files[0].name)
                      if(files){
                        setImage(URL.createObjectURL(files[0]))
                      }
                }}
            />
            {image ?
              <img src= {image} width={32} height={32} alt={fileName}/>
              :
              <>
               <FaCloudArrowUp color='#BF9B30' size={40} className='cv-experience-icon'/>
               <p className='cv-logo-upload-desc'>Drag & drop files or <span className='cv-logo-upload-span'>Browse</span></p>
               <p className='cv-logo-upload-info'>Supported formates: JPEG, PNG, GIF,  
             <p className='d-flex justify-content-center'> MP4, PDF, PSD,AI, Word, PPT </p>
               </p>
              </>
              
            }
  


         </div>
      
  <label className='cv-description-label'>
       Description
        <input
          type="text"
          name="description"
          value={formData.description[showIndex]}
          onChange={handleChange}
          className='cv-description-input '
        />
      </label>
     </div>
       
      <div className='cv-experience-icons'>
   <RiDeleteBinLine color='#BF9B30'  onClick={handleDelete} />
    <IoAddCircleOutline color='#BF9B30' onClick={handleAdd}   />
      </div>
    


        
       <div className='cv-button'> 
        
          <button className='cv-back-btn cv-btn' disabled={active <= 1} onClick={() => setActive(active - 1)}>Back</button>
          <button className='cv-continue-btn cv-btn' disabled={active >= square - 1} onClick={() => {setActive(active + 1); handleSubmit()}} >Continue</button>
        </div>
    </form>
  );
};

export default Experience ;