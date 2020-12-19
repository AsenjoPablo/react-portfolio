import "../styles/Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand ml-3" href="/">
        &lt; Pablo Asenjo / &gt;
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto mr-3">
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
