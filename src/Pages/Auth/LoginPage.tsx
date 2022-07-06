import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FieldErrors, useForm } from "react-hook-form";
import { Path } from "../../Utils/path";
import styled from "styled-components";
import Container from "../../Components/auth/Container";
import { ILoginForm } from "../../Utils/interface";

interface ILoginPage {
  isModalOpen?: boolean;
}

export default function LoginPage({ isModalOpen }: ILoginPage) {
  const [email, setEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    reset,
  } = useForm<ILoginForm>();

  return (
    <LoginWrapper>
      <SectionWrapper>
        <Title>Login</Title>
        <p>{errorMessage}</p>
        <LoginForm>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "이메일 주소를 입력해 주세요.",
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "올바른 형식의 이메일 주소를 입력해 주세요.",
              },
            })}
          />
          {errors?.email && <p>{errors?.email?.message}</p>}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "비밀번호를 입력해 주세요.",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/,
                message:
                  "비밀번호는 8자~16자이어야 하며, 소문자 및 숫자를 최소 1개씩 포함해야 합니다.",
              },
            })}
          />
          {errors?.password && <p>{errors?.password?.message}</p>}
          <LoginButton>Login</LoginButton>
        </LoginForm>
        <UtilWrapper>
          <StyledLink to={Path.Signup}>Create new account</StyledLink>
          <StyledLink to="/">Forgot password?</StyledLink>
        </UtilWrapper>
      </SectionWrapper>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.main`
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1em;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;

  label {
    margin-bottom: 1em;

    &:nth-of-type(2) {
      margin-top: 1.5em;
    }
  }
`;

const LoginButton = styled.button`
  margin-top: 1.5em;
  font-size: 1.25rem;
`;

const StyledLink = styled(Link)``;

const UtilWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 1.5em;

  ${StyledLink} {
    margin: 0.25em 0;
  }
`;
