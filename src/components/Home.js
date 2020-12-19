import "../styles/Home.css";

import { Container, Row, Col } from "react-bootstrap";

// img imports

const Home = () => {
  return (
    <Container fluid id="main-home-container" className="m-0 p-0">
      <Row>
        <Col
          lg={true}
          className="animate__animated animate__fadeInLeft p-0 m-0"
        >
          <Row id="intro">
            <div>
              <h1>¡Hola, mundo!</h1>
              <h3>
                Soy Pablo, desarrollador{" "}
                <span className="accent">FullStack</span>
              </h3>
            </div>
          </Row>
          <Row id="intro">
            <div>
              <h3>¿Qué te gustaría saber de mí?</h3>
            </div>
          </Row>
          <div id="respuestas">
            <Row id="respuesta-home">
              <div>
                <h3>Quiero ver tus proyectos</h3>
              </div>
            </Row>
            <Row id="respuesta-home">
              <div>
                <h3>Quiero ver tu currículum</h3>
              </div>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
