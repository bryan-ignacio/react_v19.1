import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import EditProfile from "./components/01-gestion-estado/03-desafios/Desafio2";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EditProfile />
  </StrictMode>,
);
