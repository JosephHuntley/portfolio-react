import React from 'react'
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"
import '../index.css';

const NavMenuSm = ({navbarOpen, setNavbarOpen}) => {
    return (
        <div className="container my-3 mr-12">
            <button onClick={() => setNavbarOpen(!navbarOpen)} id="nav-icon1" className="py-3">
            <span></span>
            <span></span>
            <span></span>
            </button>
            {/* If the navBar is opened display the navbar menu */}
            {
            navbarOpen && (
                <div className="container mx-auto">
                    <nav className="flex ">
                    <NavLink
                    to="/post"
                    className="items-center text-gray-500 hover:text-green-800">
                        Blog
                    </NavLink>
                    <br/>
                    <NavLink
                    to="/project"
                    className="inline-flex items-center py-3 pl-3 my-6 rounded text-gray-500 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700">
                        Projects
                    </NavLink>
                    <br/>
                    <NavLink
                    to="/about"
                    className="inline-flex items-center py-3 pl-3 my-6 rounded text-gray-500 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700">
                        About
                    </NavLink>
                    <br/>
                    <span className="py-3 pl-6 my-6">
                    <SocialIcon
                    url="https://github.com/josephhuntley"
                    className="ml-4"
                    target="_blank"
                    fgColor="#fff"
                    style= {{height: 35, width: 35}} />
                    <SocialIcon
                    url="https://linkedin.com/in/joseph-huntley-187636196"
                    className="ml-4"
                    target="_blank"
                    fgColor="#fff"
                    style= {{ height: 35, width: 35 }} />
                    </span>
                </nav>
                </div>
            )
            }
        </div>
    )
}

const NavMenuLg = () => {
    return (
        <nav className="flex flex-row mx-5 justify-end">
                    <NavLink
                    to="/post"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-500 hover:text-gray-700"
                    activeClassName="text-black bg-gray-200">
                        Blog
                    </NavLink>
                    <NavLink
                    to="/project"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-500 hover:text-gray-700"
                    activeClassName="text-black bg-gray-200">
                        Projects
                    </NavLink>
                    <NavLink
                    to="/about"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-500 hover:text-gray-700"
                    activeClassName="text-black bg-gray-200">
                        About
                    </NavLink>
                    <span className="py-3 pl-6 my-6">
                    <SocialIcon
                    url="https://github.com/josephhuntley"
                    className="ml-4"
                    target="_blank"
                    fgColor="#fff"
                    style= {{height: 35, width: 35}} />
                    <SocialIcon
                    url="https://linkedin.com/in/joseph-huntley-187636196"
                    className="ml-4"
                    target="_blank"
                    fgColor="#fff"
                    style= {{ height: 35, width: 35 }} />
                    </span>
                </nav>
    )
}

export  { NavMenuSm };
export  { NavMenuLg };