import "../styles/Home.css";

import { Container, Row, Col } from "react-bootstrap";

// img imports

const Home = () => {
  return (
    <Container fluid id="main-home-container">
      <Row>
        <Col lg={true} className="animate__animated animate__fadeInLeft">
          <Row id="intro">
            <div>
              <h1>¡Hola, mundo!</h1>
              <h3>
                Soy Pablo, desarrollador{" "}
                <span className="accent">FullStack</span>
              </h3>
            </div>
          </Row>
          <Row id="home-pad">
            <div>
              <h1>¿Qué te gustaría saber de mí?</h1>
            </div>
          </Row>
        </Col>
        <Col lg={true} className="animate__animated animate__fadeInRight"></Col>
      </Row>
    </Container>
  );
};

export default Home;
