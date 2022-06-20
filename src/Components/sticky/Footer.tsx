import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <FooterSection>
      <div className="wrapper">
        <ul>
          <CompanyInfo>
            <span className="company-name">Knower Ltd.</span>
            <span>CEO: 홍길동</span>
            <span>Address: 서울특별시 어쩌구 무슨동 </span>
            <span>Business Registration: 123-45-67890</span>
            <span>E-commerce Permit: 2021-서울강남-1234</span>
          </CompanyInfo>
        </ul>
        <ExtraInfo>
          <div id="policy">
            <span className="tiny-title">Information</span>
          </div>
          <div id="contacts">
            <span className="tiny-title">Contacts</span>
          </div>
        </ExtraInfo>
      </div>
      <Border />
      <CopyRightSection>
        <span>All rights reserved by Knower &reg;</span>
        <span>2022</span>
      </CopyRightSection>
    </FooterSection>
  );
}

const FooterSection = styled.footer`
  width: 100%;
  height: 30vh;
  border: 1px solid green;
  padding: 0 2rem;
  margin-top: 5em;

  .wrapper {
    display: flex;
    justify-content: space-between;

    ul {
      width: inherit;
      display: flex;
      justify-content: space-between;
    }
  }
`;

const CompanyInfo = styled.li`
  display: flex;
  flex-direction: column;

  span {
    margin: 0.25em 0;
  }

  .company-name {
    font-size: 2rem;
    margin-bottom: 0.5em;
  }
`;

const ExtraInfo = styled.div`
  display: flex;
`;

const Border = styled.hr`
  margin-top: 2em;
`;

const CopyRightSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
