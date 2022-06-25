import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


let item = [
  { category: 'accesorios', id: '16', title: 'Cartera', description: 'Cartera rosa ', price: '3500', pictureUrl: 'https://static.dafiti.com.ar/p/prune-9462-529614-1-product.jpg', stock: '5' },
  { category: 'accesorios', id: '17', title: 'Bolso', description: 'Bolso de mano ', price: '2900', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_748362-MLA31049586751_062019-W.jpg', stock: '7' },
  { category: 'accesorios', id: '18', title: 'Cartera', description: 'Cartera basica ', price: '2100', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_651002-MLA45509090569_042021-W.jpg', stock: '10' },
]




const ItemDetail = ({ item }) => {

  const { id, title, description, price, pictureUrl, stock } = item;

  const [qty, setQty] = useState(1)

  const { isInCart, addItem} = useContext(CartContext)

  const onAdd = () => {
    isInCart(item.id)
    addItem(item, qty)
  }


  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
            Precio: ${price}
          </Card.Text>
          <h5>Unidades: {stock}</h5>
        </Card.Body>
        <div>
          <ItemCount qty={1} setQty={setQty} stock={stock} onAdd={onAdd} />
        </div>
      </Card>
    </>
  )
}

export default ItemDetail