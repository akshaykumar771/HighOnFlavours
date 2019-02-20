import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import './Navbar.css'
export default function Navbars() {
  return (
    <React.Fragment>
    <Navbar bg="dark" expand="lg" className = "background">
  <Navbar.Brand href="#home">
  <span className = "nav-brand">HighOnFlavours </span>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#recipe">
        <span className ="nav-item">Recipe</span>
        </Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-danger">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</React.Fragment>
  );
}
