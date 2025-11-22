import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Poem from "./components/07-renderizado-listas/04-desafios/04-desafio/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Poem />
  </StrictMode>
);
