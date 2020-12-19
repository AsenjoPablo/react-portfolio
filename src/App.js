import { BrowserRouter as Router, Route } from "react-router-dom";

// componentes
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";

import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="container-fluid bg-dark text-white">
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
      </div>
    </Router>
  );
}

export default App;
