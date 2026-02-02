import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Messenger from "./components/05-extraer-logica-en-un-reducer/03-desafio-tres/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Messenger />
  </StrictMode>,
);
