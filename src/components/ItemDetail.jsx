import React from 'react'
import { Card, Button } from 'react-bootstrap'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import './MyComponent/MyComponent.css';


const ItemDetail = ({ detalle }) => {

  const { title, description, price, pictureUrl, stock } = detalle;



  return (
    <>
      <div className='navbar bordeItem'>
        <Card className='bordeItem' border="danger" style={{ width: '18rem' }} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
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
            <ItemCount detalle={detalle} />
            <Link to='/cart'><Button> Ver Carro</Button></Link>
          </div>
        </Card>
      </div>
    </>
  )
}

export default ItemDetail