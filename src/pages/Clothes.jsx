import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Hook para obtener la URL
import Header from "../components/Header";
import Card from "../components/CardContainerProducts";
import FetchAPI_Productos from "../Static/FetchAPI_Productos"

const Clothes = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation(); // Obtén la URL actual
  const searchParams = new URLSearchParams(location.search);
  const brand = searchParams.get("brand");
  const category = searchParams.get("category");
  const item = searchParams.get("item");

  useEffect(() => {
    <FetchAPI_Productos className=""></FetchAPI_Productos>

    fetchProducts(); // Llama a la función para obtener los productos filtrados
  }, [brand, category, item]); // Se ejecuta cada vez que los parámetros cambien

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <div className="flex flex-wrap justify-center">
        {products.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            title={product.title}
            link={product.link}
          />
        ))}
      </div>
    </>
  );
};

export default Clothes;
