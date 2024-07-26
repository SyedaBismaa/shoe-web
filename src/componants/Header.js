
import React from "react";
import { useOnline } from "./utils/UseOnline";

const Header = () => {
  const OnlineStatus = useOnline();

  return (
    <div>
      <div className="justify-between items-center flex">
        <img className="logo" src="https://static.vecteezy.com/system/resources/previews/005/020/444/original/modern-sneaker-shoe-logo-vector.jpg" alt="Logo" />
        <ul>
          <li>OnlineStatus {OnlineStatus ? "🟢" : "🔴"}</li>
          <li>Home</li>
          <li ><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
