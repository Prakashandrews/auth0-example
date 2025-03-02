import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css';

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Welcome to Our App</h1>
                <p>Please log in to continue</p>
                <button className="login-button" onClick={loginWithRedirect}>
                    Log In
                </button>
            </div>
        </div>
    );
};

export default Login;