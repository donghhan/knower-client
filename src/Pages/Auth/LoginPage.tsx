import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FieldErrors, useForm } from "react-hook-form";
import { Path } from "../../Utils/path";
import styled from "styled-components";
import { ILoginForm } from "../../Utils/interface";
// Components
import InnerSection from "../../Components/InnerSection";
import SectionTitle from "../../Components/form/SectionTitle";
import FormBox from "../../Components/form/FormBox";
import InputBox from "../../Components/form/InputBox";
import FormButton from "../../Components/form/FormButton";

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
    <InnerSection>
      <SectionTitle titleText="Login" />
      <p>{errorMessage}</p>
      <FormBox>
        <InputBox label="email*" type="email" />

        {errors?.email && <p>{errors?.email?.message}</p>}
        <InputBox label="password*" type="password" />
        {errors?.password && <p>{errors?.password?.message}</p>}
        <FormButton buttonText="Login" />
      </FormBox>
      <UtilWrapper>
        <StyledLink to={Path.Signup}>Create new account</StyledLink>
        <StyledLink to="/">Forgot password?</StyledLink>
      </UtilWrapper>
    </InnerSection>
  );
}

const StyledLink = styled(Link)`
  font-size: 1.25rem;
`;

const UtilWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  ${StyledLink} {
    margin: 0.25em 0;
  }
`;
