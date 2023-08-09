import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/esm/Nav';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../contexts/UserProvider';
import { useContext } from 'react';

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <Navbar data-bs-theme="dark" sticky="top" className="header">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Matrix Fakebook
        </Navbar.Brand>
        {user.username ? (
          <>
            <form>
              <input type="text" placeholder="search" />
              <button>Search</button>
            </form>
            <Nav.Item className="align-self-end">
              <Nav.Link as={NavLink} to="/logout">
                Logout
              </Nav.Link>
            </Nav.Item>
          </>
        ) : (
          <>
            <Nav.Item className="align-self-end">
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="align-self-end">
              <Nav.Link as={NavLink} to="/register">
                Register
              </Nav.Link>
            </Nav.Item>
          </>
        )}
      </Container>
    </Navbar>
  );
}
