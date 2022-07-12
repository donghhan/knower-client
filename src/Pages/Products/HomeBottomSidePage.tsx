import { useState } from "react";
import styled from "styled-components";
import { TbDots } from "react-icons/tb";
import { useQuery } from "react-query";
// Components
import LoadingText from "../../Components/LoadingText";
import GridItem from "../../Components/products/HomeBottomSideMenu/GridItem";
// API
import { FetchBestsellerItems } from "../../api/api";

interface OpenSideMenuProps {
  openSideMenu: boolean;
}

export default function HomeBottomSidePage() {
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);
  const { isLoading, data } = useQuery("BestSellerItems", FetchBestsellerItems);

  return (
    <HomeBottomSidePageSection openSideMenu={openSideMenu}>
      <TitleSection>
        <TbDots />
        <h1>Bestsellers</h1>
        <button
          onClick={() => {
            setOpenSideMenu(!openSideMenu);
          }}
        >
          View all
        </button>
      </TitleSection>
      <ContentsSection>
        {isLoading ? <LoadingText /> : <GridItem fetchedData={data} />}
      </ContentsSection>
    </HomeBottomSidePageSection>
  );
}

const HomeBottomSidePageSection = styled.aside<OpenSideMenuProps>`
  width: 100%;
  height: 80vh;
  background-color: ${(props) => props.theme.colors.white};
  position: fixed;
  bottom: ${(props) => (props.openSideMenu ? "0" : "-70vh")};
  right: 0;
  left: 0;
  overflow-y: hidden;
  transition: 1.25s;
  z-index: 900;
`;

const TitleSection = styled.div`
  height: 10vh;
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 2rem;
    font-weight: normal;
  }

  button {
    justify-self: flex-end;
    text-decoration-line: underline;
  }
`;

const ContentsSection = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
