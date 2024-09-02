// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Your Logo</div>
            <div className="navbar-menu">
                <button className="menu-button">Demo Campaign</button>
                <div className="user-icon">User</div>
            </div>
        </nav>
    );
};

export default Navbar;
