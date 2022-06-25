import { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { listado } from '../hooks/listadoItems';


export default function ItemDetailContainer() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [accesorio, setAccesorio] = useState([])

  useEffect(() => {
    setAccesorio({});
    setLoading(true);
    setError(false);

    const nuevoPedido = new Promise((res, rej) => {
      
      setTimeout(() => {
        res([
          (!id) ? res(listado) : res(listado.find(item => item.id === id)),
        ]);
        rej(false);
      }, 2000);
    });

    nuevoPedido.then(res => setAccesorio(res));
    nuevoPedido.catch(error => setError(error));
    nuevoPedido.finally(() => { setLoading(false) });

  },[id]);

  return (
    <>
      <div> {loading && 'Cargando..'} </div>
      <div> {error && 'Error en el pago'} </div>
      <div>
        <ItemDetail accesorio={accesorio} />
      </div>
    </>
  )
}