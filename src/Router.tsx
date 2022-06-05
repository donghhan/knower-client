import {
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
  Location,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./features/auth/authSlice";
import { Path } from "./Utils/path";
// Pages
import LoginPage from "./features/auth/LoginPage";
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

          {/* Protected Routes */}
          <Route element={<RequireAuth />}>
            <Route path={Path.MyProfile} element={<MyProfile />} />
          </Route>

          {/* Invalid routes redirection */}
          <Route path="*" element={<Navigate to={Path.Home} replace />} />
        </Route>
      </Routes>
    </>
  );
}

function RequireAuth() {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to={Path.Login} state={{ from: location }} replace />
  );
}
