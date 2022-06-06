import styled from "styled-components";
import { Link } from "react-router-dom";
import { Path } from "../Utils/path";
// Pages
import ProductByCategory from "../Pages/Products/ProductCategory";

export default function Navbar() {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Menu to={Path.ProductByCategory}>Tops</Menu>
          </li>
          <li>
            <Menu to={Path.ProductByCategory}>Bottom</Menu>
          </li>
        </ul>
        <Logo to={Path.Home}>Knower</Logo>
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
  border: 1px solid red;
  font-family: ${(props) => props.theme.fonts};
  position: fixed;
  top: 0;
  left: 0;
`;

const Nav = styled.nav`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    align-items: center;

    li {
      margin: 0 3rem;
      font-size: 1.05rem;
    }
  }
`;

const Logo = styled(Link)`
  font-size: 3rem;
`;

const Menu = styled(Link)`
  display: inline-block;
  position: relative;
  color: ${(props) => props.theme.colors.black};

  &:after {
    content: "";
    position: absolute;
    bottom: -0.15rem;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: ${(props) => props.theme.colors.black};
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover {
    &:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;
