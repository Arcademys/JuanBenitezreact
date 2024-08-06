import React, { useState } from 'react';

const ItemCount = ({ initial, stock }) => {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) setCount(count + 1);
    };

    const handleSubtract = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div>
            <button onClick={handleSubtract}>-</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+</button>
            <button>Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount;