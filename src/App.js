import React from "react";
import RoadMaps from "./Pages/RoadMaps";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CoursesPage from "./Pages/CoursesPage";
import CourseDesc from "./components/All Courses/CourseDesc";
import CourseDescPage from "./Pages/CourseDescPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import ErrorPage from "./Pages/ErrorPage";
import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap/*" element={<RoadMaps />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/courses/coursedesc/:id" element={<CourseDescPage/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <>
      <YouTubePlaylist
        apiKey=".env.local.YOUTUBE_API_KEY"
        playlistId="YOUR_YOUTUBE_PLAYLIST_ID"
        uniqueName="THIS_PLAYLIST_INSTANCE_NAME"
      />
    </>
    </BrowserRouter>
    
  );
};

export default App;
