import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./01-hook-ref/App.css";

import App from "./01-hook-ref/02-cronometro/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
