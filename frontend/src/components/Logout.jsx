import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const apiUrl = import.meta.env.VITE_API_URL;

const Logout = () => {
    const navigate = useNavigate();
    const { token, logoutUser } = useContext(AuthContext);

    const handleLogout = async () => {
        const logoutEndpoint = `${apiUrl}/auth/token/logout/`;
        try {
            await axios.post(logoutEndpoint, null, {
                headers: {
                    Authorization: `Token ${token}`
                }
            });

            console.log('User logged out successfully.');
            logoutUser();
            navigate("/");
        } catch (error) {
            console.error('Error logging out user:', error);
        }
    };

    const handleUnLog = () => {
        navigate("/users");
    };

    // const handleTestClick = () => {
    //     navigate("/test");
    // };

    return (
        <div>
            <div>Are you sure you want to log out this user?</div>
            <button onClick={handleLogout}>Yes</button>
            <button onClick={handleUnLog}>No</button>
            {/* <button onClick={handleTestClick}>Test</button> */}
        </div>
    );
};

export default Logout;