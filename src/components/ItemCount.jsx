import React from "react";

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
                <h2>{qty}</h2>
                <button className='btn ${qty > 1 ? "btn-sucess" : "btn-danger"' onClick={handleMinus}>-</button>
                <button className='btn ${qty < stock ? "btn-sucess" : "btn-danger"' onClick={handlePlus}>+</button>
                <button className='btn btn-primary' onClick={() => {onAdd(qty)}}>Agregar al carrito</button>
            </div>
        </>
    );
}

export default ItemCount

