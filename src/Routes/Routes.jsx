// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
