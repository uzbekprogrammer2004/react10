import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './product.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        console.log(response);
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Ma\'lumotlarni olishda xatolik: ', error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Mahsulotlar</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-info">
              <h2 className="product-title">{product.title}</h2>
              <div className="product_div">
              <p className="product-price">{product.price} $ </p>
              <Button key={product.id} variant="contained">Batafsil...</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
