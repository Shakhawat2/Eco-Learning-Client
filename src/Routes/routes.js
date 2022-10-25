import Root from "../MainLayout/Root";
import Blog from "../Pages/Blog";
import Course from "../Pages/Course";
import ErrorPage from "../Pages/ErrorPage";
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
        ] 
    }
])