import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavigationLink = styled(NavLink)`
  padding: 6px 10px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 900;
  color: var(--color-white);
  background-color: var(--color-purple);
  position: relative;
  z-index: 100;
  &:before {
    content: "";
    background: var(--background-gradient);
    display: block;
    border-radius: 16px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    z-index: -100;
    transition: opacity var(--transition);
  }
  &:focus,
  &:hover {
    &:before {
      opacity: 1;
    }
  }
  /* &.active {
    background-color: var(--color-turquoise);
  } */
`;
