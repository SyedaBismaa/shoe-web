
import React from "react";
import UseOnline from "../../utils/UseOnline";


 export const Navbar = () => {
  const OnlineStatus = UseOnline();

  return (
    <div>
      <div className="justify-between items-center flex">
        <img className="logo" src="https://static.vecteezy.com/system/resources/previews/005/020/444/original/modern-sneaker-shoe-logo-vector.jpg" alt="Logo" />
        <ul>
          <li>OnlineStatus {OnlineStatus ? "🟢" : "🔴"}</li>
          <li><a href="/">Home</a></li>
          <li ><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        
        </ul>
      </div>
    </div>
  );
};

