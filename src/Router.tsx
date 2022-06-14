import { Routes, Route, Navigate } from "react-router-dom";
import { Path } from "./Utils/path";
// Pages
import LoginPage from "./Pages/Auth/LoginPage";
import Signup from "./Pages/Auth/SignupPage";
import Home from "./Pages/Home";
import MyProfile from "./Pages/User/MyProfile";
import AboutUsPage from "./Pages/AboutUsPage";
// Components
import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";

export default function Router() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={Path.Home} element={<Layout />}>
          {/* Public Routes */}
          <Route path={Path.Login} element={<LoginPage />} />
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Signup} element={<Signup />} />
          <Route path={Path.AboutUs} element={<AboutUsPage />} />

          {/* Protected Routes */}
          <Route path={Path.MyProfile} element={<MyProfile />} />

          {/* Invalid routes redirection */}
          <Route path="*" element={<Navigate to={Path.Home} replace />} />
        </Route>
      </Routes>
    </>
  );
}
