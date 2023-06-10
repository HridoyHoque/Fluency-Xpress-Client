import { Outlet } from "react-router-dom";
import Sidebar from "../components/DashboardComponents/Sidebar";


const DashboardLayout = () => {
    return (
        <div className="relative min-h-screen md:flex">
            <Sidebar></Sidebar>
            <div className="flex-1 md:ml-64">
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;