import React from "react";
import styled from "styled-components";

interface IInnerSection {
  children: React.ReactNode;
}

export default function InnerSection({ children }: IInnerSection) {
  return <SectionWrapper>{children}</SectionWrapper>;
}

const SectionWrapper = styled.section`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  padding: 15em 2rem 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
