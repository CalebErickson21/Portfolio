import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Academics from "../pages/Academics";
import Contact from "../pages/Contact";
import Construction from "../pages/Construction";


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
    ],
  },
]);

// Export router
export default router;