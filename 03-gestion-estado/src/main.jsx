import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import TaskApp from "./components/05-extraer-logica-en-un-reducer/01-consolidar-logica-con-reducer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskApp />
  </StrictMode>,
);
