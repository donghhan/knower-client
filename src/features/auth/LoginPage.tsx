import React, { useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import { Path } from "../../Utils/path";
import styled from "styled-components";
import Container from "../../Components/auth/Container";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    setErrorMessage("");
  }, [email, password]);

  const formSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const userData = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...userData, email }));
      setEmail("");
      setPassword("");
      navigate(Path.Home);
    } catch (err: any) {
      if (!err?.response) {
        setErrorMessage("서버가 응답하지 않습니다.");
      } else if (err?.response?.status === 400) {
        setErrorMessage("올바른 이메일 주소와 비밀번호를 입력해주세요.");
      } else if (err?.response?.status === 401) {
        setErrorMessage("접근 권한이 없습니다.");
      } else {
        setErrorMessage(
          "알 수 없는 오류가 발생하였습니다. 잠시 후 다시 이용해주세요."
        );
      }
    }
  };

  return (
    <Container>
      <SectionWrapper>
        <Title>Please login</Title>
        <p>{errorMessage}</p>
        <LoginForm onSubmit={formSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Please write your email address.",
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "This is not a valid format of email address.",
              },
            })}
          />
          {errors?.email && <p>{errors?.email?.message}</p>}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            name="password"
          />
          <button>Login</button>
        </LoginForm>
      </SectionWrapper>
    </Container>
  );
}

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
