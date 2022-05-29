import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Path } from "./Utils/path";
import useAuth from "./Hooks/Auth/useAuth";
// Pages
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";

export default function Router() {
  return (
    <Routes>
      <Route path={Path.Home}></Route>
      <Route path={Path.Login} element={<Login />}></Route>
      <Route path={Path.Signup} element={<Signup />}></Route>
      <Route path="*" element={<Navigate to={Path.Home} />}></Route>
    </Routes>
  );
}

function ProtectedRouter() {
  const auth = useAuth();
}
