import React, { useState } from 'react';
import './Links.css';
import '../CVButtons.css';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoAddCircleOutline } from 'react-icons/io5'
import html2pdf from 'html2pdf.js';


const Links = ({ active, setActive, square, inputLinkFields, setInputLinkFields }) => {

  const [hasInput, setHasInput] = useState(false);

  const handleAddIcon = () => {
    const newInputField = {
      id: inputLinkFields.length + 1,
      name: inputLinkFields + 1,
      value: '',
      addIcon: true,
      deleteIcon: true
    };
    setInputLinkFields([...inputLinkFields, newInputField]);
  };

  const handleDeleteIcon = () => {
    if (inputLinkFields.length > 1) {
      setInputLinkFields(inputLinkFields.slice(0, -1));
    }
  };
  const handleDownload = (e) => {
    e.preventDefault();
    const element = document.getElementById('cv-container');
    element.style.display = 'block';
    html2pdf().from(element).save('cv.pdf');
  };

  const handleInputChange = (event) => {
    console.log(inputLinkFields);
    const { name, value } = event.target;
    const updatedInputFields = inputLinkFields.map((field) => {
      if (field.name === name) {
        return { ...field, value };
      }
      return field;
    });
    setInputLinkFields(updatedInputFields);
    setHasInput(value.length > 0);
  };

  return (
    <form >

      <label className='cv-links-label'>
        Links
        {inputLinkFields.map((field) => (
          <div key={field.id}>
            <label className='cv-link-websiteName-label'> Website Name
              <input
                type="text"
                name={field.name}
                value={field.value}
                className='cv-link-websiteName-input'
                onChange={handleInputChange}
              />
            </label>
            <label className='cv-link-url-label'>URL
              <input
                type="text"
                linkName={field.linkName}
                linkValue={field.linkValue}
                className='cv-link-url-input'
                onChange={handleInputChange}
              />
            </label>
            {field.deleteIcon && (
              <RiDeleteBinLine color='#BF9B30' className='cv-links-delete-icon' onClick={handleDeleteIcon} />
            )}
            {hasInput && field.addIcon && (
              <IoAddCircleOutline color='#BF9B30' className='cv-links-add-icon' onClick={handleAddIcon} />
            )}
          </div>
        ))}
      </label>
      <div id="cv-container">
        <h1>Download cv</h1>
      </div>
      <div className='cv-button'>

        <button className='cv-back-btn cv-btn' disabled={active <= 1} onClick={() => setActive(active - 1)}>Back</button>
        <button className="cv-download-btn" onClick={handleDownload}>
          Download
        </button>
      </div>
    </form>
  );
};

export default Links;