import React, { useState } from 'react';
import "./Interview.css"
import { Link } from 'react-router-dom';
const InterviewAside = () => {
    const [showSpans, setShowSpans] = useState(false);

    const handleClick = () => {
        setShowSpans(!showSpans);
    }
    return (
        <div className={`interview shadow col-auto col-md-${showSpans ? 2 : 1} min-vh-100 d-flex justify-content-between flex-column`}>
            <div className='interviewSide'>
                <Link to={'/interview'} className='text-decoration-none text-white  d-flex justify-content-evenly align-content-center' style={{ marginTop: "120px" }}>
                    <i className="fa-solid fa-bars interviewIcon interviewIcon1" onClick={handleClick}></i>
                    {showSpans && <span className=' d-none d-sm-inline interviewSpan interviewSpan1'>Interview</span>}
                </Link>

                <hr className='text-secondary' />

                <ul className="nav nav-pills flex-column">
                    {/* React Track */}
                    <li className="nav-item text-white  mb-2">
                        <Link to={"/interview/react"} className="nav-link  text-white d-flex justify-content-evenly align-content-center" aria-current="page" onClick={handleClick}>
                            <i className="fa-brands fa-react interviewIcon"></i>
                            {showSpans && <span className=' d-none d-sm-inline interviewSpan'>React Js</span>}
                        </Link>
                    </li>

                    <hr className='text-secondary' />

                    {/* Angular Track */}
                    <li className="nav-item text-white  mb-2">
                        <Link to={"/interview/angular"} className="nav-link  text-white d-flex justify-content-evenly align-content-center" aria-current="page" onClick={handleClick}>
                            <i className="fa-brands fa-angular interviewIcon"></i>
                            {showSpans && <span className=' d-none d-sm-inline interviewSpan'>Angular</span>}
                        </Link>
                    </li>

                    <hr className='text-secondary' />

                    {/* Node.js Track */}
                    <li className="nav-item text-white ">
                        <Link to={"/interview/node"} className="nav-link  text-white d-flex justify-content-evenly align-content-center" aria-current="page" onClick={handleClick}>
                            <i className="fa-brands fa-node interviewIcon"></i>
                            {showSpans && <span className=' d-none d-sm-inline interviewSpan'>Node.js</span>}
                        </Link>
                    </li>

                    <hr className='text-secondary' />

                    {/* Next.js Track */}
                    <li className="nav-item text-white">
                        <Link to={"/interview/next"} className="nav-link  text-white  d-flex justify-content-evenly align-content-center" aria-current="page" onClick={handleClick}>
                            <i className="fa-solid fa-code interviewIcon"></i>
                            {showSpans && <span className=' d-none d-sm-inline interviewSpan'>Next.js</span>}
                        </Link>
                    </li>

                    <hr className='text-secondary' />

                    {/* Android Track */}
                    <li className="nav-item text-white ">
                        <Link to={"/interview/android"} className="nav-link  text-white d-flex justify-content-evenly align-content-center" aria-current="page" onClick={handleClick}>
                            <i className="fa-brands fa-android interviewIcon"></i>
                            {showSpans && <span className=' d-none d-sm-inline interviewSpan'>Android</span>}
                        </Link>
                    </li>

                    <hr className='text-secondary' />

                    {/* network Track */}
                    <li className="nav-item text-white ">
                        <Link to={"/interview/network"} className="nav-link  text-white d-flex justify-content-evenly align-content-center" aria-current="page" onClick={handleClick}>
                            <i className="fa-solid fa-network-wired interviewIcon"></i>
                            {showSpans && <span className=' d-none d-sm-inline interviewSpan'>Network</span>}
                        </Link>
                    </li>

                    <hr className='text-secondary' />

                </ul>
            </div>
        </div>
    )
}

export default InterviewAside;
