import { createBrowserRouter } from "react-router-dom";
import { Main } from "../layouts/Main";
import Home from "../pages/Home";
import Signup from "../authentication/Signup";
import Login from "../authentication/Login";

export const router = createBrowserRouter([
    {
        path : "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    }
])