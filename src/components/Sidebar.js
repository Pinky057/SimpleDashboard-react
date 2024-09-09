import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCubes, FaCalendar, FaChartPie, FaTable, FaMapMarkedAlt, FaStar, FaFolder, FaBell, FaPuzzlePiece, FaFont, FaPalette, FaTachometerAlt, FaTimes, FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.aside
            className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}
            initial={{ width: isOpen ? 220 : 60 }}
            animate={{ width: isOpen ? 220 : 60 }}
            transition={{ duration: 0.3 }}
        >
            <button className="toggle-btn" onClick={toggleSidebar}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <ul className="sidebar-menu">
                <li className="sidebar-item">
                    <Link to="/dashboard">
                        <FaTachometerAlt className="menu-icon" />
                        {isOpen && <span>Dashboard</span>}
                    </Link>
                </li>
                <li className="sidebar-section">{isOpen && 'THEME'}</li>
                <li className="sidebar-item">
                    <Link to="/color">
                        <FaPalette className="menu-icon" />
                        {isOpen && <span>Color</span>}
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/typography">
                        <FaFont className="menu-icon" />
                        {isOpen && <span>Typography</span>}
                    </Link>
                </li>

                <li className="sidebar-section">{isOpen && 'COMPONENTS'}</li>
                <li className="sidebar-item">
                    <Link to="/base">
                        <FaPuzzlePiece className="menu-icon" />
                        {isOpen && <span>Base</span>}
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/buttons">
                        <FaFolder className="menu-icon" />
                        {isOpen && <span>Buttons</span>}
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/forms">
                        <FaTable className="menu-icon" />
                        {isOpen && <span>Forms</span>}
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/icons">
                        <FaStar className="menu-icon" />
                        {isOpen && <span>Icons</span>}
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/notifications">
                        <FaBell className="menu-icon" />
                        {isOpen && <span>Notifications</span>}
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/widgets">
                        <FaCubes className="menu-icon" />
                        {isOpen && <span>Widgets <span className="badge new">NEW</span></span>}
                    </Link>
                </li>

                <li className="sidebar-section">{isOpen && 'PLUGINS'}</li>
                <li className="sidebar-item">
                    <Link to="/calendar">
                        <FaCalendar className="menu-icon" />
                        {isOpen && <span>Calendar <span className="badge pro">PRO</span></span>}
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/charts">
                        <FaChartPie className="menu-icon" />
                        {isOpen && <span>Charts</span>}
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/datatables">
                        <FaTable className="menu-icon" />
                        {isOpen && <span>DataTables <span className="badge pro">PRO</span></span>}
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/google-maps">
                        <FaMapMarkedAlt className="menu-icon" />
                        {isOpen && <span>Google Maps <span className="badge pro">PRO</span></span>}
                    </Link>
                </li>

                <li className="sidebar-section">{isOpen && 'EXTRAS'}</li>
                <li className="sidebar-item">
                    <Link to="/pages">
                        <FaStar className="menu-icon" />
                        {isOpen && <span>Pages</span>}
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/apps">
                        <FaCubes className="menu-icon" />
                        {isOpen && <span>Apps</span>}
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/docs">
                        <FaFolder className="menu-icon" />
                        {isOpen && <span>Docs</span>}
                    </Link>
                </li>
            </ul>
        </motion.aside>
    );
};

export default Sidebar;
