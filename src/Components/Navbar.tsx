import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link, useLocation, NavLink } from "react-router-dom";
import { Path } from "../Utils/path";
import { PageOpenToggleContext } from "../Context/AuthContext";
import LoginPage from "../Pages/Auth/LoginPage";
import Modal from "react-modal";

export default function Navbar() {
  // Login page open toggle
  // const { toggleOpen, toggleWindowOpen } = useContext(PageOpenToggleContext);
  // const handleLoginPageToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   toggleWindowOpen?.();
  // };

  // Login page open toggle open shit
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const handleLoginModal = () => {
    setToggleModal(!toggleModal);
  };

  // Link font color set to be black if navigating other than Home page
  let { pathname } = useLocation();
  const isHome = pathname === Path.Home;

  return (
    <>
      <Header>
        <Nav>
          <Logo to={Path.Home} $isHome={isHome}>
            Knower
          </Logo>
          <ul className="shopping-menu">
            <li>
              <Menu to={Path.ProductByCategory} $isHome={isHome}>
                Catalog
              </Menu>
            </li>
            <li>
              <Menu to={Path.ProductByCategory} $isHome={isHome}>
                New
              </Menu>
            </li>
            <li>
              <Menu to={Path.ProductByCategory} $isHome={isHome}>
                Sale
              </Menu>
            </li>
          </ul>
          <ul>
            <li>
              <LoginLink $isHome={isHome} onClick={handleLoginModal}>
                Login
              </LoginLink>
            </li>
            <li>
              <>
                <Menu to={Path.ProductByCategory} $isHome={isHome}>
                  Carts (0)
                </Menu>
              </>
            </li>
          </ul>
        </Nav>
      </Header>
      <StyledModal isOpen={toggleModal} closeTimeoutMS={2000}>
        <LoginPage />
      </StyledModal>
    </>
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
      font-size: 0.9rem;
    }
  }

  .shopping-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5em;
  }
`;

const Logo = styled(Link)<{ $isHome: boolean }>`
  font-size: 1.5rem;
  color: ${(props) =>
    props.$isHome ? props.theme.colors.white : props.theme.colors.black};
`;

const Menu = styled(NavLink)<{ $isHome: boolean }>`
  color: ${(props) =>
    props.$isHome ? props.theme.colors.white : props.theme.colors.black};
`;

const LoginLink = styled.button<{ $isHome: boolean }>`
  color: ${(props) =>
    props.$isHome ? props.theme.colors.white : props.theme.colors.black};
`;

const StyledModal = styled(Modal)`
  background: transparent;
`;
