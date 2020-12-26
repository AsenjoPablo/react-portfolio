import styled from "styled-components";
import { useState } from "react";

import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.3));
  color: white;

  width: 100vw;
  max-width: 100%;

  position: absolute;

  & #menu-opener {
    padding: 1.5rem;
    display: none;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    #menu-opener {
      display: flex;
      align-items: flex-start;
    }

    & ul {
      flex-direction: column;
      height: 130px;
      transition: height 2s ease;
    }

    & li {
      justify-content: flex-start;
      align-items: flex-start;
    }

    .hide {
      /* Ocultación en dispositivos móviles */
      display: none;
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

  @media (max-width: 1300px) {
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
            <StyledLink exact to="/">
              Home
            </StyledLink>
          </MenuLink>
          <MenuLink>
            <StyledLink to="/proyectos">Proyectos</StyledLink>
          </MenuLink>
          <MenuLink>
            <StyledLink to="/contacto">Contacto</StyledLink>
          </MenuLink>
        </MenuList>
      </Nav>
    </header>
  );
};

export default Navbar;
