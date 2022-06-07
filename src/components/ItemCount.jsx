    import React, { useState} from 'react';
    
    function ItemCount({inicial, max, onAdd}) {
        
        const [count, setCount] = useState(inicial);
        
        const sumar = () => {
            if (count < max) {
            setCount(count + 1)}
        else {
            alert ('No hay mas en stock')}
        }
        
        const restar = () => {
            count > inicial ? setCount(count - 1) : alert('el minimo es 1')}
    

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

    