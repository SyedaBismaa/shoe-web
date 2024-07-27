import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./src/componants/Navbar";
import Body from "./src/componants/Body";
import Footer from "./src/componants/Footer";
import About from "./utils/About";
import "./app.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./utils/Contact";
import Error from "./utils/Error";
import About from "./utils/About";


const root1 = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Use App as the root element
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        
      },
      {
        path: "/about",
        element: <About />,
      
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      
    ],
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

root1.render(<RouterProvider router={appRouter} />);
