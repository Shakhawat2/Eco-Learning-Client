import Root from "../MainLayout/Root";
import Blog from "../Pages/Blog";
import CheckOutPage from "../Pages/CheckOutPage";
import Course from "../Pages/Course";
import ErrorPage from "../Pages/ErrorPage";
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import SingleCourse from "../Pages/SingleCourse";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : 'home',
                element : <Home></Home>
            },
            {
                path : 'courses',
                loader : () => fetch('https://assignment-10-server-alpha.vercel.app/all-courses'),
                element : <Course></Course>
            },
            {
                path : 'blog',
                element : <Blog></Blog>
            },
            {
                path : 'faq',
                element : <Faq></Faq>
            },
            {
                path : 'login',
                element : <Login></Login>
            },
            {
                path : 'register',
                element : <Register></Register>
            },
            {
                path : '/course/:id',
                loader : ({params}) => fetch(`https://assignment-10-server-alpha.vercel.app/course/${params.id}`),
                element : <SingleCourse></SingleCourse>
            },
            {
                path : "/checkout/:id",
                loader : ({params}) => fetch(`https://assignment-10-server-alpha.vercel.app/course/${params.id}`),
                element : <PrivateRoute><CheckOutPage></CheckOutPage></PrivateRoute>
            }
        ] 
    }
])