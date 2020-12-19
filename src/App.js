import { BrowserRouter as Router, Route } from "react-router-dom";

// componentes
import Navbar1 from "./components/Navbar";
import Home from "./components/Home";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";

import { Container, Row } from "react-bootstrap";

import "./styles/App.css";

function App() {
  return (
    <Container fluid id="supercontainer">
      <Router>
        <Row>
          <Container fluid>
            <Navbar1 />
          </Container>
        </Row>
        <Row>
          <Container fluid>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/proyectos">
              <Proyectos />
            </Route>
            <Route path="/contacto">
              <Contacto />
            </Route>
          </Container>
        </Row>
      </Router>
    </Container>
  );
}

export default App;
