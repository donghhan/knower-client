import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation, NavLink, useNavigate } from "react-router-dom";
import { Path } from "../../Utils/path";
import CatalogChoicePage from "../../Pages/Products/CatalogChoicePage";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";

export default function Navbar() {
  // Link font color set to be black if navigating other than Home page
  let { pathname } = useLocation();
  const isHome = pathname === Path.Home;

  // Modal page toggle
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const handleModal = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <>
      <Header>
        <Nav>
          <Logo to={Path.Home} $isHome={isHome}>
            Knower
          </Logo>
          <ul className="shopping-menu">
            <li>
              <Menu
                to={Path.ProductByCategory}
                $isHome={isHome}
                onClick={handleModal}
              >
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
            <li>
              <Menu to={Path.ProductByCategory} $isHome={isHome}>
                Best Seller
              </Menu>
            </li>
          </ul>
          <ul>
            <li>
              <LoginLink $isHome={isHome} to={Path.Login}>
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
      <StyledModal isOpen={toggleModal} closeTimeoutMS={1000}>
        <CloseModalButton onClick={handleModal}>
          <GrClose />
        </CloseModalButton>
        <CatalogChoicePage />
      </StyledModal>
    </>
  );
}

// Styles
const Header = styled.header`
  width: 100%;
  height: 8rem;
  padding: 0 2rem;
  font-family: ${(props) => props.theme.fonts};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  /* background-color: ${(props) => props.theme.colors.white}; */
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

const LoginLink = styled(Link)<{ $isHome: boolean }>`
  color: ${(props) =>
    props.$isHome ? props.theme.colors.white : props.theme.colors.black};
`;

const StyledModal = styled(Modal)`
  background: transparent;
  z-index: 2000;
`;

const CloseModalButton = styled(GrClose)`
  position: absolute;
  top: 30%;
  right: 30%;
  transform: translate(-30%, -30%);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 100;
`;
