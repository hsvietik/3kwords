import styled from "styled-components";

export const FormContainer = styled.div`
  position: absolute;
  top: 200px;
  right: 20%;
`;

export const StyledForm = styled.form`
  width: 300px;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
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
export const ErrorMessage = styled.p`
  margin: 0px;
  padding: 0px;
`;
