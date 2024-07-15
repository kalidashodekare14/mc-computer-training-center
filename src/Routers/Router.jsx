import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Courses from "../Pages/Courses/Courses";
import Gellery from "../Pages/Gellery/Gellery";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'courses',
                element: <Courses></Courses>
            },
            {
                path: 'gellery',
                element: <Gellery></Gellery>
            },
            {
                path: 'contact-us',
                element: <ContactUs></ContactUs>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },


]);


export default router;