import styled from "styled-components";
import image1 from "../static/images/image1.png";
// Components
import BestSeller from "./Products/BestSeller";

export default function Home() {
  return (
    <HomeSection>
      <IntroTitle>Beauty from Minimalism</IntroTitle>
      <SmallText>
        Creating the collection, we were completely <br />
        inspired by home life, the idea of comfort <br />
        and functionality.
      </SmallText>
    </HomeSection>
  );
}

const HomeSection = styled.section`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  background-image: url(${image1});
  background-size: cover;
  background-repeat: no-repeat;
`;

const IntroTitle = styled.span`
  display: inline-block;
  font-size: 2rem;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.colors.white};
`;

const SmallText = styled.p`
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  right: 10%;
  top: 40%;
  transform: translate(-10%, -40%);
`;
