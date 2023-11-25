import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img1 from './Pic.png'
import './Top.css'



function Top() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid>
      
      <Navbar className="bg-body-tertiary" >
        <Container>
          <Navbar.Brand href="#home">
            <img
            id='imge'
              src={img1}
              width="100"
              height="60"
              className="d-inline-block align-top"
              alt="Porche"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar.Brand id="navbarScrollingDropdown" href="#">Porsche</Navbar.Brand> 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Navbar.Brand className='Navitems' href="#">Services</Navbar.Brand> 
            <Navbar.Brand className='Navitems' href="#">Vehicle Purchase</Navbar.Brand> 
            <NavDropdown title="Model" id="navbarScrollingDropdown">
              <NavDropdown.Item className='drowpdown' href="#action3">Panamera</NavDropdown.Item>
              <NavDropdown.Item className='drowpdown'href="#action4">718</NavDropdown.Item>
              <NavDropdown.Item className='drowpdown'href="#action6">Macan</NavDropdown.Item>
              <NavDropdown.Item className='drowpdown'href="#action6">Taycan</NavDropdown.Item>
              <NavDropdown.Item className='drowpdown'href="#action6">Cayenne</NavDropdown.Item>
              <NavDropdown.Item className='drowpdown'href="#action5">911</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Top
