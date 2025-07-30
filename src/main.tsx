import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.scss'
import Projects from "./pages/Projects.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import Home from "./pages/Home.tsx";
import Publications from "./pages/Publications.tsx";
import Talks from "./pages/Talks.tsx";
import About from "./pages/About.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "publications", Component: Publications },
      { path: "talks", Component: Talks },
      { path: "about", Component: About },
    ]
  },
]);

const root = document.getElementById("root")!;

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

