import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.3));
  color: white;

  width: 100vw;
  max-width: 100%;

  position: absolute;
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

  @media (max-width: 600px) {
    margin-left: 0rem;
  }
`;

const Link = styled.a`
  color: white;

  &:hover {
    color: #aaa;
    text-decoration: none;
  }
`;

const Navbar = () => {
  return (
    <header>
      <Nav>
        <MenuList>
          <MenuLink>
            <Link href="/">Home</Link>
          </MenuLink>
          <MenuLink>
            <Link href="/proyectos">Proyectos</Link>
          </MenuLink>
          <MenuLink>
            <Link href="contacto">Contacto</Link>
          </MenuLink>
        </MenuList>
      </Nav>
    </header>
  );
};

export default Navbar;
