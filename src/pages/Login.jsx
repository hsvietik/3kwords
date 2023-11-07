import { LoginForm } from "../components/LoginForm/LoginForm";
import { AuthLayout } from "../components/AuthLayout/AuthLayout";
// import { NavigationLink } from "../components/AuthNav/AuthNav.styled";

function Login() {
  return (
    <AuthLayout>
      <LoginForm />
      {/* <h4>
        Or use <NavigationLink to="/register">Register</NavigationLink> to
        create a new account
      </h4> */}
    </AuthLayout>
  );
}

export default Login;
