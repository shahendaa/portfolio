import React, { Component } from 'react'
import {Container,Navbar,Nav,NavDropdown} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

export class Myheader extends Component {
  render() {
    return (
      <div className='navbar'>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Homeifye</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Properties</Nav.Link>
            <Nav.Link href="#">Contact us</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Properties</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Properties Details
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Style Guides
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <h1 className='Text1'>Find the right and best home for your family</h1>
         <Button className='rounded me-2' href="#">Start exploring</Button> 
         <img src="https://cdn.prod.website-files.com/6706114f63d25947a98f7dd3/6706114f63d25947a98f7de4_home-hero.avif" alt="" />
       
      </div>
      
    )
  }
}
