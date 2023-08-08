import { createBrowserRouter } from "react-router-dom";
import Register from "../../components/views/RegisterPage.view";
import LandingPage from "../../components/views/LandingPage.view";
import Login from "../../components/views/LoginPage.view";
import HomePage from "../../components/views/HomePage.view";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
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
