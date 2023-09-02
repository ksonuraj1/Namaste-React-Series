import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header/Header";
import Body from "./src/Components/Body/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./src/Components/AboutUs/AboutUs";
import ContactUs from "./src/Components/ContactUs/ContactUs";
import Error from "./src/Components/Error/Error";
import RestaurantMenu from "./src/Components/RestaurantMenu/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
