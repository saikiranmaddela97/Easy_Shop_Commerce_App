import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [{ }, dispatch] = useStateValue();

    const register = (e) => {
        e.preventDefault();

        // Simple validation or mock registration
        if (email && password && name) {
            dispatch({
                type: 'SET_USER',
                user: {
                    name: name,
                    email: email
                }
            });
            navigate('/');
        } else {
            alert("Please fill in all fields");
        }
    }

    return (
        <div className='signup'>
            <Link to='/'>
                <div className="signup__logo">
                    <span className="signup__logoText">EasyShop</span>
                    <span className="signup__domain">.in</span>
                </div>
            </Link>

            <div className='signup__container'>
                <h1>Create Account</h1>

                <form>
                    <h5>Your name</h5>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} />

                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={register} className='signup__signInButton'>Continue</button>
                </form>

                <p>
                    By creating an account, you agree to EasyShop's Conditions of Use and Privacy Notice.
                </p>

                <div className="signup__loginLink">
                    Already have an account? <Link to="/login">Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup;
