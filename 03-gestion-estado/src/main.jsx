import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DesafioUno from "./components/03-compartir-estado/02-desafioUno";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DesafioUno />
  </StrictMode>,
);
