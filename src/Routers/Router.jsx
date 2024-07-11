import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Courses from "../Pages/Courses/Courses";
import ContactUs from "../Layout/ContactUs/ContactUs";

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
                element: <ContactUs></ContactUs>
            },
        ]
    },
]);


export default router;