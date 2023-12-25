import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Todos from "../Pages/Todos/todos";
import SignIn from "../Pages/SignIn/signIn";
import SignUp from "../Pages/SignUp/signUp";
import Projects from "../Pages/Projects/projects";
import Calender from "../Pages/Calendar/calender";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/tasks',
                element:<PrivateRoute><Todos></Todos></PrivateRoute> 
            },
            {
                path: '/calender',
                element: <Calender></Calender>
            },
            {
                path: '/projects',
                element: <PrivateRoute><Projects></Projects></PrivateRoute> 
            },
            {
                path: '/sign-in',
                element: <SignIn></SignIn>
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default routes;