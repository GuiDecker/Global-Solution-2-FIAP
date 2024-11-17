import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
