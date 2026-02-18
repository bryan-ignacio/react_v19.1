import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./01-hook-ref/App.css";

import ConEstado from "./01-hook-ref/03-cuando-usar/App";
import ConRef from "./01-hook-ref/03-cuando-usar/Ref";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConRef />
  </StrictMode>,
);
