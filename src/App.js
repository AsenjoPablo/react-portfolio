import { BrowserRouter as Router, Route } from "react-router-dom";

// componentes
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Proyectos from "./components/Proyectos";

// estilos
import "./styles/App.css";
import SeccionContacto from "./components/SeccionContacto";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/proyectos" component={Proyectos} />
      <Route path="/contacto" component={SeccionContacto} />
    </Router>
  );
}

export default App;
