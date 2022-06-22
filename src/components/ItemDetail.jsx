import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { CartContext } from '../context/CartContext'



const ItemDetail = ({ accesorio }) => {

  const [qty, setQty] = useState(1)

  const { isInCart, addItem, } = useContext(CartContext)

  const onAdd = () => {
    alert(`Agregado al carrito ${qty}`)
    isInCart(accesorio.id)
    addItem(accesorio, qty)
  }


  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={accesorio.pictureUrl} />
        <Card.Body>
          <Card.Title>{accesorio.id}{accesorio.title}</Card.Title>
          <Card.Text>
            {accesorio.description}
            {accesorio.price}
          </Card.Text>
          <h5>Unidades: {accesorio.stock}</h5>
          <Button variant="primary">Agregar</Button>
        </Card.Body>
      </Card>
      <ItemCount qty={qty} setQty={setQty} stock={accesorio.stock} onAdd={onAdd} />
    </>
  )
}

export default ItemDetail