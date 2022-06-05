import { DefaultTheme, createGlobalStyle } from "styled-components";

export const theme: DefaultTheme = {
  fonts: "'Noto Serif KR', serif;",
  colors: {
    black: "#000",
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Serif KR', serif;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
  }

  ul, li {
    list-style: none;
  }

  input {
    &:focus {
      outline: none;
    }

    &::placeholder {
      font-family: 'Noto Serif KR', serif;
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Noto Serif KR', serif;
  }
`;
