import React from 'react'
import CourseDesc from '../components/All Courses/CourseDesc'

const CourseDescPage = ({course}) => {
  return (
    <div>
       <h1>{course.title}</h1>
      <p>{course.description}</p>
      <h2> Hours: {course.hours}</h2>
      <h2>Lessons: {course.lessons}</h2>
      <CourseDesc/>
    </div>
  )
}

export default CourseDescPage
