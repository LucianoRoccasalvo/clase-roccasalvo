import React from 'react';

function ItemCount({ qty, setQty, stock, onAdd }) {

    const handleMinus = () => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    }
    const handlePlus = () => {
        if (qty < stock) {
            setQty(qty + 1);
        }
    }


    return (
        <>
            <div className="item-count">
                <button className={'btn ${qty > 1 ? "btn-sucess" : "btn-danger"}'} onClick={handleMinus}>-</button>
                    <span>{qty}</span>
                <button className={'btn ${qty < stock ? "btn-sucess" : "btn-danger"}'} onClick={handlePlus}>+</button>
                <button className='btn btn-primary' onClick={() => {onAdd()}}>Agregar al carrito</button>
            </div>
        </>
    );
}

export default ItemCount

