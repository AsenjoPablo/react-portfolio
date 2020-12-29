import { useState } from "react";
import styled from "styled-components";

import MainContainer from "./MainContainer";

import Proyectos from "./Proyectos";

// sección de inicio

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;

  width: ${(props) => (props.left ? "50%" : "100%")};
  float: left;
  height: 100%;
  min-height: 100vh;
  transition: width 800ms;
  padding: 10%;

  background: ${(props) =>
    props.left ? "rgba(10,10,10,0.8)" : "rgba(0,0,0,0.8)"};

  justify-content: center;
  align-items: center;

  & h1,
  h2 {
    margin-bottom: 2rem;
  }

  & h1 {
    font-size: 2.2rem;
  }

  & h2 {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  --animate-delay: 0.3s; // la velocidad es un tercio del valor de clase para este elemento

  @media (max-width: 660px) {
    margin-left: 0;
    width: 100vw;
    height: 100%;
  }
`;

const HomeButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: solid 2px white;
  color: white;
  border-radius: 16px;
  padding: 1.2rem;
  font-size: 1.5rem;
  transition: 0.2s ease-in-out; // transición de vuelta
  height: 5rem;
  width: 20rem;

  & * {
    padding: 0.5rem;
  }

  :hover {
    transition: 0.2s ease-in-out; // transición de ida
    padding: 0.9rem;
    margin-left: 30px;
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const WelcomeSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 660px) {
    height: 90vh;
  }
`;

// welcome
const Welcome = (props) => {
  return (
    <WelcomeSection>
      <h1 className="animate__animated animate__fadeIn">¡Hola, mundo!</h1>
      <h2 className="animate__animated animate__fadeIn animate__delay-1s">
        Soy <span style={{ color: "orange" }}>Pablo Asenjo</span>,
        <br />
        Desarrollador FullStack
      </h2>
      <HomeButton
        className="animate__animated animate__slideInLeft"
        onClick={props.switchSide}
      >
        ¿empezamos? <i className="fas fa-arrow-right"></i>
      </HomeButton>
    </WelcomeSection>
  );
};

const HomeProyectos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;

  & div {
    margin: 20px;
  }

  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

// sección "empezada"
const MuestraProyectos = () => {
  return (
    <HomeProyectos>
      <Proyectos />
    </HomeProyectos>
  );
};

const Home = () => {
  // gestión de posicionamiento
  const [left, setLeft] = useState(true);

  const switchSide = () => {
    setLeft(!left);
  };

  return (
    <MainContainer>
      <HomeContent left={left} className="animate__animated animate__fadeIn">
        {left ? <Welcome switchSide={switchSide} /> : <MuestraProyectos />}
      </HomeContent>
    </MainContainer>
  );
};

export default Home;
