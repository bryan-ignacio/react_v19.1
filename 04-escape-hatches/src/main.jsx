import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/App.css";
import CatFriends from "./02-DOM-con-ref/01-ejemplo/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CatFriends />
  </StrictMode>,
);
