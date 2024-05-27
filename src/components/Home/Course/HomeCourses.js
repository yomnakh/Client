import React, { useEffect, useState } from 'react'
import Course from '../../All Courses/Course'
import Api from '../../../config/api';
import "../../All Courses/AllCourses.css"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await Api.get('/api/courses/');
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const selectedCourses = courses.slice(0, 3);
    return (
        <div className='homeCoursesSection py-3'>
            <h2 className="text-center py-5">Most Popular Courses</h2>
            <div className='text-center d-flex justify-content-between' style={{marginTop:"-50px"}}>
                <div className='col-9  mx-auto text-center m-auto p-0'>
                    <Course course={selectedCourses}/>
                    <Link to={"/courses"}><Button className='mb-5 btn headerBtn mx-auto'style={{marginTop:"-50px"}}>Explore More <i class="bi bi-arrow-right"></i></Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeCourses
