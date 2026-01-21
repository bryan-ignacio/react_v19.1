import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import PlanDeViaje from "./components/02-eleccion-estructura-estado/04-estado-profundamente-anidado";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlanDeViaje />
  </StrictMode>,
);
