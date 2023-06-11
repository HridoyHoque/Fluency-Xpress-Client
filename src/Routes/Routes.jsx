import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../Pages/ManageUsers/ManageUsers";
import AddClasses from "../Pages/Instructors/AddClasses";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            // admin dashboard
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            // instructor dashboard
            {
                path: 'addClass',
                element: <AddClasses></AddClasses>
            }
        ]
    }
]);

export default router;