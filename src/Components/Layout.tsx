import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Layout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  padding-top: 5rem;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
`;
