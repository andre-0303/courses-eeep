import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Course } from "../pages/Course";
import NotFound from "../pages/NotFound";
import { Layout } from "../components/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />, // Layout base com header/footer
    children: [
      { path: "/", element: <Home /> },
      { path: "/curso/:id", element: <Course /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);