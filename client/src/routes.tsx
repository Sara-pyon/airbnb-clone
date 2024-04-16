import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import ProfilePage from "./pages/ProfilePage";
import BookingPage from "./pages/BookingPage";
import AccomendationPage from "./pages/AccomendationPage";

const router= createBrowserRouter([
    {path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
        {path:'/', element:<HomePage />},
        {path: '/register', element: <RegisterPage />},
        {path: '/login', element: <LoginPage />},
        {path: '/account', element: <AccountPage />, children: [
            {path: '/account/me', element:<ProfilePage /> },
            {path: '/account/bookings', element:<BookingPage /> },
            {path: '/account/accommondations', element:<AccomendationPage /> }
        ]}
    ]}
]);

export default router;