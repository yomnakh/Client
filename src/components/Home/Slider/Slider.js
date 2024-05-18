
import React, { Fragment } from 'react';
import '../Slider/Slider.css';
import himg from "../../../Assets/change1.png"
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <header className='w-100'>
            <div className='container'>
                <div className='row header-row'>
                    <div className='col-md-6 col-lg-6 slider-text'>
                        <h2 className='header-info'>Classical <br />
                            <p className='education'>Education</p>  For The Future </h2>
                            <Link to={"/courses"}><button className='btn headerBtn'>Explore Courses <i class="fa-solid fa-angle-right"></i></button></Link>
                        <img src='https://bracketweb.com/eduactwp/wp-content/uploads/2023/09/about-2-shape-4.png' className='animateImage' />


                    </div>
                    <div className='col-md-6 col-lg-6  text-center'>
                        <img src={himg} className='himg mx-auto' />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Slider;