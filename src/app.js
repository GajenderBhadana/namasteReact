import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./component/Header";
import BodyComponent from "./component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/Aboutus";
import Contact from "./component/Contactus";
import Error from "./component/Error";
import ResMenu from "./component/ResMenu";

// JSX

const AppLayout = () => {
  return (
    <div className='app'>
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const appRout = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <ResMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRout} />);
