import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Stop from "./components/01-responder-a-eventos/06-detener-propagacion/Stop";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Stop />
  </StrictMode>
);
