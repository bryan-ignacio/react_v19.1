import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Menu from "./components/02-eleccion-estructura-estado/03-duplicacion-en-estado01";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Menu />
  </StrictMode>,
);
