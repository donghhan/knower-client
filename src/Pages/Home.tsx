import styled from "styled-components";
import image1 from "../static/images/image1.png";
import { Link } from "react-router-dom";
// Components
import HomeBottomSidePage from "./Products/HomeBottomSidePage";
import { Path } from "../Utils/path";

export default function Home() {
  return (
    <HomeSection>
      <IntroTitle>Beauty from Minimalism</IntroTitle>
      <LearnMoreLink to={Path.AboutUs}>About Us</LearnMoreLink>
      <HomeBottomSidePage />
    </HomeSection>
  );
}

const HomeSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${image1});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

const IntroTitle = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  position: absolute;
  top: 30%;
  left: 45%;
  transform: translate(-30%, -50%);
  color: ${(props) => props.theme.colors.white};

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    left: 45%;
  }

  @media screen and (max-width: 768px) {
    left: 40%;
    font-size: 1rem;
  }
`;

const LearnMoreLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  right: 10%;
  top: 30%;
  transform: translate(-10%, -40%);
  text-decoration: underline;

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 0.95rem;
  }

  @media screen and (min-width: 426px) and (max-width: 768px) {
    font-size: 0.65rem;
  }

  @media screen and (max-width: 425px) {
    font-size: 0.65rem;
    top: 40%;
  }
`;

const SidePageSection = styled.div`
  position: relative;
`;
