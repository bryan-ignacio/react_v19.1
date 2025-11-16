import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Profile from "./components/05-props/Card";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Profile />
  </StrictMode>
);
