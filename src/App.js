import "./styles/App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

// componentes
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";

function App() {
  return (
    <Router>
      <Navbar />

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
