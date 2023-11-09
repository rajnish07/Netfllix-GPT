import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoPage from "./VideoPage";

const Body = (props) => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "browse/:videoId",
      element: <VideoPage />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
