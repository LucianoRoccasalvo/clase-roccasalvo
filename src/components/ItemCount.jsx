import './MyComponent/MyComponent.css';
import React from 'react';
import { useState } from 'react';
import { MyProvider } from '../context/CartContext'
import { useContext } from 'react';


function ItemCount({ stock, inicial, detalle }) {

    const [count, setCount] = useState(1)
    const { isInCart, addItem } = useContext(MyProvider)
    

    const sumar = () => {
        if (count < stock)
            setCount(count + 1)
    }

    const restar = () => {
        count > inicial ? setCount(count - 1) : alert('Es el minimo');

    }

    const onAdd = (count, detalle) => {
        isInCart(detalle.id)
        addItem(detalle, count)
    }


    return (
        <>
            <div className='bordeItem'>
                <div className="item-count">
                    <h2>{(count)}</h2>
                    <button onClick={sumar} disabled={count >= stock}>+</button>
                    <button onClick={restar} disabled={count <= 0}>-</button>
                    <button onClick={() => onAdd()}>Agregar al carrito</button>
                </div>
            </div>
        </>
    );
}

export default ItemCount

