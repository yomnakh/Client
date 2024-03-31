import React, { useEffect, useState } from 'react';
import './create-cv-style.css';
import { Outlet } from 'react-router-dom';

import HeaderTitle from '../../Components/Global/HeaderTitle';
import CreateCVStipper from '../../Components/MainCreateCV/CreateCVStipper';
import BackAndContinueBtns from '../../Components/MainCreateCV/BackAndContinueBtns';
import CustomizeYourCv from '../../Components/MainCreateCV/CustomizeYourCv';
import CVTemplate from '../../Components/MainCreateCV/CVTemplate';
import {
  formDataFiled,
  initialformData,
} from '../../Components/MainCreateCV/data';
import { jsPDF } from 'jspdf';
import TopNav_Admin from '../../Components/TopNav_admin/TopNav_Admin';

function NewCreateCVPage() {
  const [formData, setFormData] = useState(
    sessionStorage.getItem('CVData')
      ? JSON.parse(sessionStorage.getItem('CVData'))
      : // : formDataFiled
      initialformData
  );
  // Surakarta, December 2, 1994

  function handelChange(e, type) {
    const { value, name } = e.target;
    let data = formData?.[type];
    data = { ...data, [name]: value };
    setFormData((prev) => ({ ...prev, [type]: data }));
  }

  function handelChangeAbout(e) {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handelChangeMobile(value, s) {
    let data = formData?.main_information;
    data = { ...data, mobileNumber: value };
    setFormData({ ...formData, main_information: data });
  }

  //  handel Change in array form -----------------------------------------------
  function handelChangeSkills(e, i, type) {
    const { value } = e.target;
    const values = [...formData?.[type]];
    values[i] = value;
    setFormData((prev) => ({
      ...prev,
      [type]: values,
    }));
  }

  function deleteSkill(i, type) {
    let newArray = formData.skills?.filter((_, index) => index !== i);
    formData?.[type].splice(i, 1);
    setFormData((prev) => ({ ...prev, [type]: [...formData?.[type]] }));
  }

  function addSkillInput(type) {
    setFormData((prev) => ({
      ...prev,
      [type]: [...prev?.[type], ''],
    }));
  }

  // handel Change in Complex form -----------------------------------
  function handelChangeComplex(e, i, type) {
    const { value, name } = e.target;
    let data = [...formData?.[type]];
    data[i] = { ...data[i], [name]: value };
    setFormData((prev) => ({ ...prev, [type]: data }));
  }
  function deleteComplexItem(i, type) {
    let newArray = formData?.[type]?.filter((_, index) => index !== i);
    formData?.[type].splice(i, 1);
    setFormData((prev) => ({ ...prev, [type]: [...formData?.[type]] }));
  }

  function addComplexItem(type) {
    setFormData((prev) => ({
      ...prev,
      [type]: [...formData?.[type], ''],
    }));
  }

  useEffect(() => {
    // copy formData object to session storage
    sessionStorage.setItem('CVData', JSON.stringify({ ...formData }));
  }, [formData]);

  // -------------------------- process and download cv logic ----------------------------
  const [loading, setLoading] = useState(false);
  const createPDF = () => {
    setLoading(true);
    const page = new jsPDF('portrait', 'px', [660, 1041.3]);
    page.html(document.querySelector('#CV_Template')).then(() => {
      page.save('my-CV.pdf');
    });
    setLoading(false);
  };

  return (
    <div style={{ backgroundColor: 'rgb(26 26 26 / 0.9)', color: '#fff', paddingTop: '200px' }}>
    
      <HeaderTitle title={'Create CV'} />
      <CustomizeYourCv />
      <CreateCVStipper />
      <section className="container-fluid">
        <div className="row create-cv p-3 bg_black-opc my-4 mx-0 p-0 p-lg-4 rounded ">
          <div className="col-12 col-lg-6 p-0 px-lg-3">
            {/* forms part ---------------------------------------------- */}
            <Outlet
              context={[
                formData,
                handelChange,
                handelChangeAbout,
                handelChangeMobile,
                handelChangeSkills,
                addSkillInput,
                deleteSkill,
                handelChangeComplex,
                deleteComplexItem,
                addComplexItem,
                setFormData,
              ]}
            />
          </div>
          <div className="col-12 col-lg-6 d-none d-lg-block">
            {/* template part ----------------------------------------- */}
            <CVTemplate data={formData} />
          </div>
        </div>
        <BackAndContinueBtns loading={loading} createPDF={createPDF} />
      </section>
    </div>
  );
}

export default React.memo(NewCreateCVPage);
