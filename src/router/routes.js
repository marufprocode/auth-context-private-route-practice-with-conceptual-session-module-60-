import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Main from "../components/Main";
import PrivateRoute from "../components/PrivateRoute";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Wallet from "../components/Wallet";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/home',
                element: <Home/>,
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile/></PrivateRoute>,
            },
            {
                path: '/wallet',
                element: <PrivateRoute><Wallet/></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    }
]);

export default routes;