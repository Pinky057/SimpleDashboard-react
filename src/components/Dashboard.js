// src/components/Dashboard.js
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboard-container">
                <Sidebar />
                <main className="main-content">
                    <h2>Dashboard Overview</h2>
                    <div className="content-section">
                        <p>Welcome to the dashboard! Here you can view and manage various components, plugins, and extras.</p>
                        {/* Add your dashboard widgets or other content here */}
                        <div className="widget">
                            <h3>Performance Overview</h3>
                            <p>This section can include charts, metrics, or other important information.</p>
                        </div>
                        <div className="widget">
                            <h3>Latest Updates</h3>
                            <p>Stay up-to-date with the latest features and updates available in your application.</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
