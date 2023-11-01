import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import { PrivateRoute } from "./components/Routes/PrivatRoute";
// import { RestrictedRoute } from "./components/Routes/RestrictedRoute";
import { loaderDelay } from "./helpers/loaderDelay";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const Home = lazy(() => loaderDelay(3000)(import("./pages/Home")));
const Register = lazy(() => loaderDelay(3000)(import("./pages/Register")));
const Login = lazy(() => loaderDelay(3000)(import("./pages/Login")));
const Settings = lazy(() => loaderDelay(3000)(import("./pages/Settings")));
const Study = lazy(() => loaderDelay(3000)(import("./pages/Study")));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
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
