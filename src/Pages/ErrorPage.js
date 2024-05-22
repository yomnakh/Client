import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <img src={require('../Assets/404.png')} alt="Error" width={"30%"} height={"60%"} style={{ objectFit: "contain" }} />
            <h2 className='h2-errorpage' style={{marginTop:"-100px "}}>Page not found</h2>
            <p className='p-errorpage'> "Oops! Something went wrong. Please try again later." </p>
            <Link to={'/'}><button className='mx-auto errBtn shadow-lg'>Back Home</button></Link>
        </div>
    )
}

export default ErrorPage
