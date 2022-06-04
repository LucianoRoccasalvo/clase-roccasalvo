    import React, { useState} from 'react';
    
    function ItemCount({stock, max, onAdd}) {
        
        const [count, setCount] = useState(stock);
        
        const sumar = () => {
            if (count < max) {
            setCount(count + 1)}
        else {
            alert ('No hay mas en stock')}
        }
        
        const restar = () => {
            count > stock ? setCount(count - 1) : alert('el minimo es 1')}
    

    return (
        <>
        <div>
        Stock : {count}
        <br/>
        <button 
            onClick={sumar}> + 
        </button>
        <button
            onClick={restar}> -
        </button>
        <button
            onClick={() => onAdd(count)}>
            Añadir
        </button>
        <br/>
        </div>
        </>
    );
    }
    export default ItemCount 

    