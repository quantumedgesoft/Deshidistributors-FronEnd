import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap.min.css";
import { BrowserRouter } from "react-router";
import Router from "./routes/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
);
