import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Modulares from "./components/modulares/Modulares";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Modulares></Modulares>
  </StrictMode>
);
