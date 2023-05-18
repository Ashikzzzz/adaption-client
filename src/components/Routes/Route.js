import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Home/Home"
import Login from "../Authentication/LogIn/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element : <Main></Main>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/login",
                element : <Login></Login>
            }
        ]
    }
])

export default router;