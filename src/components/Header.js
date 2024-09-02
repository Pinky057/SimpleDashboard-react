import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowBack, Notifications, AccountCircle } from '@mui/icons-material';
import './Header.css'; // Styles for header

const Header = ({ onBackClick, isSidebarOpen }) => {
    return (
        <header className="header">
            <div className="header-left">
                <IconButton className="back-icon" onClick={onBackClick}>
                    <ArrowBack />
                </IconButton>
                {isSidebarOpen && <img src="/path/to/logo.png" alt="Logo" className="header-logo" />}
                <span className="header-title">Demo Campaign</span>
            </div>
            <div className="header-right">
                <IconButton>
                    <Notifications />
                </IconButton>
                <IconButton>
                    <AccountCircle />
                </IconButton>
            </div>
        </header>
    );
};

export default Header;
