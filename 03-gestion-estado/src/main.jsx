import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TravelPlan from "./components/02-eleccion-estructura-estado/04-app-estado-anidado-final";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TravelPlan />
  </StrictMode>,
);
