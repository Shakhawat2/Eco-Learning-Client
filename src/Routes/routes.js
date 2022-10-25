import Root from "../MainLayout/Root";
import Blog from "../Pages/Blog";
import Course from "../Pages/Course";
import ErrorPage from "../Pages/ErrorPage";
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";

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
        ] 
    }
])