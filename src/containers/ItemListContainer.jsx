  import React, { useState, useEffect } from 'react'
  import ItemList from '../components/ItemList';

  export default function ItemListContainer() {
  const [ropa, setRopa] = useState([]);
    
    useEffect(() => {
      const pedido = new Promise((res, rej) => {
        setTimeout(() => {
          res([
            { id: '1', title: 'Remera', description: 'Remera basica', price: '500', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_885644-MLA43338220284_092020-O.webp'},
            { id: '2', title: 'Pantalon', description: 'Pantalon entallado', price: '1000', pictureUrl: 'data:image/jpeg;base64,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'},
            { id: '3', title: 'Buzo', description: 'Buzo liso ', price: '750', pictureUrl: 'https://static.dafiti.com.ar/p/47st-dft-1183-507007-1-product.jpg'},
            { id: '4', title: 'Campera', description: 'Campera invierno', price: '1500', pictureUrl: 'https://m.media-amazon.com/images/I/91nWz-hOCvL._AC_UL1500_.jpg'},
            { id: '5', title: 'Zapatos', description: 'Zapatos ', price: '1750', pictureUrl: 'https://http2.mlstatic.com/D_Q_NP_733002-MLA49471153954_032022-R.webp'},
          ]);
          rej (false);        
      }, 2000);
    });


  pedido.then (res => setRopa(res));
  pedido.catch (error => console.log ("error:",error));
  pedido.finally(() => { console.log('fin')});


        
  });

  return (
      <div>
        <ItemList ropa ={ropa}/>    
      </div>
    )
    
  }