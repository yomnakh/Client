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
        <div className='homeCoursesSection vh-100 '>
            <h2 className="text-center course-title" style={{paddingTop:"80px"}}>Most Popular <span>Courses</span></h2>
            <img src="https://demo.alhikmahsoft.com/edufu/wp-content/uploads/2023/06/line-shape.svg" className='orange-underline-course' />
            <div className='text-center d-flex justify-content-between' style={{marginTop:"-20px"}}>
                <div className='col-9  mx-auto text-center m-auto p-0'>
                    <Course course={selectedCourses}/>
                    <Link to={"/courses"}><Button className='btn headerBtn mx-auto'style={{marginTop:"-85px"}}>Explore More <i class="bi bi-arrow-right"></i></Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeCourses
