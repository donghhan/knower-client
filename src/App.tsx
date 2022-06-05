import { HelmetProvider } from "react-helmet-async";
import Router from "./Router";
import { GlobalStyles } from "./theme";

export default function App() {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <Router />
    </HelmetProvider>
  );
}
