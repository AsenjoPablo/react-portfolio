import { BrowserRouter as Router, Route } from "react-router-dom";

// componentes
import Navbar1 from "./components/Navbar";
import Home from "./components/Home";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";

import "./styles/App.css";

function App() {
  return (
    <Router>
      <Navbar1 />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/proyectos">
        <Proyectos />
      </Route>
      <Route path="/contacto">
        <Contacto />
      </Route>
    </Router>
  );
}

export default App;
