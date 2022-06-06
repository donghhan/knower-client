import React from "react";
import styled from "styled-components";

interface IContainer {
  children: React.ReactNode;
}

export default function Container({ children }: IContainer) {
  return <ContainerDiv>{children}</ContainerDiv>;
}

const ContainerDiv = styled.main`
  width: 100%;
  height: fit-content;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
