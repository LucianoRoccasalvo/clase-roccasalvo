import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './MyComponent/MyComponent.css'
import ItemCount from './ItemCount'


const Item = ({ ropa }) => {
  const { id, title, description, price, pictureUrl } = ropa

  return (
    <div className='bordeItem'>
    <Card className='borde' border="danger" style={{ width: '18rem' }} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Title>{description}</Card.Title>
        <Card.Text>
          {description}
          ${price}
        </Card.Text>
        <ItemCount/>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item;