import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Ejercicio from "./components/04-actualizar-arrays-en-estado/02-agregar-elemento-array/Ejercicio";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Ejercicio />
  </StrictMode>
);
