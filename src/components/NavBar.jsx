import { NavLink } from "react-router-dom"
import { NavMenuSm, NavMenuLg } from "./NavMenu.jsx"
import { useState, useEffect } from 'react';

//Only displayed on screens smaller than 768px wide

const NavBar = () => {
    // Navbar begins with the value of false so that is starts out closed
    const [navbarOpen, setNavbarOpen] = useState(false);

    // Get the width and height of the window
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
      
      function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      
        useEffect(() => {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        return windowDimensions;
      }
    return (
        <header className="bg-opacity-0 fixed w-full z-50 ">
            <div className="container flex ">
                <div className=" container flex ml-7 justify-between">
                <nav className="flex justify-start">
                <NavLink
                    to="/" exact
                    activeClassName="text-gray-500"
                    className="inflex-flex items-center py-6 px-3 mr-4  hover:text-gray-700 text-4xl font-bold cursive tracking-widest">
                        JH
                    </NavLink>
                </nav>

                {/*If screen is large display this menu */}
                {/*Else, display the hamburger menu */}
                { useWindowDimensions().width > 768 ?  
                    <NavMenuLg /> 
                    :
                    <NavMenuSm navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
                }
                </div>
            </div>
        </header>
    )
}

export default NavBar
