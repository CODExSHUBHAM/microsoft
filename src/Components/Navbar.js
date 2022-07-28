import React, { useState } from "react";
import logo from "../Assets/logo.png";
import account from "../Assets/account.svg";
import search from "../Assets/search-icon.png"
import cart from "../Assets/cart-icon.png"
import close from "../Assets/close.png"


function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const openNavbar = () => {
    if (!isOpen) {
      setIsOpen(true)
    }
    else {
      setIsOpen(false)
    }
  }

  return (

    <>

      <div className="navbar flex justify-between items-center p-2">

        <div className="flex items-center lg:hidden">
          <div className="hamburger p-2 inline-block cursor-pointer" onClick={openNavbar}>
            <div className={`${isOpen ? 'hidden' : 'block'}`}>
              <div className="line h-0.5 w-5 my-1 bg-gray-500"></div>
              <div className="line h-0.5 w-5 my-1 bg-gray-500"></div>
              <div className="line h-0.5 w-5 my-1 bg-gray-500"></div>
            </div>
            <div>
              <img src={close} alt="close-button" className={`w-4 ml-2 ${isOpen ? 'block' : 'hidden'} `} />
            </div>
          </div>
          <div className="search"><img src={search} alt="search-button" className="w-8 ml-2" /></div>
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
          <div className="search hidden lg:block mx-2"><div className="search"><img src={search} alt="search-button" className="w-8 ml-2" /></div></div>
          <div className="cart mx-2"><img src={cart} alt="cart-button" className="w-4 mr-2" /></div>
          <div className="account mx-2">
            <img src={account} alt="account-button" className="w-8" />
          </div>
        </div>
      </div>

      <div className={`mobile-nav bg-gray-100 text-md ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="">
          <li className="p-4 border-b border-[#e6e6e6]"><a href="/">Microsoft 365</a></li>
          <li className="p-4 border-b border-[#e6e6e6]"><a href="/">Office</a></li>
          <li className="p-4 border-b border-[#e6e6e6]"><a href="/">Windows</a></li>
          <li className="p-4 border-b border-[#e6e6e6]"><a href="/">Surface</a></li>
          <li className="p-4 border-b border-[#e6e6e6]"><a href="/">Xbox</a></li>
          <li className="p-4 border-b border-[#e6e6e6]"><a href="/">Support</a></li>
          <li className="p-4 border-b border-[#e6e6e6]"><a href="/">Software</a></li>
          <li className="p-4 border-b border-[#e6e6e6]"><a href="/">PCs & Devices</a></li>
          <li className="p-4 border-b border-[#e6e6e6]"><a href="/">Entertainment</a></li>
          <li className="p-4 border-b border-[#e6e6e6]"><a href="/">Business</a></li>
          <li className="p-4 border-b border-[#e6e6e6]"><a href="/">Developer & IT</a></li>
          <li className="p-4 border-b border-[#e6e6e6]"><a href="/">Other</a></li>
          <li className="p-4 border-b border-black"><a href="/">View Sitemap</a></li>
        </ul>
      </div>

    </>
  );
}

export default Navbar;
