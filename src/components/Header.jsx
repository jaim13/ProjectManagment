import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-white bg-opacity-30 backdrop-blur-lg p-4 shadow-md fixed w-full z-50" 
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

        {/* Menú para escritorio */}
        <div className="hidden md:flex space-x-4">
          <Link to="/Clothes" className="text-black hover:text-blue-500">
            Clothes
          </Link>
          <Link to="#pricing" className="text-black hover:text-blue-500">
            Suplements
          </Link>
          <Link to="/login" className="text-black hover:text-blue-500">
            Log in
          </Link>
          <Link to="#contact" className="text-black hover:text-blue-500">
            Contact
          </Link>
        </div>

        {/* Botón para menú móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black text-2xl"
          >
            {isOpen ? "X" : "☰"}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <Link
            to="/Clothes"
            className="block text-black hover:bg-blue-100 p-2"
          >
            Clothes
          </Link>
          <Link to="#pricing" className="block text-black hover:bg-blue-100 p-2">
            Pricing
          </Link>
          <Link to="#about" className="block text-black hover:bg-blue-100 p-2">
            About
          </Link>
          <Link to="#contact" className="block text-black hover:bg-blue-100 p-2">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
