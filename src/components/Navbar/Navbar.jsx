import React, { useRef } from 'react';
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from '../../StateProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const searchRef = useRef();

    const handleSearch = () => {
        dispatch({
            type: "SET_SEARCH_TERM",
            term: searchRef.current.value,
        });
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar__link">
                <div className="navbar__logo">
                    <span className="navbar__logoText">EasyShop</span>
                    <span className="navbar__domain">.in</span>
                </div>
            </Link>

            {/* ... other nav items like address if needed ... */}

            <div className="navbar__search">
                <div className='navbar__searchSelect'>
                    <span>All</span>
                    <i className="arrow down"></i>
                </div>
                <input ref={searchRef} type="text" className="navbar__searchInput" placeholder="Search EasyShop" onChange={handleSearch} />
                <SearchIcon className="navbar__searchIcon" onClick={handleSearch} />
            </div>

            <div className="navbar__nav">
                <Link to="/login" className="navbar__link">
                    <div className="navbar__option">
                        <span className="navbar__optionLineOne">Hello, {user ? user.email : 'sign in'}</span>
                        <span className="navbar__optionLineTwo">Account & Lists</span>
                    </div>
                </Link>

                <div className="navbar__option">
                    <span className="navbar__optionLineOne">Returns</span>
                    <span className="navbar__optionLineTwo">& Orders</span>
                </div>

                <Link to="/checkout" className="navbar__link">
                    <div className="navbar__optionBasket">
                        <ShoppingCartIcon />
                        <span className="navbar__optionLineOne basketCount">
                            {basket?.length > 0 ? basket.length : ""}
                        </span>
                        <span className="navbar__optionLineTwo">Cart</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
