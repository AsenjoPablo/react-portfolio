import { Container, Row, Col } from "react-bootstrap";

import avatar from "../img/avatar.png";

const NewHome = () => {
  return (
    <Container className="bg-dark">
      <Row>
        <Col style={{ border: "solid 2px red" }}>
          <h1>Pablo</h1>
          <h3>Un desarrollador</h3>
        </Col>
        <Col style={{ border: "solid 2px red" }}>
          <img style={{ width: 400 }} src={avatar}></img>
        </Col>
      </Row>
    </Container>
  );
};

export default NewHome;
