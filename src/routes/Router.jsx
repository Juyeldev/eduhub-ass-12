import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../layout/DashBoard";
import AllUsers from "../pages/AllUserws/Allusers";
import AddClass from "../pages/AddClass/AddClass";
import MyClasses from "../pages/MyClasses/MyClasses";
import ClassManage from "../pages/ClassManage/ClassManage";
import Classes from "../pages/Classes/Classes";
import Selected_Class from "../pages/Selected_Class/Selected_Class";
import Enroll_Class from "../pages/Enroll_Class/Enroll_Class";
import Payment from "../pages/Payment/Payment";
import Instructor from "../pages/Instructor/Instructor";





const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'instructors',
                element: <Instructor/>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashBoard/></PrivateRoute>,
        children:[
           
            {
                path: 'allUser',
                element: <AllUsers/>
            },
            {
                path: 'addClass',
                element: <AddClass/>
            },
            {
                path: 'manages_Class',
                element: <ClassManage/>
            },
            {
                path: 'myClasses',
                element: <MyClasses/>
            },
           {
            path:'selected',
            element:<Selected_Class/>
           },
           {
            path:'enrolled',
            element: <Enroll_Class/>
           },
           {
            path: 'payment',
            element:<Payment/>
           }
        ]
    }


]);

export default router;

