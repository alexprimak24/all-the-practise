import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import ProfilePages from "./pages/ProfilesPages.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/profiles",
    element: <ProfilePages />,
    children: [
      {
        path: "/profiles/:profileId",
        element: <ProfilePage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./pages/HomePage.tsx";
// import ProfilePages from "./pages/ProfilesPages.tsx";
// import NotFoundPage from "./pages/NotFoundPage.tsx";
// import ProfilePage from "./pages/ProfilePage.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     errorElement: <NotFoundPage />,
//   },
//   {
//     path: "/profiles",
//     element: <ProfilePages />,
//   },
//   {
//     path: "/profiles/:profileId",
//     element: <ProfilePage />,
//   },
// ]);
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <RouterProvider router={router}></RouterProvider>
//   </React.StrictMode>
// );
