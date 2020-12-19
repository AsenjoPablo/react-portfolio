import "../styles/Home.css";

import { Container, Row, Col } from "react-bootstrap";

import avatar from "../img/avatar.png";

// img imports

const Home = () => {
  return (
    <Container
      fluid
      id="main-home-container"
      className="m-0 p-0 animate__animated animate__fadeIn animate__faster"
    >
      <Row>
        <Col lg={true}>
          <div id="preguntas" className="animate__animated animate__fadeInLeft">
            <Row id="intro">
              <div className="avatar-container">
                <img src={avatar} className="avatar" />
              </div>
              <div>
                <h1>¡Hola, mundo!</h1>
                <h3>
                  Soy Pablo, desarrollador{" "}
                  <span className="accent">FullStack</span>
                </h3>
              </div>
            </Row>
            <Row id="intro">
              <div className="avatar-container">
                <img src={avatar} className="avatar" />
              </div>
              <div>
                <h3>¿Qué te gustaría saber de mí?</h3>
              </div>
            </Row>
          </div>

          <div
            id="respuestas"
            className="animate__animated animate__fadeInRight"
          >
            <Row id="respuesta-home">
              <a href="/proyectos">
                <h3>
                  Quiero ver tus proyectos <i className="fas fa-reply ml-3"></i>
                </h3>
              </a>
            </Row>
            <Row id="respuesta-home">
              <a href="/proyectos">
                <h3>
                  Quiero ver tu currículum <i class="fas fa-reply ml-3"></i>
                </h3>
              </a>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
