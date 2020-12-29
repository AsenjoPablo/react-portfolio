import styled from "styled-components";

import MainContainer from "./MainContainer";

const ContenedorGeneral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100vh;

  background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5));
`;

const Header = styled.div`
  margin-bottom: 5%;
  & h1 {
    font-weight: 600;
    letter-spacing: 6px;
    padding-bottom: 5%;
    border-bottom: solid 2px white;
  }

  & h2 {
    margin-bottom: 0;
    letter-spacing: 5px;
    font-weight: 500;
  }

  & .orange {
    color: orange;
  }

  @media (max-width: 660px) {
    margin-top: 20%;
    margin-bottom: 10%;
    width: 66%;

    & h1 {
      font-size: 1.8rem;
    }

    & h2 {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
`;

const ContenedorContacto = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

const contactoSize = "10rem";

const Contacto = styled.a`
  cursor: pointer;

  background-color: white;
  border-radius: 16px;
  box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: ${contactoSize};
  height: ${contactoSize};

  margin: 3%;

  transition: all 500ms;

  * {
    margin: 0;
    padding: 0;
  }

  & img {
    width: ${contactoSize / 2};
    height: 64px;
    margin-bottom: 10%;
  }

  & p {
    border-top: solid 1px rgb(10, 10, 10);
    padding-top: 0.4rem;
    letter-spacing: 1px;
    font-size: 1.3rem;
    color: black;
    text-align: center;
  }

  &:hover {
    text-decoration: none;
    transform: scale(1.1) skew(-2deg);
  }

  &:active {
    text-decoration: none;
    transform: scale(0.9) skew(-2deg);
  }

  @media (max-width: 660px) {
    padding: 1.3rem;
  }
`;

// TEMPORIZADOR PARA ANIMACIÓN ANTES DE ABRIR LINK
const timedLeave = (e, link) => {
  e.preventDefault();

  setTimeout(() => {
    console.log("timeout starts");
    window.open(link);
  }, 500);
};

const SeccionContacto = () => {
  const medioContacto = [
    {
      name: "LinkedIn",
      img: "./img/logos/linkedin.svg",
      link: "https://www.linkedin.com/in/pablo-asenjo-83950498/",
    },
    {
      name: "GitHub",
      img: "./img/logos/github.svg",
      link: "https://github.com/AsenjoPablo",
    },
    {
      name: "e-mail",
      img: "./img/logos/email.svg",
      link: "mailto:asenjo.serrano@gmail.com",
    },
  ];

  return (
    <MainContainer>
      <ContenedorGeneral className="animate__animated animate__fadeIn">
        <Header>
          <h1>CONTACTO</h1>
          <h2>
            Construyamos <span className="orange">juntos</span>
          </h2>
        </Header>
        <ContenedorContacto>
          {medioContacto.map((medio, key) => {
            return (
              <Contacto
                key={key}
                href={medio.link}
                onClick={(e) => timedLeave(e, medio.link)}
              >
                <img src={medio.img} alt="" />
                <p>{medio.name}</p>
              </Contacto>
            );
          })}
        </ContenedorContacto>
      </ContenedorGeneral>
    </MainContainer>
  );
};

export default SeccionContacto;
