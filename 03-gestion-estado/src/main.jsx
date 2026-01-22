import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Plan from "./components/02-eleccion-estructura-estado/04-anidado-mejor-manera-repaso";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Plan />
  </StrictMode>,
);
