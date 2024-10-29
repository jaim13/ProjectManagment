const fetchProducts = async (brand, category, item) => {
  console.log("Entro en fetch.");
  console.log("Brand: ", brand);
  console.log("Category: ", category);
  console.log("Item: ", item);
  try {
      let apiUrl = '';

      if (brand === 'GymShark' && category === 'men' && item === 'all') {
          apiUrl = 'http://localhost:5000/api/products/gymshark/allitems';
      }

      if (!apiUrl) {
          throw new Error('No se encontró una URL válida para los parámetros dados.');
      }

      const response = await fetch(apiUrl);
      console.log("Response status:", response.status);
      console.log("Content-Type:", response.headers.get('content-type'));

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
          throw new Error('La respuesta no es un JSON válido.');
      }

      const filteredProducts = await response.json();
      console.log("Productos filtrados:", filteredProducts);
      return filteredProducts;

  } catch (error) {
      console.error('Error al obtener productos:', error);
      return [];
  }
};

export default fetchProducts;
