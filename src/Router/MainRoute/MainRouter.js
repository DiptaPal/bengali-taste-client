import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Signin from "../../Pages/Login/Signin";
import Singup from "../../Pages/Login/Singup";
import AllServices from "../../Pages/AllServices/AllServices";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import EditReview from "../../Pages/EditReview/EditReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SQLvsNSQL from "../../Pages/Blog/SQLvsNSQL";
import Jwt from "../../Pages/Blog/Jwt";
import JsVsNode from "../../Pages/Blog/JsVsNode";
import NodeJS from "../../Pages/Blog/NodeJS";


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
                loader: ({params}) => fetch(`https://bengali-taste-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/myReview',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute> ,
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/edit/:id',
                element: <EditReview></EditReview>,
                loader: ({params}) => fetch(`https://bengali-taste-server.vercel.app/editReview/${params.id}`)
            },
            {
                path: '/sqlvsnsql',
                element: <SQLvsNSQL></SQLvsNSQL>
            },
            {
                path: '/jwt',
                element: <Jwt></Jwt>
            },
            {
                path: '/jsVsNode',
                element: <JsVsNode></JsVsNode>
            },
            {
                path: '/nodejs',
                element: <NodeJS></NodeJS>
            }

        ]
    }
])