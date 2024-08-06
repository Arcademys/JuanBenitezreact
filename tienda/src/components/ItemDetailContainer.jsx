import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import ItemCount from './ItemCount';

const ItemDetailContainer = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = () => {
            const foundProduct = products.find(prod => prod.id === parseInt(productId));
            setProduct(foundProduct);
        };
        fetchProduct();
    }, [productId]);

    return (
        <div>
            {product ? (
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Precio: ${product.price}</p>
                    <ItemCount initial={1} stock={10} />
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;