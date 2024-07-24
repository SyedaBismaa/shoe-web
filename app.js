import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/componants/Header";
import Body from "./src/componants/Body";
import Footer from "./src/componants/Footer";

import "./app.css"

const root1 = ReactDOM.createRoot(document.getElementById("root"));
 function App () {
    return(
        <>
        
        <Header/>
        <Body/>
        <Footer/>
        
        </>
    )
 }

 root1.render(<App/>)