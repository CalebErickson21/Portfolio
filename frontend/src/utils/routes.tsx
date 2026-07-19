import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/layout";
import Home from "@/pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
]);

// Export router
export default router;
