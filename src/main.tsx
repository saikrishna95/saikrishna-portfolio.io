/*import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

*/createRoot(document.getElementById("root")!).render(<App />);
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

// Detect the correct base path for GitHub Pages
const base = import.meta.env.BASE_URL.replace(/\/$/, ""); // removes trailing "/"

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={base}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
