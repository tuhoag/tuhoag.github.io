import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Talks from "./pages/Talks";
import PageLayout from "./layouts/PageLayout";

export default createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        Component: PageLayout,
        children: [
          { path: "projects", Component: Projects, handle: { title: "Projects" } },
          { path: "publications", Component: Publications, handle: { title: "Publications" } },
          { path: "talks", Component: Talks, handle: { title: "Talks" } },
          { path: "about", Component: About, handle: { title: "About" } },
        ]
      }
    ]
  },
]);