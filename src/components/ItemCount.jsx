import './MyComponent/MyComponent.css';
import React from 'react';
import { useState } from 'react';


function ItemCount({ qty, setQty, stock, onAdd }) {

    const [count, setCount] = useState(qty)

    const sumar = () => {
        if (count < stock)
        setCount(count + 1)
    }

    const restar = () => {
        count > qty ? setCount (count - 1) : alert ('Es el minimo');

    }
    

    return (
        <>
            <div className='bordeItem'>
                <div className="item-count">
                    <h2>{(count)}</h2>
                    <button onClick={sumar} disabled={count >= stock}>+</button>
                    <button onClick={restar} disabled= {count <= 0}>-</button>
                    <button onClick={() => onAdd()}>Agregar al carrito</button>
                </div>
            </div>
        </>
    );
}

export default ItemCount

