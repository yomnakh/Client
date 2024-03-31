import React from "react";
import course from "./Course";
import { data } from '../Data';
import { courseData } from './CoursesData';
// const courseData = './CourseData';
import { useParams } from "react-router-dom";

 const CourseDesc = ({course}) => {
  
  return (
    <section /* courseId={courseId} */>
      <div className="bread-crumb courses-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="courses-details-1st-text">
                <h1>
                {/* {course.title} */}
                </h1>
                <p className="mb-3">
                  Getting Started is the perfect course for you. In this course,
                  you’ll learn how to build apps with Flutter, the new mobile
                  platform backed by Google.
                </p>
                <div className="review">
                  <div className="row ">
                    <div className="col-12 course-heading-info mb-3">
                      <div className="info-tag">
                        {/* <img loading="lazy" width="25px" height="25px" className="rounded-circle object-fit-cover me-1" src="https://demo.creativeitem.com/academy/uploads/user_image/69eb5987cb0d66bc631f3d545c35cc1d.jpg"> */}
                        <p className="text-12px mt-5px me-1">Created by</p>
                        <p className="text-15px mt-1">
                          <a className="created-by-instructor" href="">John Doe</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CourseDesc