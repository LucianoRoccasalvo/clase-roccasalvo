    import React from 'react'
    import { Card, Button } from 'react-bootstrap'
    
    const ItemDetail = ({accesorio}) => {
      const {id, title, description, price, pictureUrl } = accesorio
    
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
              <Card.Title>{id}{title}</Card.Title>
              <Card.Text>
                {description}
                {price}
              </Card.Text>
              <Button variant="primary">Agregar</Button>
            </Card.Body>
        </Card>
      )
    }
    
    export default ItemDetail;