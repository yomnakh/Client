import React from 'react';
import "./Interview.css"
import { LinearGradient } from 'react-text-gradients'
import InterviewAside from './InterviewAside';

const Interview = () => {


    return (
        <div className='container-fluid interviewContainer'>
            <div className='row'>
            <InterviewAside/>
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


