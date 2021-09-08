import React from 'react'
import '../index.css';

const NavMenu = ({navbarOpen, setNavbarOpen}) => {
    return (
        <div>
            <button onClick={() => setNavbarOpen(!navbarOpen)} id="nav-icon1" className="py-3">
            <span></span>
            <span></span>
            <span></span>
            </button>
        </div>
    )
}

export default NavMenu
