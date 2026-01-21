import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Lugares from "./components/02-eleccion-estructura-estado/04-estado-anidado-resolve";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Lugares />
  </StrictMode>,
);
