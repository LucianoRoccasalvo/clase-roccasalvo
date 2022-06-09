import React, { useState, useEffect } from 'react'
import ItemDetail from '../components/ItemDetail';

export default function ItemDetailContainer() {

    const [accesorio, setAccesorio] = useState({})

    useEffect(() => {
        const nuevoPedido = new Promise((res, rej) => {
            setTimeout(() => {
              res([
                { id:'10', title: 'Collar', description: 'Collar Corazon', price: '$2000', pictureUrl: 'https://oechsle.vteximg.com.br/arquivos/ids/2271518-1500-1500/image-8be487d4a91141968e999d08740a45ca.jpg?v=637492887195300000'},
              ]);
              rej (false);        
          }, 2000);
        });

        nuevoPedido.then (res => setAccesorio(res));
        nuevoPedido.catch (error => console.log ("error:",error));
        nuevoPedido.finally(() => { console.log('fin')});
        });

return (
    <div>
        <ItemDetail accesorio = {accesorio}/>
    </div>
  )
}