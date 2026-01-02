import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./components/03-actualizar-obj-en-estado/03-actualizar-objeto-anidado/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
