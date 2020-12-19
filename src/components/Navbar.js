import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <button
        aria-label="toggle menu on and off"
        type="button"
        className="navbar-toggler"
        data-target="#menu"
        data-toggle="collapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="menu">
        <span
          className="navbar-brand mr-auto shadowed"
          target="_blank"
          rel="noopener noreferrer"
          href="https://asenjopablo.github.io/"
        >
          <span className="orange">&lt; </span>
          Pablo Asenjo
          <span className="orange"> /&gt;</span>
        </span>
        <ul className="navbar-nav shadowed">
          <li className="navbar-item active">
            <a href="/" className="nav-link">
              <i className="fa fa-home" aria-hidden="true"></i> HOME
            </a>
          </li>

          <li className="navbar-item">
            <a href="/proyectos" className="nav-link">
              <i className="fa fa-rocket" aria-hidden="true"></i> PROYECTOS
            </a>
          </li>

          <li className="navbar-item">
            <a href="/contacto" className="nav-link">
              <i className="fa fa-envelope" aria-hidden="true"></i> CONTACTO
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
