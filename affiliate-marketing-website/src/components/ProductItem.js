import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Link to={product.link}>View Details</Link>
    </div>
  );
}

export default ProductItem;