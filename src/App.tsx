import { HelmetProvider } from "react-helmet-async";
import { createGlobalStyle } from "styled-components";
import Router from "./Router";

const GlobalStyles = createGlobalStyle`
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

function App() {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <Router />
    </HelmetProvider>
  );
}

export default App;
