import React,{useState} from 'react'
import './CVTemplate.css'
import '../CVButtons.css'
import {AiFillLinkedin,AiOutlineGithub} from 'react-icons/ai'
import {LiaExternalLinkAltSolid} from 'react-icons/lia'

const CvTemplate = ({formData ,setFormData,inputFields,
                  setInputFields, hobbiesInputFields,
                  setHobbiesInputFields,inputLinkFields,
                  setInputLinkFields}) => {
   
 return (
<div>
<div className='cv-template-container col-5'>
<div className='cv-template-left-side'>
<div className='cv-template-profileInfo'>
  <div className='cv-template-profile-img'>
       {/* <img src={} alt='Profile' /> */}
         
</div>
        <h4 className='cv-template-profile-name'>{formData.name} {formData.last} <br/>
        <span className='cv-template-profile-profession'>{formData.profession}</span>
        </h4>
        <div className='cv-template-profile-inputInfo d-flex flex-column '>
        <input type='text' className='cv-template-profile-inputInfo1  'value={formData.country}/>
        <input type='text' className='cv-template-profile-inputInfo2 ' value={formData.city}/>
        <input type='text' className='cv-template-profile-inputInfo3' value={formData.mobile}/>
        <input type='text' className='cv-template-profile-inputInfo4' value={formData.email} />
        
    </div>
        <div className='cv-template-profile-skills'>
        <h4 className='cv-template-profile-skills-heading'>Skills</h4>
        <ul className="cv-template-skills-list">
            {
            inputFields.map((inputField)=>{
                if(inputField.value !== ""){
                return(<li >
                    {inputField.value}
                </li>)
                } else{
                    return("");
                }
                
            }) 
            }
        </ul>
    </div>
        <div className='cv-template-profile-awards'>
            <h4 className='cv-template-profile-awards-heading'>Honor & Award</h4>
            <div>{
            formData.awardName.map((item,index) =>{
                return(<div>
                    <div className='cv-template-awards-name'>
                <h4 className='cv-template-award-heading'>
                    {formData.awardName[index]}
                </h4>
                <span className='cv-template-award-year'>{formData.year[index]}</span>
            </div>
            <p className='cv-template-award-info'>{formData.AwardDescription[index]}</p>
                </div>)
            })
        }
            
        </div>
        </div>
        <div className='cv-template-profile-hobbies'>
            <h4 className='cv-template-profile-hobbies-heading'>hobbies & interest</h4>
            <ul className="cv-template-hobbies-list">
            {
            hobbiesInputFields.map((hobbiesField)=>{
                if(hobbiesField.value !== ""){
                return(<li >
                    {hobbiesField.value}
                </li>)
                } else{
                    return("");
                }
                
            }) 
            }
        </ul>
        </div>
    <div className='cv-template-profile-links'>
        <h4 className='cv-template-profile-links-heading'>Links and Credentials</h4>
            {
            inputLinkFields.map((inputLink) => {
                if(inputLink.value.toUpperCase() === 'LINKEDIN'){
                    return(
            <a href={inputLink.linkValue} className='cv-template-link-style'>
                <AiFillLinkedin  className='cv-template-profile-links-icon ' />
            <span className='cv-template-profile-links-icon-name '>Linkedin</span> 
            </a>
            )
            } else if(inputLink.value.toUpperCase() === 'GITHUB'){
                return(
                <a href={inputLink.linkValue} className='cv-template-link-style'>
        <AiOutlineGithub className='cv-template-profile-links-icon cv-github-icon'/> 
        <span className='cv-template-profile-links-icon-name'>Github</span>
                </a>
                )
            }else if(inputLink.value ==='') {
                    return('');
            }
            else {
                return(
        <a href={inputLink.linkValue} className='cv-template-link-style'>
        <div>
        <LiaExternalLinkAltSolid  className='cv-template-profile-links-icon cv-website-icon'/> 
        <span className='cv-template-profile-links-icon-name '>{inputLink.value}</span>
        </div>
        </a>
                )
            }
            })
            }
        
    </div>
    </div>
</div>
<div className='cv-template-right-side'>
    <div className='cv-template-about'>
        <h3 className='cv-template-about-title'> About</h3>
        <span className='cv-template-about-title-line'></span>
        <p className='cv-template-about-title-info'> {formData.about} </p>
    </div>
    <div className='cv-template-education'>
        <h3 className='cv-template-education-title'> Education</h3>
        <span className='cv-template-education-title-line'></span>
        <div className='d-flex flex-row'>

            <div className='cv-template-education-left-side'>
         <div>{
        formData.EducationFrom.map((item,index) =>{
            return(
                <div className='cv-template-education-div d-flex flex-row'>

                    <div className='cv-template-education-left'>
                    <span className='cv-template-education-from-date'>
                        {formData.EducationFrom[index]}
                    </span>
                    <span className='cv-template-education-to-date'>
                    {formData.EducationTo[index]}
                    </span> 
                </div>
                
        <div className='cv-template-education-right '>

        <ul className='cv-template-education-Organization'>
                {
                    formData.Organization.map((item,i) =>{
                    if (formData.Organization[i] !== ""){
                    return(<li className='cv-template-education-Organization-list' >
                        <p className='cv-template-education-Organization-Name'>{formData.Organization[i]}</p>
                       <h4 className='cv-template-education-Organization-degree'>
                       {formData.degree[i]}
                    </h4>
                    <p className='cv-template-education-EducationDescription'>
                        {formData.EducationDescription[i]}
                    </p>
                         </li>
                            );

                    } else{
                        return('');
                    }
                    
                    })
                 }
            </ul>
            </div>

         </div>
         )
        })
         }    
     </div>
       </div>
        </div>
          </div>
        <div className='cv-template-experience'>
        <h3 className='cv-template-experience-title'> Experience</h3>
        <span className='cv-template-experience-title-line'></span>
            <div className='d-flex flex-row'>

            <div className='cv-template-experience-left-side'>
         <div>{
        formData.company.map((item,i) =>{
            return(
                <div className='cv-template-experience-div'>
                    <div className='cv-template-experience-left'>
                     <img src={formData.fileExperience[i]}/>
                </div>
                
         <div className='cv-template-experience-right '>
                <ul className='cv-template-experience-company'>
                {
                    formData.company.map((item,i) =>{
                    if (formData.company[i] !== ""){
                    return(<li className='cv-template-experience-company-list' >
                    <h3 className='cv-template-experience-company-name'>
                       {formData.company[i]} 
                    </h3>
                    <p className='cv-template-experience-position'>
                    {formData.Position[i]}
                    <span className='cv-template-experience-from-date'>{formData.from[i]}</span>
                     <span className='cv-template-experience-to-date'>{formData.to[i]}</span>
                    </p> 
                    <p className='cv-template-experience-desc'>{formData.description[i]}</p>
                         </li>
                            );

                    } else{
                        return null;
                    }
                    
                    })
                 }
            </ul>
            </div>

         </div>
         )
        })
         }    
     </div>
       </div>
        </div>
          

                </div>
            </div>

        </div>
     </div>
    
  );
};
export default CvTemplate;