import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Signup from './pages/Signup';
import Payment from './pages/Payment';
import Orders from './pages/Orders';
import Footer from './components/Footer/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import './App.css';

const promise = loadStripe('pk_test_51HGv6fLqI8a3XzJ1Gq6i1l8a3XzJ1Gq6i1l8a3XzJ1Gq6i1l8a3XzJ1Gq6i1l8a3XzJ1'); // Replace with your public key

function App() {
    const location = useLocation();

    // Hide Navbar/Footer on Login page if desired, or keep them. 
    // Usually Login page takes over. Let's hide them for Login.
    const isLoginPage = location.pathname === '/login' || location.pathname === '/signup';

    return (
        <div className="app">
            {!isLoginPage && <Navbar />}
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route
                    path="/payment"
                    element={
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    }
                />
                <Route path="/orders" element={<Orders />} />
                <Route path="/" element={<Home />} />
            </Routes>
            {!isLoginPage && <Footer />}
        </div>
    );
}

export default App;
