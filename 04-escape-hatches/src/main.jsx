import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/App.css";
import Form from "./02-DOM-con-ref/01-recap/EnfocarInput";
import DesplazarElemento from "./02-DOM-con-ref/02-desplazar-elemento/DesplazarElemento";
import CallbackRef from "./02-DOM-con-ref/03-gestionar-refs/CallbackRef";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CallbackRef />
  </StrictMode>,
);
