// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import ChefRecipes from "../Pages/ChefRecipes/ChefRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => fetch("http://localhost:5000/data"),
  },
  {
    path: "/chef/:id",
    element: <ChefRecipes />,
    loader: ({ params }) => fetch(`http://localhost:5000/data/${params.id}`),
  },
]);

export default router;
