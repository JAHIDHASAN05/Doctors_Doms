import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CheakOut from "../Pages/Cheakout/CheakOut";
import Bookings from "../Pages/Bookings/Bookings";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import PrivateRoutes from "./PrivateRoutes";





const router= createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path :'/login',
                element : <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path : '/cheakout/:id',
                element: <CheakOut></CheakOut>,
                loader : ({params})=>fetch(`http://localhost:5000/services/${params.id}`)                
            },
            {
                path :'/bookings',
                element :<PrivateRoutes><Bookings></Bookings></PrivateRoutes>,               
            }
        ]
    }
])


export default router;
