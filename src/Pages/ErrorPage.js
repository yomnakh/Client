import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <img src={require('../Assets/404 Page.jpg')} alt="Error" width={"100%"} height={"70%"} style={{ objectFit: "contain" }} />
            <Link to={'/'}><button className='mx-auto errBtn shadow-lg'>Back Home</button></Link>
        </div>
    )
}

export default ErrorPage
