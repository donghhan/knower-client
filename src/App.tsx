import { HelmetProvider } from "react-helmet-async";
import Router from "./Router";
import { GlobalStyles } from "./theme";
import Modal from "react-modal";

export default function App() {
  Modal.setAppElement("#root");
  return (
    <HelmetProvider>
      <GlobalStyles />
      <Router />
    </HelmetProvider>
  );
}
