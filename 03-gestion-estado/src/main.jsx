import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Form from "./components/02-eleccion-estructura-estado/02-evitar-estado-redundante";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Form />
  </StrictMode>,
);
