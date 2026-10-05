import React from 'react'
import './navbar.css'

import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'

const Navbar = ({
    setSidebarOpen,
    darkMode,
    toggleDarkMode
}) => {

    return (

        <nav className="navbar">

            <div className="nav_left flex-div">

                <img
                    src={menu_icon}
                    alt="menu"
                    className="menu-icon"
                    onClick={() => setSidebarOpen(prev => !prev)}
                />


                <img
                    src={logo}
                    alt="VidTube"
                    className="logo"
                />

            </div>


            <div className="nav_middle flex-div">

                <input
                    type="text"
                    placeholder="Search"
                    className="search-bar"
                />


                <img
                    src={search_icon}
                    alt="search"
                    className="search-icon"
                />

            </div>


            <div className="nav_right flex-div">

                <img
                    src={upload_icon}
                    alt="upload"
                />


                <span
                    className="mode-icon"
                    onClick={toggleDarkMode}
                    title={
                        darkMode
                            ? 'Switch to Light Mode'
                            : 'Switch to Dark Mode'
                    }
                >

                    {darkMode ? '☀️' : '🌙'}

                </span>


                <img
                    src={notification_icon}
                    alt="notification"
                />


                <img
                    src={profile_icon}
                    alt="profile"
                    className="user-icon"
                />

            </div>

        </nav>

    )
}

export default Navbar