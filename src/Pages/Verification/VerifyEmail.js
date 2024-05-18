import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './VerifyEmail.css';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios'; // Use axios directly if Api is not set up correctly
import Api from '../../config/api';
import Swal from 'sweetalert2';

const VerifyEmail = () => {
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmail = async () => {
            const params = new URLSearchParams(location.search);
            const token = params.get('token');

            if (!token) {
                toast.error('Invalid verification link.');
                return;
            }

            try {
                const response = await Api.get(`/api/auth/verify-email?token=${token}`);
                console.log('Email verification successful:', response.data);
                Swal.fire("success",`${response.data.message}`,"success")
                setIsEmailVerified(true);
            } catch (error) {
                console.error('Email verification failed:', error.response?.data || error.message);
                toast.error('Email verification failed: ' + (error.response?.data.message || error.message));
                navigate('/');
            }
        };

        verifyEmail();
    }, [location, navigate]);
    // Ensure token is added to the dependency array

    return (
        <div className="verifyContainer">
            {isEmailVerified ? (
                <div>
                    <i className="bi bi-patch-check verify-email-icon"></i>
                    <h2 className="verfiy-email-title">
                        Your email address has been successfully verified
                    </h2>
                    <Link to="/login"><Button className="submitbtn p-2">Go To Login Page</Button></Link>
                </div>
            ) : (
                <div>
                    <h1 className="verify-email-not-found">Not Found</h1>
                </div>
            )}
        </div>
    );
};

export default VerifyEmail;
