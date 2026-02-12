import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import TaskApp from "./components/07-reducer-and-context/02-reducer-context-traslado/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskApp />
  </StrictMode>,
);
