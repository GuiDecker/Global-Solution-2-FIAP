import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./routes/home/index.jsx";
import Faq from "./routes/faq/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EnergySimulation } from "./routes/simulations/index.jsx";
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/energy-simulation", element: <EnergySimulation /> },
      { path: "/faq", element: <Faq /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
