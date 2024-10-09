import React from "react";
import Header from "../components/Header";
const Clothes = () => {
  console.log("Renderizando componente Clothes");
  const navItems = ["T-Shirts and Tops", "Hoodies", "Tank Tops", "Underwear"];
  console.log("Enviando navItems a NavElements:", navItems); // Verifica que el array se imprima correctamente

  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }}>
        
        <p className="pt-15">Aquí encontrarás nuestra colección de ropa.</p>
      </div>
    </>
  );
};

export default Clothes;
