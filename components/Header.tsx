import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex flex-row px-[6%] py-[2%] justify-between items-center ">
      {/* Logo */}
      <Link href="/" className="text-[16px] sm:text-[23px] font-medium">
        Logo
      </Link>
      {/* Nav items */}
      <div className="flex flex-row justify-center gap-3 sm:gap-10 items-center">
        <Link
          href="/"
          className="text-[12px] sm:text-[23px] font-medium text-brown-4"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-[12px] sm:text-[23px] font-medium text-brown-4"
        >
          About Us
        </Link>
        <Link
          href="/contact-us"
          className="text-[12px] sm:text-[23px] font-medium text-brown-4"
        >
          Contact Us
        </Link>
      </div>
      {/* Buttons */}
      <button className="font-semibold text-[16px] sm:text-[23px] text-brown-5 px-4 py-1 border-2 border-[#828282] rounded-3xl lg:px-6 ">
        Login
      </button>
    </div>
  );
}

export default Header;
