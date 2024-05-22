import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Course from './Course';
import FilterCoursesCategory from './FilterCoursesCategory';
import axios from 'axios';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    useEffect(() => {
        setAllCategories(extractCategories(courses));
    }, [courses]);

    const fetchCourses = async () => {
        try {
            const response = await axios.get('https://edutrax.vercel.app/api/courses/');
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const extractCategories = (courses) => {
        const allCategories = [];
        courses.forEach(course => {
            course.category.forEach(category => {
                if (!allCategories.includes(category)) {
                    allCategories.push(category);
                }
            });
        });
        return allCategories;
    };

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

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategories.length === 0 ||
            course.category.some(cat => selectedCategories.includes(cat));
        return matchesSearch && matchesCategory;
    });

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
            <div className='row m-0' style={{alignItems:'start'}}>
                <FilterCoursesCategory handleCategoryChange={handleCategoryChange} selectedCategories={selectedCategories} allCategories={allCategories} />
                <div className='col-lg-10 col-md-10 m-0'>
                    <div className='courses'>
                        <Course course={filteredCourses} />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AllCourses;
