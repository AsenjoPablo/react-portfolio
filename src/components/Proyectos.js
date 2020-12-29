import { data } from "../data-proyectos/spotlight";
import { otros } from "../data-proyectos/otrosProyectos";
import styled from "styled-components";

var valor = 15;

var proporcionProyecto = `${valor}rem`;

var proporcionProyectoEnlace = `${valor / 1.2}rem`;

const ContenedorGeneral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const CabeceraProyectos = styled.div`
  letter-spacing: 3px;
  text-shadow: 2px 2px 2px black;

  & h1 {
    font-weight: 600;
    padding: 2rem;
    border-bottom: solid 2px white;
  }

  & h3 {
    margin-bottom: 0;
  }

  & span {
    color: orange;
  }
`;

const ContenedorProyectos = styled.div`
  /* display: flex;
  flex-direction: row; */
  display: grid;
  grid-template-columns: repeat(auto-fit, 30rem);

  justify-content: center;
  align-items: center;
  padding: 1.3rem;
  border-radius: 16px;

  @media (max-width: 660px) {
    flex-direction: column;
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

const Proyecto = styled.a`
  cursor: pointer;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  color: white;

  padding: 1.3rem;
  margin: 5%;
  border-radius: 16px;

  transition: all 300ms;
  & img {
    width: ${proporcionProyecto};
    height: ${proporcionProyecto};
    border-radius: 16px;
    box-shadow: 2px 2px 15px black;

    margin-bottom: 2rem;

    object-fit: cover;
  }

  & h2 {
    border-bottom: solid 1px white;
    padding-bottom: 0.5rem;
    text-shadow: 2px 2px 2px black;
    font-size: 1.3rem;
  }

  &:hover {
    text-decoration: none;
    transform: scale(1.1) skew(-1deg);
  }

  @media (min-width: 960px) {
    // efecto push solo aplica en resolución mayor para evitar drag en mobile
    &:active {
      text-decoration: none;
      transform: scale(0.9) skew(-8deg);
    }
  }

  @media (max-width: 660px) {
    padding-bottom: 2.5rem;
    img {
      width: ${proporcionProyectoEnlace};
      height: ${proporcionProyectoEnlace};
    }
  }
`;

const EnlaceProyecto = styled.button`
  border: none;
  color: white;
  background-color: #007bd3;
  width: ${proporcionProyectoEnlace};
  height: 3rem;
  border-radius: 16px;
  align-items: center;
  justify-content: center;

  letter-spacing: 4px;
  font-weight: bold;
  font-size: 1rem;

  cursor: pointer;
  box-shadow: 5px 8px 15px black;

  transition: all 500ms;

  &:hover {
    box-shadow: 2px 2px 20px black;
  }

  @media (max-width: 660px) {
    height: 3rem;
    width: 13rem;

    font-size: 1rem;
  }
`;

const Proyectos = () => {
  return (
    <ContenedorGeneral>
      <CabeceraProyectos className="animate__animated animate__fadeIn animate__delay-1s">
        <h1>SPOTLIGHT</h1>
        <h3>
          Mis últimos <span>proyectos:</span>
        </h3>
      </CabeceraProyectos>
      <ContenedorProyectos className="animate__animated animate__fadeIn animate__delay-1s">
        {data.map((data, key) => {
          return (
            <Proyecto key={key} onClick={(e) => timedLeave(e, data.link)}>
              <img src={data.img} alt="imagen del proyecto" />
              <h2>{data.name}</h2>
              <EnlaceProyecto href={data.link}>
                VISÍTALO <i className="fas fa-external-link-alt"></i>
              </EnlaceProyecto>
            </Proyecto>
          );
        })}
      </ContenedorProyectos>
      <CabeceraProyectos className="animate__animated animate__fadeIn animate__delay-1s">
        <h1>Otros</h1>
        <h3>Proyectos menores</h3>
      </CabeceraProyectos>
      <ContenedorProyectos className="animate__animated animate__fadeIn animate__delay-1s">
        {otros.map((data, key) => {
          return (
            <Proyecto key={key} onClick={(e) => timedLeave(e, data.link)}>
              <img src={data.img} alt="imagen del proyecto" />
              <h2>{data.name}</h2>
              <EnlaceProyecto href={data.link}>
                VISÍTALO <i className="fas fa-external-link-alt"></i>
              </EnlaceProyecto>
            </Proyecto>
          );
        })}
      </ContenedorProyectos>
    </ContenedorGeneral>
  );
};

export default Proyectos;
