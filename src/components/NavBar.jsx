import React, {useEffect, useState} from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap'
import CartWidget from "./CartWidget";
import './MyComponent/MyComponent.css'


export default function NavBar() {
  


  return (
    <div className='header-bg'>
      <Navbar className='navbar .header-bg' collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Resistenza Rossa</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/category/remeras">Remeras</Nav.Link>
              <Nav.Link href="/category/pantalones">Pantalones</Nav.Link>
              <Nav.Link href="/category/buzos">Buzos</Nav.Link>
              <Nav.Link href="/category/camperas">Camperas</Nav.Link>
              <Nav.Link href="/category/zapatos">Zapatos</Nav.Link>
              <Nav.Link href="/item/accesorios">Accesorios</Nav.Link>
              <Nav.Link href="/cart"><CartWidget/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
