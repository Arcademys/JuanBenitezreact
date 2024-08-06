import React from 'react';
import { Link } from 'react-router-dom';

const ItemComponent = ({ product }) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <Link to={`/product/${product.id}`}>Ver Detalles</Link>
        </div>
    );
};

export default ItemComponent;