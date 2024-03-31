import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
import CourseCard from './CourseCard';
import { data } from '../Data';
import HeaderTitles from '../HeaderTitles';
import "./Course.css"
import Container from 'react-bootstrap/esm/Container';


const CourseSection = () => {

    const [course, setcourse] = useState(data[0])
    useEffect(() => {
        setcourse([...data[0]])
    }, [])

    return (
        <div className='course-section'>
            <HeaderTitles title={"Most PoPular Courses"}/>
            <Container>
                <Row className='mt-2'>
                    {
                        course.length >= 1 ? (
                            course.map((course) => {
                                return <CourseCard key={course.id} course={course} />;
                            })

                        ) : <h2>NO Available Courses right now.</h2>

                    }
                </Row>
            </Container>
        </div>
    )
}

export default CourseSection;
