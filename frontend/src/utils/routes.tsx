import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/layout";
import Home from "@/pages/home";
import About from "@/pages/about";
import Experience from "@/pages/experience";
import Projects from "@/pages/projects";
import Academics from "@/pages/academics";
import Contact from "@/pages/contact";
import Construction from "@/pages/construction";
import Publications from "@/pages/publications";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/experience",
                element: <Experience />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/academics",
                element: <Academics />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/construction",
                element: <Construction />,
            },
            {
                path: "/publications",
                element: <Publications />,
            },
        ],
    },
]);

// Export router
export default router;
