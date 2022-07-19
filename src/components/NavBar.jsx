import React from 'react'
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
              <Nav.Link href="/category/remeras">remeras</Nav.Link>
              <Nav.Link href="/category/pantalones">pantalones</Nav.Link>
              <Nav.Link href="/category/buzos">buzos</Nav.Link>
              <Nav.Link href="/category/camperas">camperas</Nav.Link>
              <Nav.Link href="/category/zapatos">zapatos</Nav.Link>
              <Nav.Link href="/item/accesorios">accesorios</Nav.Link>
              <Nav.Link href="/cart"><CartWidget/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
