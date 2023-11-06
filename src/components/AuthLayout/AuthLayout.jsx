import { PropTypes } from "prop-types";
import { Container } from "./AuthLayout.styled";

export const AuthLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

AuthLayout.propTypes = {
  children: PropTypes.object,
};
