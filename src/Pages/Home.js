import React, { useEffect, useState } from 'react'
import Slider from '../components/Home/Slider/Slider'
import About from '../components/Home/About/About'
import Certificate from '../components/Home/Certificate/Certificate'
import Why from "../components/Home/Why/Why"
import Footer from '../components/Footer/Footer'
import CourseSection from '../components/Courses/CourseSection'
import ChatWindow from '../components/Gemini/ChatWindow'
import "../components/Gemini/gemini.css"
import robot from "../Assets/robot.png"
import CourseDesign from '../components/All Courses/CourseDesign'
import Api from '../config/api'
import Course from '../components/All Courses/Course'
import HomeCourses from '../components/Home/Course/HomeCourses'

const Home = () => {
    const [showChat, setShowChat] = useState(false);
    const toggleChat = () => {
        setShowChat(!showChat);
    };
    return (

        <div>
            <Slider />
            <About />
            <HomeCourses />
            <Why />
            <Certificate />
            <Footer />
            <button onClick={toggleChat} className="geminiBtn"><img className="geminiRobotImg " src={robot} alt='gemini' /></button>
            {showChat && (
                <div className="popup">
                    <ChatWindow />
                </div>
            )}
        </div>
    )
}

export default Home
