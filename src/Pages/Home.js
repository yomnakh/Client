import React from 'react'
import Slider from '../components/Home/Slider/Slider'
import About from '../components/Home/About/About'
import Certificate from '../components/Home/Certificate/Certificate'
import Why from "../components/Home/Why/Why"
import Footer from '../components/Footer/Footer'
import CourseSection from '../components/Courses/CourseSection'

const Home = () => {
    return (
        <div>
            
            <Slider />
            <About />
            <CourseSection />
            <Why />
            <Certificate />
            <Footer />
        </div>
    )
}

export default Home
