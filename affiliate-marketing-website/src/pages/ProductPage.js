import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../api/products';
import './ProductPage.css';

const ProductPage = () => {
    const { id } = useParams();
    const product = products.find(item => item.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-page">
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <h2>Price: ${product.price}</h2>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductPage;