import styled from "styled-components";
import background from "../img/sky.jpg";

const MainContainer = styled.div`
  max-width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  background: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: white;

  transition: all 1s;

  & * {
    text-align: center;
  }

  @media (max-width: 660px) {
    flex-direction: column;
    background-position: right;
  }
`;
export default MainContainer;
