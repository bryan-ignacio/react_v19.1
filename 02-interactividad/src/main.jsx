import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import RequestTracker from "./components/02-el-estado/06-cola-actualizaciones-del-estado/02-desafios/Desafio1";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RequestTracker />
  </StrictMode>
);
