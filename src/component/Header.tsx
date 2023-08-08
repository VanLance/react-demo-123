import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/esm/Nav';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar data-bs-theme="dark" sticky="top" className="header">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>Matrix Fakebook</Navbar.Brand>
      </Container>
      <Nav.Item>
        <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
      </Nav.Item>
    </Navbar>
  );
}
