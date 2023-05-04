// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import ChefRecipes from "../Pages/ChefRecipes/ChefRecipes";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoutes from "./PrivateRoutes";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: () => fetch("https://chef-master-server-ten.vercel.app/data"),
  },
  {
    path: "/chef/:id",
    element: (
      <PrivateRoutes>
        <ChefRecipes />
      </PrivateRoutes>
    ),
    loader: ({ params }) =>
      fetch(`https://chef-master-server-ten.vercel.app/data/${params.id}`),
  },
  { path: "/login", element: <Login /> },
  { path: "/registration", element: <Registration /> },
  { path: "/blog", element: <Blog /> },
]);

export default router;
