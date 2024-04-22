import React from "react";
function Cv() {
  let CVData = localStorage.getItem('CvData' )|| {} ; 
  let {
    fName = '',
    lName = '',
    profession = '',
    country = '',
    city = '',
    mobileNumber = '',
    email = '',
    image = '',
    about = '',
    Skills = [],
    Experiences = [],
    Education = [],
    Award = [],
    Hobbies = [],
    URL = [],}= CVData;
  return (
    <div className="col-8 d-none d-lg-block CVPage">
      <div className="container cv-container">
        <div className="row cv-height">
          <div className="col-4 bg-blue-side">
            <img
              className="d-block rounded-pill mt-3"
              src={image}
              alt=""
              style={{ width: "120px", height: "120px" }}
            />
            <div className="neme-job my-4">
              <h4 className="text-white text-capitalize">
                {fName == "" ? "Name" : fName + " " + lName}
              </h4>
              <p className="text-capitalize">
                {profession == "" ? profession : "Profession"}{" "}
              </p>
            </div>
            <div className="info-cv">
              <p className=" phone py-1 px-2">
                {" "}
                {mobileNumber == "" ? "Mobile Number" : mobileNumber}
              </p>
              <p className=" email py-1 px-2">
                {" "}
                {email == "" ? "Email" : email}
              </p>
              <p className=" location py-1 px-2">
                {" "}
                {city == "" ? "Location" : city + "," + country}{" "}
              </p>
            </div>
            <div className="skills mb-5">
              <h6 className="text-white">Skills</h6>
              <ul>
                {Skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="award mb-5">
              <h6 className="text-white">Honor & Award</h6>
              {Award.map(Award=><div key={Award.AwardName} className="col-12">
                <div className="gradute-cv mb-1 d-flex align-items-center justify-content-between">
                <span>{Award.AwardName}</span>
                <span>{Award.Year} </span>
              </div>
              <p>
              {Award.Description}
              </p>
              </div>)}
            </div>
            <div className="hobbies mb-5">
              <h6 className="text-white">Hobbies & Interest</h6>
              <ul>
                {Hobbies.map((Hobby) => (
                  <li key={Hobby}>{Hobby}</li>
                ))}
              </ul>
            </div>
              <div className="links">
              <h6 className="text-white" >Links and Credentials</h6>
              <div className="links-icon row">
                  {URL.map(link=><a  href={link.url} key={link.websiteName} className="  col-6 fs-5 text-light"><span  style={{textDecoration:'underline'}}>{link.websiteName}</span></a>)}
              </div>
          </div>
          </div>
          <div className="col-7 bg-white">
            <div className="about mb-5">
              <h4 className="cateigry-cv">About</h4>
              <div className="line-cv mb-3"></div>
              <p className="text-dark">{about}</p>
            </div>
            <div className="experience">
              <div className="education mb-5">
                <h4 className="cateigry-cv">Education</h4>
                <div className="line-cv mb-3"></div>
                {Education.map((Education) => (
                  <div key={Education.OrganizationName} className="d-flex justify-content-between">
                    <div className="col-3">
                      <p className="text-dark">
                        {Education.From} - {Education.to}
                      </p>
                    </div>
                    <div
                      className="cyrcle"
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: "rgb(211, 210, 210)",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div className="col-8 information">
                      <h6 className="text-dark text-capitalize">
                        {Education.OrganizationName}
                      </h6>
                      <p className=" text-dark fw-bolder text-capitalize">
                        {Education.Degree}
                      </p>
                      <p className="text-dark">{Education.Description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="experience">
              <h4 className="cateigry-cv">Experience</h4>
              <div className="line-cv mb-3"></div>
              {Experiences.map((Experience) => (
                <div className="col-12 d-flex " key={Experience.id}>
                  <div className="col-2">
                    <img
                      src={Experience.image}
                      alt={Experience.CompanyName}
                      style={{ height: "50px", width: "50px" }}
                    />
                  </div>
                  <div
                    className=" cyrcle mx-1"
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "rgb(211, 210, 210)",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div className="col-8 ">
                    <h5 className="text-dark fw-bold text-capitalize">
                      {Experience.CompanyName}
                    </h5>
                    <p className=" text-dark  text-capitalize">
                      {Experience.Position} |{" "}
                      {Experience.From + "-" + Experience.to}
                    </p>
                    <p className="text-dark">{Experience.Description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cv;
