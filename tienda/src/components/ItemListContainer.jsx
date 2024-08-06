import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { products } from '../data';

const ItemListContainer = () => {
    const { category } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const filterProducts = () => {
            if (category) {
                return products.filter(product => product.category === category);
            }
            return products;
        };
        setFilteredProducts(filterProducts());
    }, [category]);

    return (
        <div>
            <h1>Lista de Productos</h1>
            <ItemList products={filteredProducts} />
        </div>
    );
};

export default ItemListContainer;