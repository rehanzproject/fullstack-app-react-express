import { createBrowserRouter } from "react-router-dom";
import Register from "../../components/pages/RegisterPage.view";
import LandingPage from "../../components/pages/LandingPage.view";
import Login from "../../components/pages/LoginPage.view";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <LandingPage />,
  },
]);
