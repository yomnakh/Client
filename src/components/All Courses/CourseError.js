import React from 'react'

const CourseError = () => {
    const style = {
        height: "200px"
    }
    return (
        <div className='d-flex flex-column justify-content-center align-content-center text-center'>
            <img src='https://demo.creativeitem.com/academy/assets/global/image/not-found.svg' style={style} className='my-5'  alt='not Found Img'/>
            <h3 className='fw-bolder' style={{ color: "#1B3F6B" }} >Course not found</h3>
            <p style={{ color: "#1B3F6B" }}>Sorry, try using more similar words in your search.</p>
        </div>
    )
}

export default CourseError
