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
import ManageClasses from "../Pages/ManageClasses/ManageClasses";
import MyClasses from "../Pages/Instructors/MyClasses";
import Classes from "../Pages/Classes/Classes";
import MySelectedClasses from "../Pages/StudentDashboard/MySelectedClasses/MySelectedClasses";
import Payment from "../Pages/StudentDashboard/Payment/Payment";
import PaymentHistory from "../Pages/StudentDashboard/Payment/PaymentHistory";

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
                path: 'classes',
                element: <Classes></Classes>

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
            // TODO: Make admin route more secure
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            // instructor dashboard
            // TODO: Make instructor route more secure
            {
                path: 'addClass',
                element: <AddClasses></AddClasses>
            },
            {
                path: 'myClasses',
                element: <MyClasses></MyClasses>
            },
            // student dashboard
            {
                path: 'mySelectedClasses',
                element: <MySelectedClasses></MySelectedClasses>

            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            }
        ]
    }
]);

export default router;