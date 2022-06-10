import styled from "styled-components";
import { Link } from "react-router-dom";
import { Path } from "../Utils/path";

export default function Navbar() {
  return (
    <Header>
      <Nav>
        <Logo to={Path.Home}>Knower</Logo>
        <ul className="shopping-menu">
          <li>
            <Menu to={Path.ProductByCategory}>Catalog</Menu>
          </li>
          <li>
            <Menu to={Path.ProductByCategory}>New</Menu>
          </li>
          <li>
            <Menu to={Path.ProductByCategory}>Sale</Menu>
          </li>
        </ul>
        <ul>
          <li>
            <Menu to={Path.Login}>Login</Menu>
          </li>
          <li>
            <Menu to={Path.ProductByCategory}>Carts</Menu>
          </li>
        </ul>
      </Nav>
    </Header>
  );
}

// Styles
const Header = styled.header`
  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  font-family: ${(props) => props.theme.fonts};
  position: fixed;
  top: 0;
  left: 0;
`;

const Nav = styled.nav`
  height: inherit;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: transparent;
  padding-top: 1.5em;

  ul {
    display: flex;
    align-items: center;

    li {
      margin: 0 3rem;
      font-size: 1.05rem;
    }
  }

  .shopping-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5em;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.white};
`;

const Menu = styled(Link)`
  display: inline-block;
  position: relative;
  color: ${(props) => props.theme.colors.white};
`;
