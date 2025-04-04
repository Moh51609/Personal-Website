"use client";

import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`h-15 fixed top-5 left-1/2 transform -translate-x-1/2 w-2/3 z-50 transition duration-300 rounded-full mx-auto ${
        scrolled
          ? "bg-[#0a0a0a]/60 shadow-lg backdrop-blur-sm   "
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center pt-3">
        <div className="text-2xl text-[#0ea5e9] font-poppins">
          <b className="text-3xl font-medium" style={{ fontFamily: "Lobster" }}>
            M
          </b>
          ohamed
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 text-gray-200 font-poppins">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skillset">Skillset</a>
          <a href="#projects">Projekte</a>
          <a href="#impressum">Impressum</a>
        </nav>

        {/* Mobile Burger Menu Button */}
        <div className="lg:hidden pt-1 ">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <div className="absolute top-full rounded-4xl   left-0 w-full bg-[#0a0a0a]/80  shadow-md backdrop-blur-sm   px-6 py-4 flex flex-col space-y-4 lg:hidden z-50 text-white font-poppins">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#skillset" onClick={() => setMenuOpen(false)}>
            Skillset
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projekte
          </a>
          <a href="#impressum" onClick={() => setMenuOpen(false)}>
            Impressum
          </a>
        </div>
      )}
    </header>
  );
}
