import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const Header = styled.span`
  font-size: 26px;
  font-weight: 900;
  color: var(--color-purple);
`;
export const Logo = styled.img`
  width: 50px;
`;
export const NavigationWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const SubHeader = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
export const NavigationLink = styled(NavLink)`
  width: 100px;
  text-align: center;
  padding: 5px 10px;
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
    z-index: -1;
    transition: opacity var(--transition);
  }
  &:focus,
  &:hover {
    &:before {
      opacity: 1;
    }
  }
`;

export const FormContainer = styled.div`
  margin: 0px auto;
  width: 340px;
  background-color: var(--color-white);
  padding: 30px 20px;
  border-radius: 6px;
`;

export const StyledForm = styled.form`
  margin: 10px auto 30px;
  width: 300px;
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
`;
export const InputWrapper = styled.div`
  position: relative;
`;
export const StyledInput = styled.input`
  width: 300px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--color-black);
  &:focus,
  &:hover {
    outline: solid 2px var(--color-blue);
  }
`;
export const BtnEye = styled.button`
  position: absolute;
  right: 1%;
  top: 50%;
  transform: translateY(-50%);
`;
export const FormButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-radius: 6px;
  color: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  padding: 8px;
  background-color: var(--color-blue);
  transition: background-color var(--transition);
  &:focus,
  &:hover {
    background-color: var(--color-pink);
  }
`;
export const StyledLabel = styled.label`
  font-size: 14px;
`;
export const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
  margin: 0px;
  padding: 0px;
`;
