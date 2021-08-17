import { useContext } from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import UserContext from '../context/UserContext';


const Header = ({}) => {
  const context = useContext(UserContext);
  const {user,token} = context;
  return(
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://user-images.githubusercontent.com/54505967/101191949-5aae0580-3680-11eb-81c1-90f0778a741b.png"
            width="160"
            height="35"
            className="d-inline-block align-top"
          />{' '}
          {/* React Bootstrap */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!token && <Nav.Link href="/login">Login</Nav.Link>}
            {token && <Nav.Link href="/cart">Cart</Nav.Link>}
            <Nav.Link href="/about">About</Nav.Link>
            {token && <Nav.Link href="/logout">Logout</Nav.Link>}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
