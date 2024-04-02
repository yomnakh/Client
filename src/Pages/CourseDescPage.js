import React from 'react'
import CourseDesc from '../components/All Courses/CourseDesc'
import CourseDescLogic from '../components/All Courses/CourseDescLogic'

const CourseDescPage = ({ course }) => {
  return (
    <div>
      {/* <CourseDesc/>*/}
      <CourseDescLogic />
    </div>
  )
}

export default CourseDescPage
