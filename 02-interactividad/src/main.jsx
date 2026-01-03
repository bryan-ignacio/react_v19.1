import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Desafio1 from "./components/03-actualizar-obj-en-estado/Desafio1";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Desafio1 />
  </StrictMode>
);
