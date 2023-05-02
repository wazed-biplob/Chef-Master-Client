// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import ChefRecipes from "../Pages/ChefRecipes/ChefRecipes";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => fetch("http://localhost:5000/data"),
  },
  {
    path: "/chef/:id",
    element: (
      <PrivateRoutes>
        <ChefRecipes />
      </PrivateRoutes>
    ),
    loader: ({ params }) => fetch(`http://localhost:5000/data/${params.id}`),
  },
  { path: "/login", element: <Login /> },
  { path: "/registration", element: <Registration /> },
]);

export default router;
