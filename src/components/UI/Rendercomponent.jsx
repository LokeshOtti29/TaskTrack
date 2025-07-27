import React from "react";
import Login from "../Auth/Login";
import AccountInfo from "./AccountInfo";
import { useRoutes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Mytask from "./Mytask";
import SignUp from "../Auth/SignUp";
import Pagenotfound from "./Pagenotfound";
import UpdateInfo from "./UpdateInfo";
import ChangePassword from "./ChangePassword";

const Rendercomponent = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "Dashboard", element: <Dashboard /> },
        {
          path: "AccountInfo",
          element: <AccountInfo />,
          children: [
            { path: "UpdateInfo", element: <UpdateInfo /> },
            { path: "ChangePassword", element: <ChangePassword /> },
          ],
        },
        { path: "Mytask", element: <Mytask /> },
      ],
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Sign-up",
      element: <SignUp />,
    },
    {
      path: "*",
      element: <Pagenotfound />,
    },
  ]);
  return routes;
};

export default Rendercomponent;
