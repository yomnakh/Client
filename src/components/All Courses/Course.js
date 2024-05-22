// import React, { useEffect, useState } from 'react';
// import Row from 'react-bootstrap/esm/Row';
// import { courseData } from './CoursesData';
// // import "../Courses/Course.css"
// // import './AllCourses.css'scfd
// import Container from 'react-bootstrap/esm/Container';
// import CourseDesign from './CourseDesign';
// import CourseError from './CourseError';


// const Course = ({ course }) => {
//     return (
//         <div className='course-section'>
//             <Container>
//                 <Row className=''>
//                     {
//                         course.length >= 1 ? (
//                             course.map((course) => {
//                                 return <CourseDesign key={course.id} course={course} />;
//                             })

//                         ) : <CourseError />

//                     }
//                 </Row>
//             </Container>
//         </div>
//     )
// }

// export default Course

import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import CourseDesign from './CourseDesign';
import CourseError from './CourseError';

const Course = ({ course }) => {
    return (
        <div className='course-section mt-5'>
            <Container>
                <Row className='justify-content-center'>
                    {
                        course.length >= 1 ? (
                            course.map((course) => {
                                return <CourseDesign key={course.id} course={course} />;
                            })
                        ) : <CourseError />
                    }
                </Row>
            </Container>
        </div>
    );
}

export default Course;

