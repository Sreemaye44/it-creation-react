import { createBrowserRouter } from "react-router-dom";
import HomeSwiper from "../Home/HomeSwiper";
import Login from "../Login/Login";
import ProfileDetails from "../Login/ProfileDetails";

const router = createBrowserRouter([
    {

        path: '/',
        element: <Login></Login>

    },
    {

        path: '/profile',
        element:<ProfileDetails></ProfileDetails>

    },
    {

        path: '/home',
        element: <HomeSwiper></HomeSwiper>
    

    },

])
export default router;