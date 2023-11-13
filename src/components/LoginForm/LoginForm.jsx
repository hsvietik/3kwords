import { useState } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import {
  FormContainer,
  StyledForm,
  InputWrapper,
  StyledInput,
  BtnEye,
  FormButton,
  ErrorMessage,
} from "./LoginForm.styled";
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
      <h3>Log into your account</h3>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
        <FormButton type="submit">Login</FormButton>
      </StyledForm>
    </FormContainer>
  );
}
