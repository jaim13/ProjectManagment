const express = require('express');
const cors = require('cors');
const scrapeProducts = require('./DataScrapping/GymSharkScrapping'); // Ajusta la ruta

const app = express();
const PORT = 5000;

app.use(cors()); // Para permitir peticiones desde tu aplicación React

// Endpoint para obtener los productos
app.get('/api/products', async (req, res) => {
  try {
    const products = await scrapeProducts();
    res.json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error); 
    res.status(500).json({ message: 'Error al obtener productos', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
