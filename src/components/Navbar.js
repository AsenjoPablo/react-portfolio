import "../styles/Navbar.css";

import { NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Navbar1 = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="/">Pablo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <NavLink to="/" exact activeClassName="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </NavLink>
          <NavLink to="/proyectos" activeClassName="nav-item active">
            <a className="nav-link" href="/proyectos">
              Proyectos
            </a>
          </NavLink>
          <NavLink to="/contacto" activeClassName="nav-item active">
            <a className="nav-link" href="/contacto">
              Contacto
            </a>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar1;
