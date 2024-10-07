import React from "react";


const NavElements = ({ title, items }) => {
  return (
    <div style={{ paddingBottom: "100px" }}>
      <h2>{title}</h2> {/* Muestra el título dinámico */}
      <ul>
        {/* Mapea los elementos que recibe como props y los muestra en una lista */}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavElements;
