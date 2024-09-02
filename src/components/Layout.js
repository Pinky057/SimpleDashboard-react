import React from 'react';
import Sidebar from './Sidebar';
import './Layout.css'; // Styles for layout

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Sidebar />
            <main className="main-content">{children}</main>
        </div>
    );
};

export default Layout;
