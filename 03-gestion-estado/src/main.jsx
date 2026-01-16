import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Desafio from "./components/01-gestion-estado/03-desafios/Desafio.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Desafio />
  </StrictMode>
);
