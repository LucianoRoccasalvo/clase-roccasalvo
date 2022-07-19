import React, { useState, useEffect } from 'react'
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDoc, getFirestore, query, where } from 'firebase/firestore'


export default function ItemListContainer() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, 'Productos');
    if (id) {
      const q = query(productsCollection, where('category', '==', id));
      getDoc(q).then(snapshot => {
        setResult(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      }).catch((error) => {
        setError(error);
      }).finally(() => {
        setLoading(false);
      });
    } else {
      getDoc(productsCollection).then(snapshot => {
        setResult(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      }).catch((error) => {
        setError(error);
      }).finally(() => {
        setLoading(false);
      });
    }
  }, [id]);

  return (
    <>
      <div> {loading && 'Cargando..'} </div>
      <div> {error && 'Error en el pago'} </div>
      <div>
        <ItemList products={result} />
      </div>
    </>
  )
}