import { Navigation, NavigationLink } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <Navigation>
      <NavigationLink to="/register">Get Started</NavigationLink>
      {/* <NavigationLink to="/login">Log In</NavigationLink> */}
    </Navigation>
  );
};
