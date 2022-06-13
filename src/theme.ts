import { DefaultTheme, createGlobalStyle } from "styled-components";

export const theme: DefaultTheme = {
  fonts: "'Noto Serif KR', serif;",
  colors: {
    black: "#000",
    white: "#fff",
  },
  responsive: {
    mobile: "(max-width: 375px)",
    tablet: "(min-width: 376px) and (max-width: 1024px)",
    desktop: "(min-width: 1025px)",
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
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.black};
    font-size: 1.25rem;
    background: transparent;

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-family: 'Noto Serif KR', serif;
    }
  }

  span {
    display: inline-block;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Noto Serif KR', serif;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transform: translateX(-100px);
    transition: all 500ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
    transform: translateX(0px);
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
    transform: translateX(-100px);
  }
`;
