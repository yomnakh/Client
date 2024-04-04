import { Carousel } from 'react-bootstrap';
import React, { Fragment } from 'react';
import '../Slider/Slider.css';
import himg from "../../../Assets/HeaderImage.png"
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        // <Carousel className='carousel container mx-auto '>
        //     <Carousel.Item>
        //         <img className="d-block img-slide" src="https://img.freepik.com/free-photo/closeup-freelancer-learning-online-while-using-laptop-office_637285-6405.jpg?w=996&t=st=1708547326~exp=1708547926~hmac=16e1148978074663f078385a88af0eddc0f623fef7c4dbe72f5b4f2c567accf8" />
        //         <Carousel.Caption>
        //             <h3>First slide label</h3>
        //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img className="d-block img-slide" src="https://img.freepik.com/free-photo/young-freelance-worker-drinking-coffee-while-working-laptop-home_637285-12731.jpg?w=996&t=st=1708549439~exp=1708550039~hmac=cc25a22c770b96df16d657365b43a98b5179ca65305ab92a3c3d156c5caa0ff3" />
        //         <Carousel.Caption>
        //             <h3>First slide label</h3>
        //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        // </Carousel>
        <header className='w-100'>
            <div className='container'>
                <div className='row header-row'>
                    <div className='col-md-6 col-lg-6'>
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