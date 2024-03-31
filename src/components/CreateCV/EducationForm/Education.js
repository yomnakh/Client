
import React, { useState } from 'react';
import './Education.css'
import '../CVButtons.css'
import {RiDeleteBinLine} from 'react-icons/ri';
import {IoAddCircleOutline} from 'react-icons/io5'
  const Education = ({active,setActive,square,formData,setFormData}) => {

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
    var changeValues={Organization: formData.Organization,
    degree: formData.degree,
    EducationFrom: formData.EducationFrom,
    EducationTo: formData.EducationTo,
    EducationDescription: formData.EducationDescription
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
    var changeValues={Organization: formData.Organization,
      degree: formData.degree,
      EducationFrom: formData.EducationFrom,
      EducationTo: formData.EducationTo,
      EducationDescription: formData.EducationDescription
    }
    if(showIndex>0){
    Object.values(changeValues).forEach(arr => {
      arr.pop()
    });
    setShowIndex(showIndex-1);
    }else{
      changeValues={Organization: [""],
        degree:  [""],
        EducationFrom:  [""],
        EducationTo:  [""],
        EducationDescription:  [""]
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
       <label className='cv-education-label'>education</label>
       <div className='cv-education-block '>
        <label className='cv-Organization-label'>
       Organization Name
        <input
          type="text"
          name="Organization"
          value={formData.Organization[showIndex]}
          onChange={handleChange}
          className='cv-Organization-input'
        />
      </label>
        <label className='cv-degree-label'>
         degree
        <input
          type="text"
          name="degree"
          value={formData.degree[showIndex]}
          onChange={handleChange}
          className='cv-degree-input'
        />
      </label>
      <div className='d-flex'>
        <label className='cv-edu-from-label'>
       from
        <input
          type="text"
          name="EducationFrom"
          value={formData.EducationFrom[showIndex]}
          onChange={handleChange}
          className='cv-edu-from-input'
        />
      </label>
       <label className='cv-education-to-label'>
       to
        <input
          type="text"
          name="EducationTo"
          value={formData.EducationTo[showIndex]}
          onChange={handleChange}
          className='cv-education-to-input '
        />
      </label>
      </div>
       
           
     <div className='position-absolute '>
  <label className='cv-education-description-label'>
       Description
        <input
          type="text"
          name="EducationDescription"
          value={formData.EducationDescription[showIndex]}
          onChange={handleChange}
          className='cv-education-description-input '
        />
      </label>
     </div>

         </div>
       
      <div className='cv-education-icons'>
   <RiDeleteBinLine color='#BF9B30'  onClick={handleDelete}  />
    <IoAddCircleOutline color='#BF9B30' onClick={handleAdd}  />
      </div>
    


        
       <div className='cv-button'> 
        
          <button className='cv-back-btn cv-btn' disabled={active <= 1} onClick={() => setActive(active - 1)}>Back</button>
          <button className='cv-continue-btn cv-btn' disabled={active >= square - 1} onClick={() => {setActive(active + 1); handleSubmit()}} >Continue</button>
        </div>
    </form>
  );
};

export default Education ;