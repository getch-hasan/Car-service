import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../../images/logo.png'
import {Link} from 'react-router-dom'
import {  signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
  const [user]=useAuthState(auth)
  const logout = () => {
    signOut(auth);
  };
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" fixed='top' bg="dark" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              width="100"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link href="home#experts">Experts</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item as ={Link} to="/add">
                 Add service
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/manage">
                  manage
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              {
                user? <button onClick={logout}>Logout</button> :<Nav.Link as={Link} eventKey={2} to="/login">
                Login
              </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;