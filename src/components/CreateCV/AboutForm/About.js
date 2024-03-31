import React, { useState } from 'react';
import './About.css'
import '../CVButtons.css'
const About = ({active,setActive,square,formData,setFormData}) => {

    
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
    
  const handleSubmit = () => {
   
    console.log(formData);
  };


  return (
    <form  className= 'd-flex  col-6 ' onSubmit={handleSubmit} >
      <label className='cv-about-label'>
       about
       <textarea
        type="text"
        name="about"
        value={formData.about}
        onChange={handleChange}
        className='cv-about-input'
       >
        
       </textarea>
      </label>
        <div className='cv-button'> 
        
          <button className='cv-back-btn cv-btn' disabled={active <= 1} onClick={() => setActive(active - 1)}>Back</button>
          <button className='cv-continue-btn cv-btn' disabled={active >= square - 1} onClick={() => {setActive(active + 1); handleSubmit()}} >Continue</button>
        </div>
    </form>
  );
};

export default About;