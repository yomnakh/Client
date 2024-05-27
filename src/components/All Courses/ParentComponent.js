// ParentComponent.js

import React, { useState, useEffect } from 'react';
import { useParams, Route, Routes, Navigate } from 'react-router-dom';
import CourseDesc from './CourseDesc';
import CourseVideo from './CourseVideo';
import axios from 'axios';
import Learning from '../Mylearning/Learning';
import CourseExam from './CourseExam';

const ParentComponent = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [lectures, setLectures] = useState([]);
    const token = localStorage.getItem("access_token");



    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await axios.get(`https://edutrax.vercel.app/api/courses/${id}`);
                setCourse(response.data);
            } catch (error) {
                console.error('Error fetching course:', error);
            }
        };
        fetchCourse();
    }, [id]);

    useEffect(() => {
        const fetchLectures = async () => {
            try {
                const response = await axios.get(`https://edutrax.vercel.app/api/course-lecture/courselec/${id}`, {
                    headers: {
                        token: `${token}`
                    }
                })
                setLectures(response.data);
            } catch (error) {
                console.error('Error fetching lectures:', error);
            }
        };
        fetchLectures();
    }, [id]);

    // Render the child components with lectures prop
    return (
        <Routes>
            <Route path="/" element={<CourseDesc lectures={lectures} course={course} />} />
            <Route path="/coursevideo" element={<CourseVideo lectures={lectures} course={course} />} />
        </Routes>
    );
};

export default ParentComponent;
