import { DefaultTheme, createGlobalStyle } from "styled-components";

export const theme: DefaultTheme = {
  fonts: "'Roboto', sans-serif",
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
    font-family: 'Roboto', sans-serif;
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
      font-family: 'Roboto', sans-serif;
    }
  }

  span {
    display: inline-block;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
  }

  // Modal animation 
  .ReactModal__Overlay {
    opacity: 0;
    transform: translateY(-100vh);
    transition: all 1000ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
    transform: translateY(0);
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
    transform: translateY(-100vh);
  }
`;
