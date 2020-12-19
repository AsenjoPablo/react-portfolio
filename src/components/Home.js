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
          <Row id="home-pad">
            <div>
              <h1>¿Qué te gustaría saber de mí?</h1>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
