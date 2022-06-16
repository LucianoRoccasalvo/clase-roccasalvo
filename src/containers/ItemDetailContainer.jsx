import { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';

let accesorioMock = [
  { categoria: 'accesorios', id: '10', title: 'Collar', description: 'Collar Corazon', price: '$2000', pictureUrl: 'https://oechsle.vteximg.com.br/arquivos/ids/2271518-1500-1500/image-8be487d4a91141968e999d08740a45ca.jpg?v=637492887195300000' },]


export default function ItemDetailContainer() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [accesorio, setAccesorio] = useState({})

  useEffect(() => {
    setAccesorio([]);
    setLoading(true);
    setError(false);

    const nuevoPedido = new Promise((res, rej) => {
      
      setTimeout(() => {
        res([
          (!id) ? res(accesorioMock) : res(accesorioMock.find(item => item.id === id)),
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