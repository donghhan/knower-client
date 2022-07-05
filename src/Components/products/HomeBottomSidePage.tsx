import { useState, useEffect } from "react";
import styled from "styled-components";
import { TbDots } from "react-icons/tb";
import Slider from "react-slick";
import { useQuery } from "react-query";
// Interface
import { ISlick } from "../../Utils/interface";
// API
import { FetchBestsellerItems } from "../../api/api";

interface OpenSideMenuProps {
  openSideMenu: boolean;
}

export default function HomeBottomSidePage() {
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);
  const { isLoading, data } = useQuery("BestSellerItems", FetchBestsellerItems);
  console.log(isLoading, data);

  const sliderSettings: {} = {
    className: "content-grid",
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 5,
    swipeToSlide: true,
  };

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
        <Slider {...sliderSettings}></Slider>
      </ContentsSection>
    </HomeBottomSidePageSection>
  );
}

const HomeBottomSidePageSection = styled.aside<OpenSideMenuProps>`
  width: 100%;
  height: 70vh;
  background-color: ${(props) => props.theme.colors.white};
  position: fixed;
  bottom: ${(props) => (props.openSideMenu ? "0" : "-60vh")};
  right: 0;
  left: 0;
  overflow-y: hidden;
  transition: 1.25s;
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

const ContentsSection = styled.div``;
