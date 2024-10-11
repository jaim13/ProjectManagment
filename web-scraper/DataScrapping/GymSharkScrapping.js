// GymSharkScrapping.js
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.gymshark.com/collections/all-products/mens';

// Función para obtener los productos
async function scrapeProducts() {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const productElements = $('article.product-card_product-card__CIqIf');

    const products = [];
    productElements.each((index, element) => {
      const title = $(element).find('a').attr('title');
      const href = $(element).find('a').attr('href');
      const imageUrl = $(element).find('img').attr('src');

      if (title && href && imageUrl) {
        products.push({
          title,
          link: `https://www.gymshark.com${href}`,
          image: imageUrl,
        });
      }
    });
    return products;
  } catch (error) {
    console.error('Error al hacer web scraping:', error);
    return []; // Retorna un array vacío en caso de error
  }
}

module.exports = scrapeProducts; // Asegúrate de que esta línea esté aquí
