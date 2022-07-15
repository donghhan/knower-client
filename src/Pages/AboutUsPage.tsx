import styled from "styled-components";
import InnerSection from "../Components/InnerSection";
import SectionTitle from "../Components/form/SectionTitle";
import aboutUsImage from "../static/images/about_us.png";

export default function AboutUsPage() {
  return (
    <InnerSection>
      <SectionTitle titleText="About Us" />
      <AboutUsWrapper>
        <img src={aboutUsImage} alt="about-us" />
        <div>
          <p>Being old does not mean its value fades away.</p>
          <p>
            Knower desires for the minimalism <br />
            and finds beauty from its oldness.
          </p>
          <p>May God bless you.</p>
          <div className="signature">
            <span>Yours Truly,</span>
            <span>Knower</span>
          </div>
        </div>
      </AboutUsWrapper>
    </InnerSection>
  );
}

const AboutUsWrapper = styled.div`
  max-width: 1500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 3em;

  img {
    width: 400px;
  }

  p {
    margin: 1em 0;
  }

  .signature {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 3em;
  }
`;
