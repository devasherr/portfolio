"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-10 z-[9999] navbar backdrop-blur-md bg-white/15 border border-gray-300 rounded-[50px] shadow-lg h-12">
      {" "}
      <div className="navbar-start">
        {/* Mobile Menu Icon */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <AiOutlineClose className="h-5 w-5" />
            ) : (
              <AiOutlineMenu className="h-5 w-5" />
            )}
          </div>
          {/* Dropdown Menu for Small Screens */}
          {isMenuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content backdrop-blur-md bg-slate-900/80 border border-gray-200 rounded-box z-[1] mt-3 w-[200px] p-2 shadow flex flex-col items-center"
            >
              <li className="w-full text-center">
                <Link href="#">Home</Link>
              </li>
              <li className="w-full text-center">
                <Link href="#education">Education</Link>
              </li>
              <li className="w-full text-center">
                <Link href="#skills">Skills</Link>
              </li>
              <li className="w-full text-center">
                <Link href="#projects">Projects</Link>
              </li>
              <li className="w-full text-center">
                <Link href="#experience">Experience</Link>
              </li>
              <li className="w-full text-center">
                <Link href="#blogs">Blog</Link>
              </li>
              <li className="w-full text-center">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          )}
        </div>
        {/* Navbar Logo */}
        <a className="btn btn-ghost text-xl">ASH3R</a>
      </div>
      {/* Navbar Center for Larger Screens */}
      <div className="navbar-center hidden lg:flex flex-row">
        <ul className="menu menu-horizontal p-1">
          <li className="text-center text-lg">
            <Link href="#">Home</Link>
          </li>
          <li className="text-center text-lg">
            <Link href="#education">Education</Link>
          </li>
          <li className="text-center text-lg">
            <Link href="#skills">Skills</Link>
          </li>
          <li className="text-center text-lg">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="text-center text-lg">
            <Link href="#experience">Experience</Link>
          </li>
          <li className="text-center text-lg">
            <Link href="#blogs">Blog</Link>
          </li>
          <li className="text-center text-lg">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
