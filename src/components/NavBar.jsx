import React from 'react'
import { Button, Navbar, Container, Nav, FormControl, Form, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import CartWidget from './CartWidget';

<CartWidget/>

function NavBar() {
  return ( 
    <Navbar bg="light" expand="lg">
    <Container fluid>
    <Navbar.Brand href="#">Resistenza Rossa</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Inicio</Nav.Link>
        <Nav.Link href="#action2">Coleccion</Nav.Link>
        <Nav.Link href="#action3">Contacto</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder=""
          className="me-2"
          aria-label="Buscar"
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}

export default NavBar


