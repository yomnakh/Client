import React, { useState } from 'react'
import Slider from '../components/Home/Slider/Slider'
import About from '../components/Home/About/About'
import Certificate from '../components/Home/Certificate/Certificate'
import Why from "../components/Home/Why/Why"
import Footer from '../components/Footer/Footer'
import CourseSection from '../components/Courses/CourseSection'
import ChatWindow from '../components/Gemini/ChatWindow'
import "../components/Gemini/gemini.css"
import robot from "../Assets/robot.png"

const Home = () => {
    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => {
        setShowChat(!showChat);
    };
    return (

        <div>
            <Slider />
            <About />
            <CourseSection />
            <Why />
            <Certificate />
            <Footer />
            <button onClick={toggleChat} className="geminiBtn"><img  className="geminiRobotImg " src={robot} alt='gemini' /></button>
            {showChat && (
                <div className="popup">
                    <ChatWindow />
                </div>
            )}
        </div>
    )
}

export default Home
