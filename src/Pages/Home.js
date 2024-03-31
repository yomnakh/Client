import React from 'react'
import Slider from '../components/Home/Slider/Slider'
import About from '../components/Home/About/About'
import Certificate from '../components/Home/Certificate/Certificate'
import Footer from '../components/Footer/Footer'
import CourseSection from '../components/Courses/CourseSection'

const Home = () => {
    return (
        <div>
            <Slider />
            <About />
            <CourseSection />
            <Certificate />
            <Footer />
        </div>
    )
}

export default Home
