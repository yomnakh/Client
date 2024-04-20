import React, { useState } from 'react';
import "./Interview.css"
import { Link } from 'react-router-dom';
import { LinearGradient } from 'react-text-gradients'

const Interview = () => {
    const [showSpans, setShowSpans] = useState(false);

    const handleClick = () => {
        setShowSpans(!showSpans);
    }

    return (
        <div className='container-fluid interviewContainer'>
            <div className='row'>
                <div className={`interview shadow col-auto col-md-${showSpans ? 2 : 1} min-vh-100 d-flex justify-content-between flex-column`}>
                    <div className='interviewSide'>
                        <Link className='text-decoration-none text-white  d-flex justify-content-evenly align-content-center' style={{ marginTop: "120px" }}>
                            <i className="fa-solid fa-bars interviewIcon interviewIcon1" onClick={handleClick}></i>
                            {showSpans && <span className=' d-none d-sm-inline interviewSpan interviewSpan1'>Interview</span>}
                        </Link>

                        <hr className='text-secondary' />

                        <ul className="nav nav-pills flex-column">
                            {/* React Track */}
                            <li className="nav-item text-white  mb-2">
                                <Link className="nav-link  text-white d-flex justify-content-evenly align-content-center" aria-current="page" onClick={handleClick}>
                                    <i className="fa-brands fa-react interviewIcon"></i>
                                    {showSpans && <span className=' d-none d-sm-inline interviewSpan'>React Js</span>}
                                </Link>
                            </li>

                            <hr className='text-secondary' />

                            {/* Angular Track */}
                            <li className="nav-item text-white  mb-2">
                                <Link className="nav-link  text-white d-flex justify-content-evenly align-content-center" aria-current="page" onClick={handleClick}>
                                    <i className="fa-brands fa-angular interviewIcon"></i>
                                    {showSpans && <span className=' d-none d-sm-inline interviewSpan'>Angular</span>}
                                </Link>
                            </li>

                            <hr className='text-secondary' />

                            {/* Node.js Track */}
                            <li className="nav-item text-white ">
                                <Link className="nav-link  text-white d-flex justify-content-evenly align-content-center" aria-current="page" onClick={handleClick}>
                                    <i className="fa-brands fa-node interviewIcon"></i>
                                    {showSpans && <span className=' d-none d-sm-inline interviewSpan'>Node.js</span>}
                                </Link>
                            </li>

                            <hr className='text-secondary' />

                            {/* Nest.js Track */}
                            <li className="nav-item text-white">
                                <Link className="nav-link  text-white  d-flex justify-content-evenly align-content-center" aria-current="page" onClick={handleClick}>
                                    <i className="fa-solid fa-code interviewIcon"></i>
                                    {showSpans && <span className=' d-none d-sm-inline interviewSpan'>Nest.js</span>}
                                </Link>
                            </li>

                            <hr className='text-secondary' />

                            {/* Android Track */}
                            <li className="nav-item text-white ">
                                <Link className="nav-link  text-white d-flex justify-content-evenly align-content-center" aria-current="page" onClick={handleClick}>
                                    <i className="fa-brands fa-android interviewIcon"></i>
                                    {showSpans && <span className=' d-none d-sm-inline interviewSpan'>Android</span>}
                                </Link>
                            </li>

                            <hr className='text-secondary' />

                            {/* security Track */}
                            <li className="nav-item text-white ">
                                <Link className="nav-link  text-white d-flex justify-content-evenly align-content-center" aria-current="page" onClick={handleClick}>
                                    <i className="fa-solid fa-shield-halved interviewIcon"></i>
                                    {showSpans && <span className=' d-none d-sm-inline interviewSpan'>Security</span>}
                                </Link>
                            </li>

                            <hr className='text-secondary' />

                        </ul>
                    </div>
                </div>
                <div className='col-auto col-lg-10 col-md-10'>
                    <div className='interviewInfo'>
                        <div className='interviewInfoHeader'>
                            <h2 className='interviewHeader1'>
                                <LinearGradient gradient={['to right', '#018883 ,#1B3F6B']}>
                                    Welcome, developers!
                                </LinearGradient>
                            </h2>
                            <h2 className='interviewHeader2'>Prepare Yourself For Interview</h2>
                        </div>
                        <div className='interviewBoxs d-flex flex-wrap justify-content-between'>
                            <div className="card interviewCard" style={{ width: "18rem", height: "230px" }}>
                                <div className="card-body text-center">
                                    <h5 className="card-title interviewCardIcon"><i className="fa-solid fa-people-arrows"></i></h5>
                                    <p className="card-text interviewCardtext">Interviews are conversations with a purpose, designed to evaluate qualifications.</p>
                                </div>
                            </div>
                            <div className="card interviewCard mx-4" style={{ width: "18rem", height: "230px" }}>
                                <div className="card-body text-center">
                                    <h5 className="card-title interviewCardIcon"><i class="fa-regular fa-building"></i></h5>
                                    <p className="card-text interviewCardtext">Preparation can make or break an interview research the company and practice.</p>
                                </div>
                            </div>
                            <div className="card interviewCard" style={{ width: "18rem", height: "230px" }}>
                                <div className="card-body text-center">
                                    <h5 className="card-title interviewCardIcon"><i class="fa-regular fa-circle-question"></i></h5>
                                    <p className="card-text interviewCardtext">Ask questions; it shows interest and helps assess if the job is right for you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Interview;
