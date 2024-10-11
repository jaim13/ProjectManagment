
const fetchProducts =  (apiUrl) => {
    if ()
    try {
      // Construye la URL de la API con los parámetros
      let apiUrl = `http://localhost:5000/api/products?brand=${brand}&category=${category}&item=${item}`;

      const response = await fetch(apiUrl); // Llama a la API con los filtros
      const filteredProducts = await response.json();
      setProducts(filteredProducts);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

export default fetchProducts;