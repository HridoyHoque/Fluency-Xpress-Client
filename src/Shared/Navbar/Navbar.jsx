import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('Logged Out!')
      })
      .catch(error => console.log(error))
  }
  <Toaster />
  return (
    <>
      <nav className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Website Name */}
            <div className="flex-shrink-0">
              <Link to='/'> <h1 className="text-3xl font-bold text-white">Fluency <span className="text-blue-500">Xpress</span></h1></Link>
            </div>



            {/* Navbar links */}
            <div className="hidden md:block">
              <ul className="flex space-x-4 justify-center items-center">
                <li>
                  <NavLink
                    exact
                    to="/"

                    className="text-gray-300 hover:text-white"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/instructors"

                    className="text-gray-300 hover:text-white"
                  >
                    Instructors
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/classes"
                    className="text-gray-300 hover:text-white"
                  >
                    Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className="text-gray-300 hover:text-white"
                  >
                    Dashboard
                  </NavLink>
                </li>
                {
                  user ? <> <li>
                    <button onClick={handleLogout}
                      className="btn btn-outline btn-error text-gray-300 hover:text-white block"
                    >
                      Logout
                    </button>
                  </li></> :
                    <li>
                      <NavLink
                        to="/login"
                        className="text-gray-300 hover:text-white block"
                      >
                        Login
                      </NavLink>
                    </li>
                }
              </ul>
            </div>

            {/* User Photo */}
            {
              user ? <><div className="">
              <img
                src={user && user.photoURL}
                alt="User Photo"
                className="w-9 h-9 rounded-full"
              />
            </div></> : <div className="">
              <img
                src="https://i.ibb.co/q0p4Fg8/users.png"
                alt="User Photo"
                className="h-8 w-8 rounded-full"
              />
            </div>
            }
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
                className="text-gray-300 hover:text-white block"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/instructors"
                className="text-gray-300 hover:text-white block"
              >
                Instructors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/classes"
                className="text-gray-300 hover:text-white block"
              >
                Classes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className="text-gray-300 hover:text-white block"
              >
                Dashboard
              </NavLink>
            </li>
            {
              user ? <> <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline btn-error text-gray-300 hover:text-white block"
                >
                  Logout
                </button>
              </li></> :
                <li>
                  <NavLink
                    to="/login"
                    className="text-gray-300 hover:text-white block"
                  >
                    Login
                  </NavLink>
                </li>
            }
          </ul>

        </div>
      </nav>
      <Toaster />
    </>
  );
};

export default Navbar;