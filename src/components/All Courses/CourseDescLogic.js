import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
import { courseData } from './CoursesData';
import Container from 'react-bootstrap/esm/Container';
import CourseDesc from './CourseDesc';
import CourseError from './CourseError';
import { Link } from 'react-router-dom';

const CourseDescLogic = () => {
    const [course, setcourse] = useState([]);
    useEffect(() => {
        setcourse(courseData.courses);
    }, []);
    return (
        <div>
            <Container>
                <Row className=''>
                    {
                        course.length >= 1 ? (
                            course.map((course) => {
                                return <CourseDesc key={course.id} course={course} />;
                            })
                        ) : <CourseError />

                    }
                </Row>
            </Container>
        </div>
    )
}

export default CourseDescLogic;
