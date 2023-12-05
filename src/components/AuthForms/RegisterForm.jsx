import { useState } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import {
  HeaderWrap,
  Header,
  Logo,
  NavigationWrap,
  SubHeader,
  FormContainer,
  NavigationLink,
  StyledForm,
  InputWrapper,
  StyledInput,
  BtnEye,
  FormButton,
  ErrorMessage,
  StyledLabel,
} from "./AuthForms.styled";
import logo from "../../assets/3K-logo.jpg";

import { createUser } from "../../redux/auth/authOperations";

import { registrationSchema } from "../../helpers/validationSchema";

export function RegisterForm() {
  const [textPassword, setTextPassword] = useState(true);
  const [textConfirmPassword, setTextConfirmPassword] = useState(true);
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
    console.log({ name, email, password });
    dispatch(createUser({ name, email, password }))
      .unwrap()
      .then(() => toast.success("Account successfully created!"))
      .catch(() => toast.error("Something went wrong, try one nore time!"));
    reset();
    // navigate('/contacts', { replace: true });
  };

  return (
    <FormContainer>
      <HeaderWrap>
        <Header>Welcome to </Header>
        <Logo src={logo} alt="3kWords logo" /> <Header>Words</Header>
      </HeaderWrap>
      <SubHeader>Create your account</SubHeader>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <StyledInput {...register("name")} type="text" id="name" />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput {...register("email")} type="email" id="email" />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <StyledLabel htmlFor="password">Password</StyledLabel>
        <InputWrapper>
          <StyledInput
            {...register("password")}
            type={textPassword ? "password" : "text"}
            id="password"
          />
          <BtnEye
            type="button"
            onClick={() => setTextPassword((prevState) => !prevState)}
          >
            {(textPassword && <FaRegEyeSlash />) ||
              (!textPassword && <FaRegEye />)}
          </BtnEye>
        </InputWrapper>
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
        <StyledLabel htmlFor="confirm_password">Confirm password</StyledLabel>
        <InputWrapper>
          <StyledInput
            {...register("confirm_password")}
            type={textConfirmPassword ? "password" : "text"}
            id="confirm_password"
          />
          <BtnEye
            type="button"
            onClick={() => setTextConfirmPassword((prevState) => !prevState)}
          >
            {(textPassword && <FaRegEyeSlash />) ||
              (!textPassword && <FaRegEye />)}
          </BtnEye>
        </InputWrapper>
        <ErrorMessage>{errors.confirm_password?.message}</ErrorMessage>
        <FormButton type="submit">Register</FormButton>
      </StyledForm>
      <NavigationWrap>
        <p>Already have an account?</p>
        <NavigationLink to="/login">Log In</NavigationLink>
      </NavigationWrap>
    </FormContainer>
  );
}
