import styled from "styled-components";
import background from "../img/sky.jpg";

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

  color: white;

  & * {
    text-align: center;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    background-position: right;
  }
`;

export default MainContainer;
