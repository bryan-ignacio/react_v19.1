import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./components/04-preservar-reiniciar-estado/09-DesafioDos";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
