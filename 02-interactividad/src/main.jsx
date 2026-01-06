import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import DesafioTres from "./components/04-actualizar-arrays-en-estado/09-desafios/DesafioTres";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DesafioTres />
  </StrictMode>
);
