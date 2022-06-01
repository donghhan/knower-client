import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Path } from "./Utils/path";
// Custom Hook
import useAuth from "./Hooks/Auth/useAuth";
// Pages
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Home from "./Pages/Home";
// Components
import Navbar from "./Components/Navbar";
import ProductByCategory from "./Pages/Products/ProductCategory";

export default function Router() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={Path.Home} element={<ProtectedRouter />}>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Login} element={<Login />}></Route>
          <Route path={Path.Signup} element={<Signup />}></Route>
        </Route>
        <Route
          path={Path.ProductByCategory}
          element={<ProductByCategory />}
        ></Route>
        <Route path="*" element={<Navigate to={Path.Home} />}></Route>
      </Routes>
    </>
  );
}

function ProtectedRouter(props: any) {
  const auth = true;

  return auth ? <Outlet /> : <Navigate to={Path.Login} />;
}
