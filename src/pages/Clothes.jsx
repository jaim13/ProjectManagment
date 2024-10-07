import React from 'react';
import Header from '../components/Header'
const Clothes = () => {
    console.log('Renderizando componente Clothes');
    return (
        <>
        <Header/>
        <div style={{paddingTop:"100px"}}>
        <h1>Ropa</h1>
        <p>Aquí encontrarás nuestra colección de ropa.</p>
        <ul>
          <li>Camisetas</li>
          <li>Pantalones</li>
          <li>Chaquetas</li>
        </ul>
        </div>
      </>
    );
  }
export default Clothes;
