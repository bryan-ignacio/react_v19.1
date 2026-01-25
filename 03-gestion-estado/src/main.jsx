import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FilterableList from "./components/03-compartir-estado/03-desafioDos";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FilterableList />
  </StrictMode>,
);
