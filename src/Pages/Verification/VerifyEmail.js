import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import './VerifyEmail.css'
import { Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import Api from '../../config/api'

const VerifyEmail = () => {
    const [isEmailVerified, setIsEmailVerified] = useState(true)
    const { token , userId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await Api.get(`/api/auth/${userId}/verify/${token}`);
                console.log('Email verification successful:', response.data);
                toast.success(response.data.message);
                navigate('/login');
            } catch (error) {
                console.error('Email verification failed:', error.response.data);
                toast.error('Email verification failed: ' + error.response.data.message);
                navigate('/');
            }
        };

        verifyEmail();
    }, [token,userId, navigate]);
    return (
        <div className='verifyContainer'>
            {isEmailVerified ? (
                <div>
                    <i className="bi bi-patch-check verify-email-icon"></i>
                    <h2 className="verfiy-email-title">
                        Your email address has been successfully verified
                    </h2>
                    <Link to="/login"><Button className="submitbtn p-2"> Go To Login Page</Button></Link>
                </div>
            ) : (
                <div>
                    <h1 className="verify-email-not-found">Not Found</h1>
                </div>
            )}
        </div>
    )
}

export default VerifyEmail