import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MainPage from "./pages/MainPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import DappInfo from "./pages/DappInfo.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,

    children: [
      {
        path: "/:dAppName",
        element: <DappInfo />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
