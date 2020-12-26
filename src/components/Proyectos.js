import { data } from "../data-proyectos/data";
import styled from "styled-components";

import phonepic from "../img/phone.jpg";

const ContenedorProyectos = styled.div`
  background: red;

  display: flex;
  flex-direction: column;
  & img {
    width: 100%;
  }

  @media (max-width: 660px) {
    width: 100%;
  }
`;

const Proyectos = () => {
  return (
    <ContenedorProyectos>
      {data.map((data, key) => {
        return (
          <a key={key} href={data.link}>
            <img src={phonepic} />
            <p className="legend">{data.name}</p>
          </a>
        );
      })}
    </ContenedorProyectos>
  );
};

export default Proyectos;
