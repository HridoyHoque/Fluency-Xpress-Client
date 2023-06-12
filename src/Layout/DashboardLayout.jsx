import { Link, NavLink, Outlet } from "react-router-dom";
import { FaUserShield, FaChalkboardTeacher } from 'react-icons/fa';
import { ImHome } from 'react-icons/im';
import { AiFillFileAdd } from 'react-icons/ai';
import { MdOutlinePayment } from 'react-icons/md';
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
                            <li className="font-semibold mt-2"><Link to='/'><ImHome size={24}/> Back Home</Link></li>
                            <li className="font-semibold"><NavLink to="/dashboard/manageClasses"><FaChalkboardTeacher size={24}/> Manage Classes</NavLink></li>
                            <li className="font-semibold mt-2"><NavLink to="/dashboard/manageUsers"> <FaUserShield size={24}/> Manage Users</NavLink></li>
                        </>
                    }
                    {
                        role === 'instructor' && <>
                        <li className="ml-8 mb-4 text-2xl">Instructor Dashboard</li>
                            <li className="font-semibold mt-2"><Link to='/'><ImHome size={24}/> Back Home</Link></li>
                            <li className="font-semibold"><NavLink to="/dashboard/addClass"><AiFillFileAdd size={24}/>Add a Class</NavLink></li>
                            <li className="font-semibold mt-2"><NavLink to="/dashboard/myClasses"> <FaChalkboardTeacher size={24}/> My Classes</NavLink></li>
                        </>
                    }
                    {
                        !role && <>
                            <li className="font-semibold mt-2"><Link to='/'><ImHome size={24}/> Back Home</Link></li>
                            <li><NavLink to="/dashboard/mySelectedClasses"><FaChalkboardTeacher size={24}/> My Selected Classes</NavLink></li>
                            <li className="font-semibold mt-2"><NavLink to="/dashboard/payment"> <MdOutlinePayment size={24}/> Payment</NavLink></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;