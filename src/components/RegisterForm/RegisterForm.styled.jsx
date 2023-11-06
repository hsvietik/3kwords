import styled from "styled-components";

export const StyledForm = styled.form`
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border-radius: 6px;
  &:focus,
  &:hover {
    outline: solid 2px red;
  }
`;
export const FormButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  border-radius: 6px;
  color: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  padding: 8px;
  background-color: red;
  &:focus,
  &:hover {
    background-color: orange;
  }
`;
export const ErrorMessage = styled.p`
  margin: 0px;
  padding: 0px;
`;
