import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap.min.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
