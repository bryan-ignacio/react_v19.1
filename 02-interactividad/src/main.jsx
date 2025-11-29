import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./components/07-actualizar-arrays-en-el-estado/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
