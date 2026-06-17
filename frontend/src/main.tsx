// Import Dependencies
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// Import routes
import router from "./utils/routes";

// Import styles
import "./index.css";

// Import providers
import { AppProviders } from "./contexts/appProviders";

// Import resume for download on load
import ResumeFile from "@/assets/downloadables/Caleb_Erickson_Resume.pdf";

const ResumeDownloadOnLoad = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        const link = document.createElement("a");
        link.href = ResumeFile;
        link.download = "Caleb_Erickson_Resume.pdf";
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, []);

    return <>{children}</>;
};

// Render the app
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ResumeDownloadOnLoad>
            <AppProviders>
                <RouterProvider router={router} />
            </AppProviders>
        </ResumeDownloadOnLoad>
    </React.StrictMode>,
);
