import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
