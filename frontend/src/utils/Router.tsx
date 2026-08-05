import { createBrowserRouter } from "react-router";
import { Layout } from "@/pages/Layout";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Projects } from "@/pages/Projects";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { Experience } from "@/pages/Experience";
import { ExperienceDetail } from "@/pages/ExperienceDetail";
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
				path: "about",
				element: <About />,
			},
			{
				path: "projects",
				element: <Projects />,
				children: [
					{
						path: ":id",
						element: <ProjectDetail />,
					},
				],
			},
			{
				path: "experience",
				element: <Experience />,
				children: [
					{
						path: ":id",
						element: <ExperienceDetail />,
					},
				],
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);
