import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [viewState, setViewState] = useState("initial"); // 'initial', 'brands', 'subcategories', 'items'
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Usamos useEffect para cargar el JSON cuando el componente se monta
  useEffect(() => {
    fetch("/Json/CategoriesClothes.json")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/imgs/Logo/logofondo.svg" alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Menú para escritorio */}
          <div className="hidden md:flex items-center space-x-4">
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                Clothes
              </button>
              {/* Aquí el modal recibe las categorías cargadas desde el JSON */}
              <Modal isOpen={isDropdownOpen} categories={categories} />
            </div>

            <Link to="/supplements" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Supplements
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Log in
            </Link>
            <Link to="#contact" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* Botón para menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-500 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Paso 1: Mostrar Clothes */}
            {viewState === "initial" && (
              <button
                onClick={() => setViewState("brands")}
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                Clothes
              </button>
            )}

            {/* Paso 2: Mostrar Marcas */}
            {viewState === "brands" && categories.map((brand, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedBrand(brand);
                  setViewState("subcategories");
                }}
                className="text-gray-700 hover:bg-gray-100 block px-6 py-2 rounded-md text-base font-medium"
              >
                {brand.title}
              </button>
            ))}

            {/* Paso 3: Mostrar Subcategorías */}
            {viewState === "subcategories" && selectedBrand.subcategories.map((subcategory, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedCategory(subcategory);
                  setViewState("items");
                }}
                className="text-gray-700 hover:bg-gray-100 block px-6 py-2 rounded-md text-base font-medium"
              >
                {subcategory.title}
              </button>
            ))}

            {/* Paso 4: Mostrar Links de cada Subcategoría */}
            {viewState === "items" && selectedCategory.items.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="text-gray-700 hover:bg-gray-100 block px-10 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </Link>
            ))}

            {/* Botón de regreso */}
            {viewState !== "initial" && (
              <button
                onClick={() => {
                  if (viewState === "items") {
                    setViewState("subcategories");
                  } else if (viewState === "subcategories") {
                    setViewState("brands");
                    setSelectedBrand(null);
                  } else {
                    setViewState("initial");
                  }
                  setSelectedCategory(null);
                }}
                className="text-blue-500 hover:underline px-3 py-2 text-base font-medium"
              >
                ← Volver
              </button>
            )}

            {/* Otros enlaces del menú móvil */}
            <Link to="/supplements" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              Supplements
            </Link>
            <Link to="/login" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              Log in
            </Link>
            <Link to="#contact" className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
