import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUtensils, FaUserShield, FaChalkboardTeacher } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
const DashboardLayout = () => {

    const { user, role } = useContext(AuthContext)
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                  
                   <div className="mb-6">
                   <div className="avatar mb-8">
                        <div className="w-24 rounded-full">
                            <img src={user && user.photoURL} />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Welcome back <br /> {user && user.displayName}</h2>
                    </div>
                    <div className="divider"></div> 
                   </div>
                    
                    {
                        role === 'admin' && <>
                        <li className="ml-8 mb-4 text-2xl">Admin Dashboard</li>
                            <li className="font-semibold"><NavLink to="/dashboard/adminhome"><FaChalkboardTeacher size={24}/> Manage Classes</NavLink></li>
                            <li className="font-semibold"><NavLink to="/dashboard/manageUsers"> <FaUserShield size={24}/> Manage Users</NavLink></li>
                        </>
                    }
                    {
                        !role && <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Student Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add an Item</NavLink></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;