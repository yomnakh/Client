import React from 'react';
import Form from 'react-bootstrap/Form';

const FilterCoursesCategory = ({ allCategories, handleCategoryChange, selectedCategories }) => {
    const otherCategories = allCategories.filter(category => category !== 'ALL Courses');
    const allCoursesCategoryIndex = allCategories.indexOf('ALL Courses');

    return (
        <div className='col-lg-2 col-md-2'>
            <div className='asideCategory shadow py-4 px-1'>
                <h4><i className="fa-solid fa-list mx-2"></i> Categories</h4>
                <div className="cate text-center">
                    {otherCategories.map((category, index) => (
                        <div key={index} className="mb-3">
                            <Form.Check
                                type={"checkbox"}
                                id={`category-checkbox-${index}`}
                                label={category}
                                onChange={() => handleCategoryChange(category)}
                                checked={selectedCategories.includes(category)}
                            />
                        </div>
                    ))}
                    {allCoursesCategoryIndex !== -1 && (
                        <div className="mb-3">
                            <Form.Check
                                type={"checkbox"}
                                id={`category-checkbox-all-courses`}
                                label={'ALL Courses'}
                                onChange={() => handleCategoryChange('ALL Courses')}
                                checked={selectedCategories.includes('ALL Courses')}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FilterCoursesCategory;
