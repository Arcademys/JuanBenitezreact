import React from 'react';
import ItemComponent from './ItemComponent'; // Asegúrate de que la ruta sea correcta

const ItemList = ({ products }) => {
    return (
        <div>
            {products.map(product => (
                <ItemComponent key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ItemList;