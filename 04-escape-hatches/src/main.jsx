import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./01-hook-ref/App.css";

import ConEstado from "./01-hook-ref/03-cuando-usar/App";
import ConRef from "./01-hook-ref/03-cuando-usar/Ref";
import App from "./01-hook-ref/04-desafio-uno/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
