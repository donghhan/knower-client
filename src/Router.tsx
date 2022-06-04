import {
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
  Location,
} from "react-router-dom";
import { Path } from "./Utils/path";
// Custom Hook
import useAuth from "./Hooks/Auth/useAuth";
// Pages
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Home from "./Pages/Home";
import MyProfile from "./Pages/User/MyProfile";
// Components
import Container from "./Components/Container";
import Navbar from "./Components/Navbar";
import ProductByCategory from "./Pages/Products/ProductCategory";

export default function Router() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={Path.Home} element={<Container />} />
        {/* Public Routes */}

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path={Path.MyProfile} element={<MyProfile />} />
        </Route>

        {/* Invalid routes redirection */}
        <Route path="*" element={<Navigate to={Path.Home} replace />} />
      </Routes>
    </>
  );
}

function RequireAuth() {
  const auth = useAuth();
  const location: Location = useLocation();

  return auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to={Path.Login} state={{ from: location }} replace />
  );
}
