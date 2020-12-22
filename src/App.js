import { BrowserRouter as Router, Route } from "react-router-dom";

// componentes
import Home from "./components/Home";

// estilos
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/proyectos">
        <h1>proyectos</h1>
      </Route>
      <Route path="/contacto">
        <h1>contacto</h1>
      </Route>
    </Router>
  );
}

export default App;
