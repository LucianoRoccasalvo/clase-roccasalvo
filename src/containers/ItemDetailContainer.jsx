import { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';


export default function ItemDetailContainer() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [result, setResult] = useState([])

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, 'Productos', id);
    getDoc(productRef).then((snapshot) => {
      setResult({ ...snapshot.data(), id: snapshot.id });
    }).catch((error) => {
      setError(error);
    }).finally(() => {
      setLoading(false);
    })

  }, [id]);

  return (
    <>
      <div> {loading && 'Cargando..'} </div>
      <div> {error && 'Error en el pago'} </div>
      <div>
        <ItemDetail product={result} />
      </div>
    </>
  )
}