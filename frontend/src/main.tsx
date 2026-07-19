import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { AppProviders } from "./contexts/AppProviders";
import router from "@/utils/routes";
import "./index.css";

// Render the app
ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AppProviders>
            <RouterProvider router={router} />
        </AppProviders>
    </StrictMode>,
);
