import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-white bg-opacity-30 backdrop-blur-lg p-4 shadow-md fixed w-full z-10"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-blue-700 text-2xl font-bold">
          <img src="/imgs/Logo/logofondo.svg" alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Menu for Desktop */}
        <div className="hidden md:flex space-x-4">
          <a href="#features" className=" text-black hover:text-blue-500">
            Features
          </a>
          <a href="#pricing" className=" text-black hover:text-blue-500">
            Pricing
          </a>
          <a href="#about" className=" text-black hover:text-blue-500">
            About
          </a>
          <a href="#contact" className=" text-black hover:text-blue-500">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" text-black text-2xl"
          >
            {isOpen ? "X" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <a
            href="#features"
            className="block text-black hover:bg-blue-100 p-2"
          >
            Features
          </a>
          <a href="#pricing" className="block text-black hover:bg-blue-100 p-2">
            Pricing
          </a>
          <a href="#about" className="block text-black hover:bg-blue-100 p-2">
            About
          </a>
          <a href="#contact" className="block text-black hover:bg-blue-100 p-2">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
