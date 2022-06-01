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
            <Link to={Path.ProductByCategory}>Tops</Link>
          </li>
          <li>
            <Link to={Path.ProductByCategory}>Bottom</Link>
          </li>
        </ul>
        <Logo to={Path.Home}>Knower</Logo>
        <ul>
          <li>
            <Link to={Path.ProductByCategory}>Login</Link>
          </li>
          <li>
            <Link to={Path.ProductByCategory}>Carts</Link>
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

const Logo = styled(Link)``;
