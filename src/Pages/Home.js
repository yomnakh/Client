
import React, { useEffect, useState } from 'react'
import Slider from "../components/Home/Slider/Slider";
import About from "../components/Home/About/About";
import About1 from "../components/Home/About1/About1";
import ChatWindow from '../components/Gemini/ChatWindow'
import "../components/Gemini/gemini.css"
import robot from "../Assets/robot.png"
// import Api from '../config/api'
import Why from "../components/Home/Why/Why";
import Visitorlogin from "../components/Home/Visitorlogin/Visitorlogin";
import BuildYourCareer from "../components/Home/BuildYourCareer/BuildYourCareer";
import HomeCourses from '../components/Home/Course/HomeCourses'
import Footer from "../components/Footer/Footer";
import CourseSection from "../components/Courses/CourseSection";
import IntrodusingVideo from "../components/Home/IntrodusingVideo/IntrodusingVideo";

const Home = () => {
    const [showChat, setShowChat] = useState(false);
    const toggleChat = () => {
        setShowChat(!showChat);
    };
    return (
        <div>
            <Slider />
            <About1 />
            {/* <IntrodusingVideo /> */}
            <Why />
            <HomeCourses />
            <About />
            <Visitorlogin />
            <BuildYourCareer />
            <Footer />
            <button onClick={toggleChat} className="geminiBtn"><img className="geminiRobotImg " src={robot} alt='gemini' /></button>
            {showChat && (
                <div className="popup">
                    <ChatWindow />
                </div>
            )}
        </div>
    );
};

export default Home;









