import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";

const router= createBrowserRouter([
    {path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
        {path:'/', element:<HomePage />},
        {path: '/register', element: <Register />},
        {path: '/login', element: <Login />},
        
    ]}
]);

export default router;