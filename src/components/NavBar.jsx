import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"
import NavMenu from "./NavMenu.jsx"
import { useState } from 'react';


const NavBar = () => {
    // Navbar begins with the value of false so that is starts out closed
  const [navbarOpen, setNavbarOpen] = useState(false);
    const width = 900;
    return (
        <header className="bg-opacity-0 fixed w-full z-50">
            <div className="container ml-7 flex">
                <div className="container flex justify-between">
                <nav className="flex justify-start">
                <NavLink
                    to="/" exact
                    activeClassName="text-gray-500"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-white-600 hover:text-green-800 text-4xl font-bol cursive tracking-widest">
                        JH
                    </NavLink>
                </nav>

                {/*TODO: If screen is large display this menu */}
                {/*Else, display the hamburger menu */}
                { width > 768 ?  
                    (<nav className="flex flex-row">
                    <NavLink
                    to="/post"
                    className="inline-flex items-center py-3 pl-3 my-6 rounded text-gray-500 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700">
                        Blog
                    </NavLink>
                    <NavLink
                    to="/project"
                    className="inline-flex items-center py-3 pl-3 my-6 rounded text-gray-500 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700">
                        Projects
                    </NavLink>
                    <NavLink
                    to="/about"
                    className="inline-flex items-center py-3 pl-3 my-6 rounded text-gray-500 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700">
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
                </nav>) :
                
                    (
                        <div>
                        <NavMenu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default NavBar
