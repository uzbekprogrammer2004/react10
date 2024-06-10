import React from 'react';

const Single = ({ id }) => {
  return (
    <div className="container">
      <h1>Single Mahsulot</h1>
      <div className="product-details">
        <img src={`https://fakestoreapi.com/products/${id}`} alt="Product" className="product-image" />
        <div className="product-info">
          <h2 className="product-title">Mahsulot nomi</h2>
          <p className="product-description">Mahsulot tavsifi</p>
          <p className="product-price">$</p>
        </div>
      </div>
    </div>
  );
};

export default Single;
