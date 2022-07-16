import styled from "styled-components";

interface ISectionTitle {
  titleText: string;
}

export default function SectionTitle({ titleText }: ISectionTitle) {
  return (
    <SectionTitleWrapper>
      <TitleText>{titleText}</TitleText>
    </SectionTitleWrapper>
  );
}

const SectionTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 3em;
`;

const TitleText = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1em;
`;
