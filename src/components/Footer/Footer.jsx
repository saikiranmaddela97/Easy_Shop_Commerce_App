import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <div className="footer__backToTop">
                    <p>Back to top</p>
                </div>
            </Link>

            <div className="footer__links">
                <div className="footer__linkArea">
                    <h3>Get to Know Us</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Science</p>
                </div>
                <div className="footer__linkArea">
                    <h3>Connect with Us</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="footer__linkArea">
                    <h3>Make Money with Us</h3>
                    <p>Sell on Amazon</p>
                    <p>Sell under Amazon Accelerator</p>
                    <p>Protect and Build Your Brand</p>
                    <p>Amazon Global Selling</p>
                    <p>Become an Affiliate</p>
                    <p>Fulfilment by Amazon</p>
                    <p>Advertise Your Products</p>
                    <p>Amazon Pay on Merchants</p>
                </div>
                <div className="footer__linkArea">
                    <h3>Let Us Help You</h3>
                    <p>COVID-19 and Amazon</p>
                    <p>Your Account</p>
                    <p>Returns Centre</p>
                    <p>100% Purchase Protection</p>
                    <p>Amazon App Download</p>
                    <p>Help</p>
                </div>
            </div>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <div className="footer__logo">
                    <span className="footer__logoText">EasyShop</span>
                </div>
            </Link>
        </div>
    );
}

export default Footer;
