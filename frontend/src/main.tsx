import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";

import { AppProviders } from "./contexts/AppProviders";
import { Router } from "./utils/Router";
import "./index.css";

// Render the app
ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AppProviders>
			<RouterProvider router={Router} />
		</AppProviders>
	</StrictMode>,
);
