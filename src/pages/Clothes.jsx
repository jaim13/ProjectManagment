// Clothes.js
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/CardContainerProducts"; // Asegúrate de tener el componente Card importado
import scrapeProducts from "../DataScrapping/GymSharkScrapping"; // Ajusta la ruta según tu estructura de carpetas

const Clothes = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const scrapedProducts = await scrapeProducts(); // Llama a la función de scraping
      setProducts(scrapedProducts);
    };

    fetchProducts(); // Llama a la función para obtener los productos
  }, []);

  return (
    <>
      <Header />
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
