import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Header() {
  return (
    <Navbar bg="gray" sticky="top" className="header">
      <Container>
        <Navbar.Brand>Matrix Fakebook</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
