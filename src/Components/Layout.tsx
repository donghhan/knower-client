import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

interface ILayout {
  children?: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <Container>
      {children}
      <Outlet />
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 0 2rem;
`;
