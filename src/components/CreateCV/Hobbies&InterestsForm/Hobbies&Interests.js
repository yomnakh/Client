import React, { useState } from 'react';
import './Hobbies&Interests.css';
import '../CVButtons.css'
import {RiDeleteBinLine} from 'react-icons/ri';
import {IoAddCircleOutline} from 'react-icons/io5'

const Hobbies = ({active,setActive,square,hobbiesInputFields, setHobbiesInputFields}) => {

  const [hasInput, setHasInput] = useState(false);

  const handleAddIcon = () => {
    const newInputField = {
      id: hobbiesInputFields.length + 1,
      name: hobbiesInputFields + 1,
      value: '',
      addIcon: true,
      deleteIcon: true
    };
    setHobbiesInputFields([...hobbiesInputFields, newInputField]);
  };

 const handleDeleteIcon = () => {
     if (hobbiesInputFields.length > 1) {
    setHobbiesInputFields(hobbiesInputFields.slice(0, -1));
  }
};

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedInputFields = hobbiesInputFields.map((field) => {
      if (field.name === name) {
        return {...field, value };
      }
      return field;
    });
    setHobbiesInputFields(updatedInputFields);
    setHasInput(value.length > 0);
  };
  
  return (
    <form>
      <label className='cv-hobbies-label'>
        Hobbies and interests
        {hobbiesInputFields.map((field) => (
          <div key={field.id}>
            <input
              type="text"
              name={field.name}
              value={field.value}
              className='cv-hobbies-input'
              onChange={handleInputChange}
            />
            {field.deleteIcon && (
              <RiDeleteBinLine color='#BF9B30' className='cv-hobbies-delete-icon' onClick={handleDeleteIcon} />
            )}
            {hasInput && field.addIcon && (
              <IoAddCircleOutline color='#BF9B30' className='cv-hobbies-add-icon' onClick={handleAddIcon} />
            )}
          </div>
        ))}
      </label>
       <div className='cv-button'> 
        
          <button className='cv-back-btn cv-btn' disabled={active <= 1} onClick={() => setActive(active - 1)}>Back</button>
          <button className='cv-continue-btn cv-btn' disabled={active >= square - 1} onClick={() => {setActive(active + 1); } } >Continue</button>
        </div>
    </form>
  );
};

export default Hobbies;