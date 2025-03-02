import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import './Welcome.css';

const Welcome = () => {
    const { user, isAuthenticated, logout, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const logToken = async () => {
            if (isAuthenticated) {
                try {
                    const token = await getAccessTokenSilently();
                    console.log('Access Token:', token);
                } catch (error) {
                    console.error('Error getting access token:', error);
                }
            }
        };

        logToken();
    }, [isAuthenticated, getAccessTokenSilently]);

    return (
        <div className="welcome-container">
            {isAuthenticated ? (
                <div className="welcome-box">
                    <h1>Welcome, {user.name}!</h1>
                    <p>Email: {user.email}</p>
                    <button className="logout-button" onClick={() => logout({ returnTo: window.location.origin, federated: true })}>
                        Log Out
                    </button>
                </div>
            ) : (
                <Login />
            )}
        </div>
    );
};

export default Welcome;