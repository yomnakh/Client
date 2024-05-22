import React from "react";
import Slider from "../components/Home/Slider/Slider";
import About from "../components/Home/About/About";
import About1 from "../components/Home/About1/About1";

import Why from "../components/Home/Why/Why";
import Visitorlogin from "../components/Home/Visitorlogin/Visitorlogin";
import BuildYourCareer from "../components/Home/BuildYourCareer/BuildYourCareer";
import Footer from "../components/Footer/Footer";
import CourseSection from "../components/Courses/CourseSection";
import IntrodusingVideo from "../components/Home/IntrodusingVideo/IntrodusingVideo";

const Home = () => {
  return (
    <div>
      <Slider />
      <About1 />

      <CourseSection />
      <IntrodusingVideo />
      <Visitorlogin />
      <About />
      <BuildYourCareer />
      <Why />

      <Footer />
    </div>
  );
};

export default Home;
