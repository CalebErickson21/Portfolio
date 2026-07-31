import { createBrowserRouter } from "react-router";
import { Layout } from "@/pages/Layout";
import { Home } from "@/pages/Home";
import { Projects } from "@/pages/Projects";
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
				path: "projects",
				element: <Projects />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);
