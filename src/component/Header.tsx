import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/esm/Nav';

export default function Header() {
  return (
    <Navbar data-bs-theme="dark" sticky="top" className="header">
      <Container>
        <Navbar.Brand>Matrix Fakebook</Navbar.Brand>
      </Container>
      <Nav.Item>
        <Nav.Link href='/login'>Login</Nav.Link>
      </Nav.Item>
    </Navbar>
  );
}
