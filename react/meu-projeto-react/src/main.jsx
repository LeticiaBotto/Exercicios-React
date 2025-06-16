import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// StrictMode é um componente do React que ajuda a identificar problemas na aplicação
// ele não renderiza nada na tela, mas ajuda a identificar problemas
