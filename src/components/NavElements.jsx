import React from "react";
import ButtonNavElements from "../components/ButtonNavElements";

const NavElements = ({ items = [] }) => {
  console.log(items)
  return (
    <nav style={{ marginBottom: "auto" }} className="bg-white shadow-md p-4 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-center items-center space-x-6">
        {items.length > 0 ? (
          items.map((item, index) => (
            <ButtonNavElements key={index} text={item} />
          ))
        ) : (
          <p>No items to display</p>  // En caso de que no haya elementos
        )}
      </div>
    </nav>
  );
};

export default NavElements;
