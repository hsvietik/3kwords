import { useState } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import {
  HeaderWrap,
  Header,
  SubHeader,
  Logo,
  FormContainer,
  StyledForm,
  InputWrapper,
  StyledInput,
  StyledLabel,
  BtnEye,
  FormButton,
  ErrorMessage,
  NavigationWrap,
  NavigationLink,
} from "./AuthForms.styled";
import logo from "../../assets/3K-logo.jpg";
import { logIn } from "../../redux/auth/authOperations";
import { loginSchema } from "../../helpers/validationSchema";

export function LoginForm() {
  const [textPassword, setTextPassword] = useState(true);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = ({ email, password }) => {
    dispatch(logIn({ email, password }))
      .unwrap()
      .then((resp) => {
        toast.success(`Successfully logged in as ${resp.user.name}`);
      })
      .catch((e) => {
        e === "Request failed with status code 400"
          ? toast.error("Wrong email or password")
          : toast.error("Something went wrong, try one nore time!");
      });
    reset();
    // navigate('/contacts', { replace: true });
  };

  return (
    <FormContainer>
      <HeaderWrap>
        <Header>Welcome to </Header>
        <Logo src={logo} alt="3kWords logo" /> <Header>Words</Header>
      </HeaderWrap>
      <SubHeader>Log in to your account</SubHeader>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
          <BtnEye onClick={() => setTextPassword((prevState) => !prevState)}>
            {(textPassword && <FaRegEyeSlash />) ||
              (!textPassword && <FaRegEye />)}
          </BtnEye>
        </InputWrapper>
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
        <FormButton type="submit">Login</FormButton>
      </StyledForm>
      <NavigationWrap>
        <p>Don`t have an account?</p>
        <NavigationLink to="/register">Create</NavigationLink>
      </NavigationWrap>
    </FormContainer>
  );
}
