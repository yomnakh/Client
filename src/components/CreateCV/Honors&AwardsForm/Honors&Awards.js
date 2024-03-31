
import React, { useState } from 'react';
import './Honors&Awards.css'
import '../CVButtons.css'
import {RiDeleteBinLine} from 'react-icons/ri';
import {IoAddCircleOutline} from 'react-icons/io5'
const Awards = ({active,setActive,square,formData,setFormData}) => {

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
    var changeValues={awardName: formData.awardName,
    year: formData.year,
    AwardDescription: formData.AwardDescription,
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
    var changeValues={awardName: formData.awardName,
    year: formData.year,
    AwardDescription: formData.AwardDescription,
    }
    if(showIndex>0){
    Object.values(changeValues).forEach(arr => {
      arr.pop()
    });
    setShowIndex(showIndex-1);
    }else{
      changeValues={
       awardName: [''],
       year: [''],
       AwardDescription: ['']
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
       <label className='cv-awards-label'>Honors & awards</label>
       <div className='cv-awards-block '>
       
      <div className='d-flex'>
        <label className='cv-award-name-label'>
       Award Name
        <input
          type="text"
          name="awardName"
          value={formData.awardName[showIndex]}
          onChange={handleChange}
          className='cv-award-name-input '
        />
      </label>
       <label className='cv-award-year-label'>
       year
        <input
          type="text"
          name="year"
          value={formData.year[showIndex]}
          onChange={handleChange}
          className='cv-award-year-input '
        />
      </label>
      </div>
               
     <div className='position-absolute '>
  <label className='cv-award-description-label'>
       Description
        <input
          type="text"
          name="AwardDescription"
          value={formData.AwardDescription[showIndex]}
          onChange={handleChange}
          className='cv-award-description-input '
        />
      </label>
     </div>
         </div>
            <div className='cv-award-icons'>
            <RiDeleteBinLine color='#BF9B30' onClick={handleDelete}     />
                <IoAddCircleOutline color='#BF9B30'  onClick={handleAdd} />
                </div>
       <div className='cv-button'> 
        
          <button className='cv-back-btn cv-btn' disabled={active <= 1} onClick={() => setActive(active - 1)}>Back</button>
          <button className='cv-continue-btn cv-btn' disabled={active >= square - 1} onClick={() => {setActive(active + 1); handleSubmit()}} >Continue</button>
        </div>
    </form>
  );
};

export default Awards;