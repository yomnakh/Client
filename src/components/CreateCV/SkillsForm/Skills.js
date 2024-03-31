import React, { useState } from 'react';
import './Skills.css';
import '../CVButtons.css'
import {RiDeleteBinLine} from 'react-icons/ri';
import {IoAddCircleOutline} from 'react-icons/io5'

const Skills = ({active,setActive,square,inputFields,setInputFields}) => {

  const [hasInput, setHasInput] = useState(false);

  const handleAddIcon = () => {
    const newInputField = {
      id: inputFields.length + 1,
      name: inputFields + 1,
      value: '',
      addIcon: true,
      deleteIcon: true
    };
    setInputFields([...inputFields, newInputField]);
  };

 const handleDeleteIcon = () => {
     if (inputFields.length > 1) {
    setInputFields(inputFields.slice(0, -1));
  }
};

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedInputFields = inputFields.map((field) => {
      if (field.name === name) {
        return {...field, value };
      }
      return field;
    });
    setInputFields(updatedInputFields);
    setHasInput(value.length > 0);
  };
  
  return (
    <form>
      <label className='cv-skills-label'>
        Skills
        {inputFields.map((field) => (
          <div key={field.id}>
            <input
              type="text"
              name={field.name}
              value={field.value}
              className='cv-skills-input'
              onChange={handleInputChange}
            />
            {field.deleteIcon && (
              <RiDeleteBinLine color='#BF9B30' className='cv-skills-delete-icon' onClick={handleDeleteIcon} />
            )}
            {hasInput && field.addIcon && (
              <IoAddCircleOutline color='#BF9B30' className='cv-skills-add-icon' onClick={handleAddIcon} />
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

export default Skills;