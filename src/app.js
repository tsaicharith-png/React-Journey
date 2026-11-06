import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

const Appcomponent = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Appcomponent />,
    children:[
    {
      path:"/about",
      element:<About />
    },
    {
      path:"/",
      element:<Body />
    },
    {
      path:"/contact",
      element:<ContactUs />
    },
    ],
    errorElement:<Error />
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
