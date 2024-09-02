// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCubes, FaCalendar, FaChartPie, FaTable, FaMapMarkedAlt, FaStar, FaFolder, FaBell, FaPuzzlePiece, FaFont, FaPalette,FaTachometerAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul className="sidebar-menu">
                <li>
                    <Link to="/dashboard">
                        <FaTachometerAlt className="menu-icon"/>
                        Dashboard
                    </Link>
                </li>
                <li className="sidebar-section">THEME</li>
                <li>
                    <Link to="/color">
                        <FaPalette className="menu-icon"/>
                        Color
                    </Link>
                </li>
                <li>
                    <Link to="/typography">
                        <FaFont className="menu-icon"/>
                        Typography
                    </Link>
                </li>

                <li className="sidebar-section">COMPONENTS</li>
                <li>
                    <Link to="/base">
                        <FaPuzzlePiece className="menu-icon"/>
                        Base
                    </Link>
                </li>
                <li>
                    <Link to="/buttons">
                        <FaFolder className="menu-icon"/>
                        Buttons
                    </Link>
                </li>
                <li>
                    <Link to="/forms">
                        <FaTable className="menu-icon"/>
                        Forms
                    </Link>
                </li>
                <li>
                    <Link to="/icons">
                        <FaStar className="menu-icon"/>
                        Icons
                    </Link>
                </li>
                <li>
                    <Link to="/notifications">
                        <FaBell className="menu-icon"/>
                        Notifications
                    </Link>
                </li>
                <li>
                    <Link to="/widgets">
                        <FaCubes className="menu-icon"/>
                        Widgets <span className="badge new">NEW</span>
                    </Link>
                </li>

                <li className="sidebar-section">PLUGINS</li>
                <li>
                    <Link to="/calendar">
                        <FaCalendar className="menu-icon"/>
                        Calendar <span className="badge pro">PRO</span>
                    </Link>
                </li>
                <li>
                    <Link to="/charts">
                        <FaChartPie className="menu-icon"/>
                        Charts
                    </Link>
                </li>
                <li>
                    <Link to="/datatables">
                        <FaTable className="menu-icon"/>
                        DataTables <span className="badge pro">PRO</span>
                    </Link>
                </li>
                <li>
                    <Link to="/google-maps">
                        <FaMapMarkedAlt className="menu-icon"/>
                        Google Maps <span className="badge pro">PRO</span>
                    </Link>
                </li>

                <li className="sidebar-section">EXTRAS</li>
                <li>
                    <Link to="/pages">
                        <FaStar className="menu-icon"/>
                        Pages
                    </Link>
                </li>
                <li>
                    <Link to="/apps">
                        <FaCubes className="menu-icon"/>
                        Apps
                    </Link>
                </li>
                <li>
                    <Link to="/docs">
                        <FaFolder className="menu-icon"/>
                        Docs
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
