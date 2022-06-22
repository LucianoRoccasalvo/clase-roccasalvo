import React, { useState, useEffect } from 'react'
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import { listado } from '../hooks/listadoItems';


export default function ItemListContainer() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [ropa, setRopa] = useState([]);

  useEffect(() => {
    setRopa([]);
    setLoading(true);
    setError(false);

    const pedido = new Promise((res, rej) => {
      setTimeout(() => {
        (!id) ? res(listado) : res(listado.filter(item => item.category === id));
        rej(false);
      }, 2000);
    });


    pedido.then(res => setRopa(res));
    pedido.catch(error => setError(error));
    pedido.finally(() => { setLoading(false); });



  }, [id]);

  return (
    <>
      <div> {loading && 'Cargando..'} </div>
      <div> {error && 'Error en el pago'} </div>
      <div>
        <ItemList ropa={ropa} />
      </div>
    </>
  )
}