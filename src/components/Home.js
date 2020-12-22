import styled from "styled-components";
import background from "../img/sky.jpg";

import Navbar from "./Navbar";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

<<<<<<< HEAD
=======
  color: white;

  & * {
    text-align: center;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    background-position: right;
  }
`;

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

  & * {
    padding: 0.5rem;
  }
`;

>>>>>>> 6010c30ed87a23555271579c08495df340706201
const Home = () => {
  return (
    <MainContainer>
      <Navbar />

      <HomeLeft>
        <h1>¡Hola, mundo!</h1>
        <h2>
          Soy <span style={{ color: "orange" }}>Pablo Asenjo</span>,
          <br />
          Desarrollador FullStack
        </h2>
        <HomeButton>
          ¿empezamos? <i className="fas fa-arrow-right"></i>
        </HomeButton>
      </HomeLeft>
    </MainContainer>
  );
};

export default Home;
