
import React from "react";
import UseOnline from "../../utils/UseOnline";


 export const Navbar = () => {
  const OnlineStatus = UseOnline();

  return (
    <div>
      <div className=" anim1 justify-between items-center flex">
        <img className="logo" src="https://static.vecteezy.com/system/resources/previews/005/020/444/original/modern-sneaker-shoe-logo-vector.jpg" alt="Logo" />
        <ul className=" flex justify-center">
          <li className=" list-none mx-10 my-0 text-2xl font-medium">OnlineStatus {OnlineStatus ? "🟢" : "🔴"}</li>
          <li><a  className=" list-none mx-10 my-9 text-2xl font-medium" href="/">Home</a></li>
          <li ><a  className="list-none mx-10 my-9  text-2xl font-medium" href="/about">About Us</a></li>
          <li><a  className="list-none mx-10 my-9  text-2xl font-medium" href="/contact">Contact Us</a></li>
        
        </ul>
      </div>
    </div>
  );
};

