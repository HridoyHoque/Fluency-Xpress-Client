import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen); }
    return (
        <nav className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Website Name */}
            <div className="flex-shrink-0">
             <Link to='/'> <h1 className="text-3xl font-bold text-white">Fluency Xpress</h1></Link>
            </div>
  
            {/* User Photo */}
            <div className="ml-auto">
              <img
                src="/path/to/user-photo.jpg"
                alt="User Photo"
                className="h-8 w-8 rounded-full"
              />
            </div>
  
            {/* Navbar links */}
            <div className="hidden md:block">
              <ul className="flex space-x-4">
                <li>
                  <NavLink
                    exact
                    to="/"
                    activeClassName="text-white"
                    className="text-gray-300 hover:text-white"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/instructors"
                    activeClassName="text-white"
                    className="text-gray-300 hover:text-white"
                  >
                    Instructors
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/classes"
                    activeClassName="text-white"
                    className="text-gray-300 hover:text-white"
                  >
                    Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    activeClassName="text-white"
                    className="text-gray-300 hover:text-white"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    activeClassName="text-white"
                    className="text-gray-300 hover:text-white"
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
  
            {/* Mobile Menu */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile Menu (Dropdown) */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-800`}>
          <ul className="py-2 px-4 space-y-2">
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="text-white"
                className="text-gray-300 hover:text-white block"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/instructors"
                activeClassName="text-white"
                className="text-gray-300 hover:text-white block"
              >
                Instructors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/classes"
                activeClassName="text-white"
                className="text-gray-300 hover:text-white block"
              >
                Classes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                activeClassName="text-white"
                className="text-gray-300 hover:text-white block"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                activeClassName="text-white"
                className="text-gray-300 hover:text-white block"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;