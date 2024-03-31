import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Course from './Course';
import { courseData } from './CoursesData';
import FilterCoursesCategory from './FilterCoursesCategory';
import { Link } from 'react-router-dom'

const AllCourses = () => {
    const [course, setcourse] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        setcourse(courseData.courses);
    }, []);

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(cat => cat !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    useEffect(() => {
        const filteredCourses = courseData.courses.filter(course => {
            const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategories.length === 0 ||
                Array.isArray(course.category) && course.category.some((cat) => selectedCategories.includes(cat)); return matchesSearch && matchesCategory;
        });
        setcourse(filteredCourses);
    }, [searchQuery, selectedCategories]);


    return (
        <Container fluid className='w-100 p-0'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
                <div className='AllCoursesHeader'>
                    <h2 className='AllCoursesTitle'>All Courses</h2>
                    <div className='searchDiv'>
                        <input placeholder='Search Course.....' type='search' value={searchQuery} onChange={handleSearchInputChange} />
                        <button className='my-auto'>Search</button>
                    </div>
                </div>
            </div>
            <div className='row m-0'>
                <FilterCoursesCategory courseData={courseData} handleCategoryChange={handleCategoryChange} selectedCategories={selectedCategories}/>
                <div className='col-lg-10 col-md-10 m-0'>
                    <div className='courses'>
                        <Course course={course} />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AllCourses;
