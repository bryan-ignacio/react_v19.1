import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./01-hook-ref/App.css";

import ConEstado from "./01-hook-ref/03-cuando-usar/App";
import ConRef from "./01-hook-ref/03-cuando-usar/Ref";
//import App from "./01-hook-ref/04-desafio-uno/App";
//import App from "./01-hook-ref/05-desafio-dos/App";
//import App from "./01-hook-ref/06-desafio-tres/App";
import App from "./01-hook-ref/07-desafio-cuatro/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
