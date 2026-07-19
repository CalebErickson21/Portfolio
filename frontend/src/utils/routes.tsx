import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/pages/layout";
import { Home } from "@/pages/home";
import { NotFound } from "@/pages/NotFound";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);
