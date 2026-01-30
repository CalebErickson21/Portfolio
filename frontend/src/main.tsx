// Import Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// Import routes
import router from "./utils/routes";

// Import styles
import "./index.css";

// Import providers
import { AppProviders } from "./contexts/appProviders";

// Render the app
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  </React.StrictMode>
);
