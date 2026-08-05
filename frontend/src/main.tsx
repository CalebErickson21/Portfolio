import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";

import { AppProviders } from "./contexts/AppProviders";
import { Router } from "./utils/Router";
import "./index.css";

const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const isDark = storedTheme === "dark" || (storedTheme !== "light" && prefersDark);
document.documentElement.classList.toggle("dark", isDark);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AppProviders>
			<RouterProvider router={Router} />
		</AppProviders>
	</StrictMode>,
);
