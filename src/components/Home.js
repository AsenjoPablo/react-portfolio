import styled from "styled-components";

import MainContainer from "./MainContainer";

const HomeLeft = styled.div`
  display: flex;
  flex-direction: column;

  width: 50vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);

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

  @media (max-width: 1300px) {
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.6);

    & * {
      font-size: 1.8rem;
    }
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

const Home = () => {
  return (
    <MainContainer>
      <HomeLeft>
        <h1 className="animate__animated animate__fadeIn">¡Hola, mundo!</h1>
        <h2 className="animate__animated animate__fadeIn animate__delay-1s">
          Soy <span style={{ color: "orange" }}>Pablo Asenjo</span>,
          <br />
          Desarrollador FullStack
        </h2>
        <HomeButton className="animate__animated animate__slideInLeft">
          ¿empezamos? <i className="fas fa-arrow-right"></i>
        </HomeButton>
      </HomeLeft>
    </MainContainer>
  );
};

export default Home;
