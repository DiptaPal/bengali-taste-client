import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Signin from "../../Login/Signin";
import Singup from "../../Login/Singup";
import AllServices from "../../Pages/AllServices/AllServices";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import AddService from "../AddService/AddService";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Signin></Signin>
            },
            {
                path: '/register',
                element: <Singup></Singup>
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }

        ]
    }
])