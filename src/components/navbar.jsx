import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { alignPropType } from 'react-bootstrap/esm/types';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import LoginForm from './modal';

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
   
     

      <Container>
        <Navbar.Brand href="#home">Khana Khajana 🍽 </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Favourites</Nav.Link>
            <NavDropdown title="Contact-Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Email: khanakhajana@gmail.com</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Phone Number: +91 xxxx xxx xxx
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Folow us on insta @khana_khajana </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-auto" activeKey="/home">
            <LoginForm />
            </Nav>
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
  );
}

export default CustomNavbar;