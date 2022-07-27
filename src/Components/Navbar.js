import React from "react";
import logo from "../Assets/logo.png";
import account from "../Assets/account.svg";

function Navbar() {
  return (
    <div className="navbar flex justify-between items-center p-2">
      <div className="flex items-center lg:hidden">
        <div className="hamburger p-2 inline-block cursor-pointer">
          <div className="line h-0.5 w-5 my-1 bg-gray-500"></div>
          <div className="line h-0.5 w-5 my-1 bg-gray-500"></div>
          <div className="line h-0.5 w-5 my-1 bg-gray-500"></div>
        </div>
        <div className="search">search</div>
      </div>

      <div className="logo-navlist flex items-center">
        <img src={logo} alt="microsoft-logo" className="w-28 mx-2" />
        <ul className="hidden lg:flex items-center">
          <li className="mx-2">
            <a href="/">Microsoft 365</a>
          </li>
          <li className="mx-2">
            <a href="/">Office</a>
          </li>
          <li className="mx-2">
            <a href="/">Windows</a>
          </li>
          <li className="mx-2">
            <a href="/">Surface</a>
          </li>
          <li className="mx-2">
            <a href="/">Xbox</a>
          </li>
          <li className="mx-2">
            <a href="/">Support</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center">
        <div className=" hidden lg:block mx-2">All Microsoft</div>
        <div className="search hidden lg:block mx-2">search</div>
        <div className="cart mx-2">cart</div>
        <div className="account mx-2">
          <img src={account} alt="account-button" className="w-8" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
