import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUtensils } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
const DashboardLayout = () => {

    const { role } = useContext(AuthContext)
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

                    {
                       role === 'admin' && <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add an Item</NavLink></li>
                        </> 
                    }
                   {
                    !role  && <>
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