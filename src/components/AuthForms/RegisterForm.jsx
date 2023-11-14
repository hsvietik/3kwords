import { useState } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import {
  FormContainer,
  StyledForm,
  InputWrapper,
  StyledInput,
  BtnEye,
  FormButton,
  ErrorMessage,
} from "./AuthForms.styled";

import { createUser } from "../../redux/auth/authOperations";

import { registrationSchema } from "../../helpers/validationSchema";

export function RegisterForm() {
  const [textPassword, setTextPassword] = useState(true);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { name: "", email: "", password: "" },
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = ({ name, email, password }) => {
    dispatch(createUser({ name, email, password }))
      .unwrap()
      .then(() => toast.success("Account successfully created!"))
      .catch((e) =>
        e === "Request failed with status code 400"
          ? toast.error("This user already exist! Use Log In button")
          : toast.error("Something went wrong, try one nore time!")
      );
    reset();
    // navigate('/contacts', { replace: true });
  };

  return (
    <FormContainer>
      <h3>Welcome to 3K Words</h3>
      <p>Create your account</p>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <StyledInput {...register("name")} type="text" id="name" />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <label htmlFor="email">Email</label>
        <StyledInput {...register("email")} type="email" id="email" />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <label htmlFor="password">Password</label>
        <InputWrapper>
          <StyledInput
            {...register("password")}
            type={textPassword ? "password" : "text"}
            id="password"
          />
          <BtnEye onClick={() => setTextPassword((prevState) => !prevState)}>
            {(textPassword && <FaRegEyeSlash />) ||
              (!textPassword && <FaRegEye />)}
          </BtnEye>
        </InputWrapper>
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
        <FormButton type="submit">Register</FormButton>
      </StyledForm>
    </FormContainer>
  );
}
