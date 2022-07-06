import styled from "styled-components";

export default function LoadingText() {
  return <StyledLoadingText>Loading items...</StyledLoadingText>;
}

const StyledLoadingText = styled.span`
  font-size: 1.25rem;
`;
