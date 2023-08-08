import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/esm/Nav';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../contexts/UserProvider';
import { useContext } from 'react';

export default function Header() {
  const { user } = useContext(UserContext);

  console.log(user, 'from header');

  return (
    <Navbar data-bs-theme="dark" sticky="top" className="header">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Matrix Fakebook
        </Navbar.Brand>
      </Container>
      { user.username ? (
        <Nav.Item >
          <Nav.Link as={NavLink} to="/logout" className = 'mr-3'>
            Logout
          </Nav.Link>
        </Nav.Item>
      ) : (
        <>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/register">
              Register
            </Nav.Link>
          </Nav.Item>
        </>
      )}
    </Navbar>
  );
}
