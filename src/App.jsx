import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import { PrivateRoute } from "./components/Routes/PrivatRoute";
// import { RestrictedRoute } from "./components/Routes/RestrictedRoute";
import SharedLayout from "./components/SharedLayout/SharedLayout";
const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Settings = lazy(() => import("./pages/Settings"));
const Study = lazy(() => import("./pages/Study"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    // <div>App</div>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="settings" element={<Settings />} />
        <Route path="study" element={<Study />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
