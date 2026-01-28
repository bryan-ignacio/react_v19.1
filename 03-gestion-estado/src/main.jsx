import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import ContactList from "./components/04-preservar-reiniciar-estado/12-DesafioCinco";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContactList />
  </StrictMode>,
);
