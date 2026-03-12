import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/App.css";
import Form from "./02-DOM-con-ref/01-recap/EnfocarInput";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Form />
  </StrictMode>,
);
