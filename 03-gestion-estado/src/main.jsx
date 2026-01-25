import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Scoreboard from "./components/04-preservar-reiniciar-estado/07-reiniciar-estado-misma-posicion";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Scoreboard />
  </StrictMode>,
);
