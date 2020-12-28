import styled from "styled-components";
import { useState } from "react";

import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8));
  color: white;

  width: 100vw;
  max-width: 100%;
  height: fit-content;
  position: absolute;

  z-index: 1;

  & #menu-opener {
    padding: 1.5rem;
    display: none;
  }

  @media (max-width: 660px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    position: fixed;

    background: black;

    #menu-opener {
      display: flex;
      padding: 1rem;
      align-items: flex-start;
    }

    & ul {
      flex-direction: column;
      justify-content: flex-start;
      height: 100px;
      transition: all 500ms ease;
      background: black;
    }

    & li {
      justify-content: flex-start;
    }

    .hide {
      /* Ocultación en dispositivos móviles */
      height: 0;
      margin: 0;
      padding: 0;
      & * {
        display: none;
      }
    }
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100vw;
  max-width: 100%;

  margin: 0;
  padding: 1rem;

  justify-content: flex-end;

  @media (max-width: 660px) {
    justify-content: center;
  }
`;

const MenuLink = styled.li`
  max-width: 100%;
  margin-left: 4rem;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  padding-right: 2rem;

  font-size: 24px;

  @media (max-width: 660px) {
    margin-left: 0rem;
  }
`;

const activeClassName = "nav-active";
const StyledLink = styled(NavLink).attrs({ activeClassName })`
  color: white;

  &:hover {
    color: #aaa;
    text-decoration: none;
  }
  &.${activeClassName} {
    color: orange;
  }
`;

const Navbar = () => {
  const [showingMenu, setShowingMenu] = useState(false);

  const toggleMenu = () => {
    setShowingMenu(!showingMenu);
  };

  return (
    <header>
      <Nav>
        <div id="menu-opener" onClick={() => toggleMenu()}>
          <i className="fas fa-bars"></i>
        </div>
        <MenuList className={showingMenu ? "" : "hide"}>
          <MenuLink>
            <StyledLink
              exact
              to="/"
              className="animate__animated animate__fadeIn"
            >
              Home
            </StyledLink>
          </MenuLink>
          <MenuLink>
            <StyledLink
              to="/contacto"
              className="animate__animated animate__fadeIn"
            >
              Contacto
            </StyledLink>
          </MenuLink>
        </MenuList>
      </Nav>
    </header>
  );
};

export default Navbar;
