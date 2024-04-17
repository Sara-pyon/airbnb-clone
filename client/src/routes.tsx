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
import Overview from "./pages/become-a-host/Overview";
import Structure from "./pages/become-a-host/Structure";
import PrivacyType from "./pages/become-a-host/PrivacyType";
import Location from "./pages/become-a-host/Location";
import FloorPlan from "./pages/become-a-host/FloorPlan";
import Amenities from "./pages/become-a-host/Amenities";
import Photos from "./pages/become-a-host/Photos";
import BecomeAHostLayout from "./pages/become-a-host/BecomeAHostLayout";

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
            {path: '/account/mylists', element:<AccomendationPage />}
        ]}
    ]},
    {path: '/account/become-a-host',
    element: <BecomeAHostLayout />, children: [
        {path: '/account/become-a-host/:id/overview', element:<Overview />},
        {path: '/account/become-a-host/:id/structure', element:<Structure />},
        {path: '/account/become-a-host/:id/privacy-type', element:<PrivacyType />},
        {path: '/account/become-a-host/:id/location', element:<Location/>},
        {path: '/account/become-a-host/:id/floor-plan', element:<FloorPlan/>},
        {path: '/account/become-a-host/:id/amenities', element:<Amenities/>},
        {path: '/account/become-a-host/:id/photos', element:<Photos/>},
    ]}
]);

export default router;