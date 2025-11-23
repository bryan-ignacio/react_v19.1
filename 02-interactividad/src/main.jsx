import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./components/01-responder-a-eventos/03-pasar-contrls-eventos-como-props/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
