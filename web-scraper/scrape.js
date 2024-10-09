const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs'); // Importar el módulo fs

const url = 'https://www.gymshark.com/collections/all-products/mens';

axios.get(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    
    const products = [];

    // Selecciona cada producto
    $('.product-card_product-card__CIqIf').each((index, element) => {
      const title = $(element).find('a').attr('title');
      const link = $(element).find('a').attr('href');
      const image = $(element).find('img').attr('src');

      // Verifica que los valores no sean undefined
      if (title && link && image) {
        products.push({ title, link, image });
      }
    });

    // Guardar los datos en un archivo JSON
    fs.writeFile('products.json', JSON.stringify(products, null, 2), (err) => {
      if (err) {
        console.error('Error writing to file', err);
      } else {
        console.log('Data written to products.json');
      }
    });
  })
  .catch((error) => {
    console.error('Error fetching the data:', error);
  });
