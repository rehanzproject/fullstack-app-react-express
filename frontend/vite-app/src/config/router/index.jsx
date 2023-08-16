import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../../components/views/RegisterPage.view";
import LandingPage from "../../components/views/LandingPage.view";
import Login from "../../components/views/LoginPage.view";
import HomePage from "../../components/views/HomePage.view";
import AdminTemplate from "../../components/templates/Admin.template";
import AdminAnalystic from "../../components/views/Admin/AdminAnalystic.view";
import AdminCalendar from "../../components/views/Admin/AdminCalendar.view";
import AdminProfile from "../../components/views/Admin/AdminProfile.view";
import DetailFood from "../../components/views/DetailFood.view";
import UserTemplate from "../../components/templates/User.template";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route element={<UserTemplate />}>
        <Route path="home" element={<HomePage />} />

        <Route path="food/:id" element={<DetailFood />} />    
        </Route>
        <Route element={<AdminTemplate />}>
          <Route path="/admin/analystic" element={<AdminAnalystic />} />
          <Route path="/admin/calendar" element={<AdminCalendar />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
