import React, { useState } from 'react';
import './Stepper.css'
import '../CVButtons.css'
import MainInformation from '../MainInfoForm/MainInformation';
import About from '../AboutForm/About'
import Skills from '../SkillsForm/Skills'
import Experience from '../ExperienceForm/Experience';
import Education from '../EducationForm/Education';
import Awards from '../Honors&AwardsForm/Honors&Awards';
import Hobbies from '../Hobbies&InterestsForm/Hobbies&Interests';
import Links from '../LinksForm/Links'


const Stepper = ( {formData ,setFormData,inputFields,
                  setInputFields, hobbiesInputFields,
                  setHobbiesInputFields,inputLinkFields,
                  setInputLinkFields
          })=> {
    const[square]=useState(9);
    const[active,setActive]=useState(1)
    console.log(active)
    const arr=[];
    for(let i=1; i<square; i++){
        if (i>=6 && i<=9) {
          continue; //to skip step 7 to step 9
    }
     
        arr.push(
      <div className="cv-stepper-step">
        <span className={i<=active?"cv-step-number active":"cv-step-number" } key={i}>{i}</span>
        <span className="cv-stepper-step-label">
          {i === 1 ? (
            <>
              main <br /> information
            </>
          ) : i === 2 ? (
            "about"
          ) : i === 3 ? (
            "skills"
          ) : i === 4 ? (
            "experience"
          ) : i === 5 ? (
            "education"
           
          
          ) : (
            ""
          )}
        </span>
     
      </div>
    ); 
     
    }

    if ( active===4 ){
      arr.shift()
      arr.push( 
      <div className="cv-stepper-step">
        <span className={6<=active?"cv-step-number active":"cv-step-number" } key={6}>{6}</span>
        <span className="cv-stepper-step-label">
            <>
             honours & <br /> awards
            </>
        </span>
        </div>
        )
    }

     if (active===5 || active===6 ){
       arr.shift()
      arr.push( 
      <div className="cv-stepper-step">
        <span className={6<=active?"cv-step-number active":"cv-step-number" } key={6}>{6}</span>
        <span className="cv-stepper-step-label">
            <>
             honours & <br /> awards
            </>
        </span>
        </div>
        )
      arr.shift()
      arr.push( 
      <div className="cv-stepper-step">
        <span className={7<=active?"cv-step-number active":"cv-step-number" } key={7}>{7}</span>
        <span className="cv-stepper-step-label">
             <>
            hobbies and <br />interests
            </>
        </span>
        </div>
        )
    }

    if (active===7 ){
         arr.shift()
      arr.push( 
      <div className="cv-stepper-step">
        <span className={6<=active?"cv-step-number active":"cv-step-number" } key={6}>{6}</span>
        <span className="cv-stepper-step-label">
            <>
             honours & <br /> awards
            </>
        </span>
        </div>
        )
      arr.shift()
      arr.push( 
      <div className="cv-stepper-step">
        <span className={7<=active?"cv-step-number active":"cv-step-number" } key={7}>{7}</span>
        <span className="cv-stepper-step-label">
             <>
            hobbies and <br />interests
            </>
        </span>
        </div>
        )
    
    }
     if (active===8 ){
         arr.shift()
      arr.push( 
      <div className="cv-stepper-step">
        <span className={6<=active?"cv-step-number active":"cv-step-number" } key={6}>{6}</span>
        <span className="cv-stepper-step-label">
            <>
             honours & <br /> awards
            </>
        </span>
        </div>
        )
      arr.shift()
      arr.push( 
      <div className="cv-stepper-step">
        <span className={7<=active?"cv-step-number active":"cv-step-number" } key={7}>{7}</span>
        <span className="cv-stepper-step-label">
             <>
            hobbies and <br />interests
            </>
        </span>
        </div>
        )
      arr.shift()
      arr.push( 
      <div className="cv-stepper-step">
        <span className={8<=active?"cv-step-number active":"cv-step-number" } key={8}>{8}</span>
        <span className="cv-stepper-step-label">
            links
        </span>
        </div>
        )
    }
    
    return (

        <div className='cv-stepper-container'>
            <div className='cv-stepper-content'>
            <div className='cv-stepper-progressbar'>
            {arr}
            </div>
            </div>  
             <div className='cv-stepper-form-container'>
   
    
        {active === 1 && <MainInformation active={active} setActive={setActive} square={square} formData={formData} setFormData={setFormData} />}
        {active === 2 && <About active={active} setActive={setActive} square={square} formData={formData} setFormData={setFormData} />}
        {active === 3 && <Skills active={active} setActive={setActive} square={square} inputFields={inputFields} setInputFields={setInputFields}/>}
        {active === 4 && <Experience active={active} setActive={setActive} square={square} formData={formData} setFormData={setFormData} />}
        {active === 5 && <Education active={active} setActive={setActive} square={square} formData={formData} setFormData={setFormData} />}
        {active === 6 && <Awards active={active} setActive={setActive} square={square} formData={formData} setFormData={setFormData} />}
        {active === 7 && <Hobbies active={active} setActive={setActive} square={square} hobbiesInputFields={hobbiesInputFields} setHobbiesInputFields={ setHobbiesInputFields}  />}
        {active === 8 && <Links active={active} setActive={setActive} square={square} inputLinkFields={inputLinkFields} setInputLinkFields={setInputLinkFields}/>}

        </div>
        </div>
          

    )
    
}


export default Stepper;