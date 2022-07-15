import styled from "styled-components";

interface IFormButtonText {
  buttonText: string;
}

export default function FormButton({ buttonText }: IFormButtonText) {
  return <StyledFormButton>{buttonText}</StyledFormButton>;
}

const StyledFormButton = styled.button``;
