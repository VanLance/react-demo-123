import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Sidebar() {
  return (
    <Navbar sticky='top' className='sidebar flex-column'>
      <Nav.Item>
        <Nav.Link href='/'>Matrix Classroom</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/'>Posts</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/userpage'>Userpage</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/login'>Login</Nav.Link>
      </Nav.Item>
    </Navbar>
  )
}
