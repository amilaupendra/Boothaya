//import styledEngine from "@mui/styled-engine";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavItem } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './navbar.css'


export default function Navigationbar() {
  return (
    <div className="navbar-div">
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Farmer</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
              <NavItem><Link to='/' className="nav-link ">Home</Link></NavItem>
                <NavItem><Link to='/signin' className="nav-link ">Sign in</Link></NavItem>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
