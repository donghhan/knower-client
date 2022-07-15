import React from "react";
import styled from "styled-components";
import { IChildren } from "../../Utils/interface";

export default function FormBox({ children }: IChildren) {
  return <StyledAuthForm>{children}</StyledAuthForm>;
}

const StyledAuthForm = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;
