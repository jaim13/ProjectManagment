const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.gymshark.com/collections/mens/products';  // Cambia la URL si es necesario

// Función para obtener los productos
async function scrapeProducts() {
  try {
    // Hacer la solicitud a la página web
    const { data } = await axios.get(url);

    // Cargar el HTML en cheerio
    const $ = cheerio.load(data);

    // Seleccionar todos los elementos de productos usando la clase `product-card_product-card__CIqIf`
    const productElements = $('article.product-card_product-card__CIqIf');

    // Recorrer cada uno de los productos encontrados
    productElements.each((index, element) => {
      // Extraer título y enlace del producto
      const title = $(element).find('a').attr('title');
      const href = $(element).find('a').attr('href');
      const imageUrl = $(element).find('img').attr('src');  // URL de la imagen

      // Mostrar los datos del producto en consola
      console.log({
        title,
        link: href ? `https://www.gymshark.com${href}` : null,  // Asegura que el link sea completo
        image: imageUrl
      });
    });
  } catch (error) {
    console.error('Error al hacer web scraping:', error);
  }
}

// Ejecutar la función de scraping
scrapeProducts();
