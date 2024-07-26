import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/componants/Header";
import Body from "./src/componants/Body";
import Footer from "./src/componants/Footer";
import About from "./utils/About";
import "./app.css"
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom"
import Contact from "./utils/Contact";
import Error from "./utils/Error";
import Profile from "./utils/Profile";


const root1 = ReactDOM.createRoot(document.getElementById("root"));


const appRouter = createBrowserRouter([
           {
             path:"/",
             element: <Body/>,
             errorElement: <Error/>,
             children:[
                {
                    path : "about",
                    element: <About/>
                    
                   },
                   {
                     path: "contact",
                     element: <Contact/>
                   },
             ]
           },
          
]);

 function App () {
    return(
        <>
        
        <Header/>
        <Outlet/>
        <Footer/>
        
        </>
    )
 }

 root1.render(<RouterProvider router={appRouter}/>)