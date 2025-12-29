import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        // Mock sign in for now
        if (email && password) {
            navigate('/');
        }
    }



    return (
        <div className='login'>
            <Link to='/'>
                <div className="login__logo">
                    <span className="login__logoText">EasyShop</span>
                    <span className="login__domain">.in</span>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the EasyShop Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={e => navigate('/signup')} className='login__registerButton'>Create your EasyShop Account</button>
            </div>
        </div>
    )
}

export default Login;
