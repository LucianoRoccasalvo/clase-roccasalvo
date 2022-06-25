import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './MyComponent/MyComponent.css'
import { Link } from 'react-router-dom'



const Item = ({ ropa }) => {
  const { id, title, description, price, pictureUrl, stock } = ropa

  return (
    <div className='navbar bordeItem'>
      <Card className='bordeItem' border="danger" style={{ width: '18rem' }} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Card.Header>{title}</Card.Header>
        <Card.Body className='header-bg'>
          <Card.Img className='cardImage img' variant="top" src={pictureUrl} />
          <Card.Title>{description}</Card.Title>
          <Card.Text>
            <span> Unidades disponibles:{stock}</span>
            <br />
            Precio:   ${price}
          </Card.Text>
          <Button variant="outline-danger">
            <Link to={'/item/' + id } className='link'> Ver Producto </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item;