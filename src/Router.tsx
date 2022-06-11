import {
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
  Location,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Path } from "./Utils/path";
// Pages
import LoginPage from "./Pages/Auth/LoginPage";
import Signup from "./Pages/Auth/Signup";
import Home from "./Pages/Home";
import MyProfile from "./Pages/User/MyProfile";
// Components
import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";
import ProductByCategory from "./Pages/Products/ProductCategory";

export default function Router() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={Path.Home} element={<Layout />}>
          {/* Public Routes */}
          <Route path={Path.Login} element={<LoginPage />} />
          <Route path={Path.Home} element={<Home />} />

          {/* Protected Routes */}
          <Route path={Path.MyProfile} element={<MyProfile />} />

          {/* Invalid routes redirection */}
          <Route path="*" element={<Navigate to={Path.Home} replace />} />
        </Route>
      </Routes>
    </>
  );
}
