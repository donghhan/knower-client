import styled from "styled-components";
import { IModal } from "../../Utils/interface";
import { Link } from "react-router-dom";
import { Path } from "../../Utils/path";

export default function CatalogChoicePage() {
  return (
    <CatalogChoiceSection>
      <ul>
        <li>
          <StyledCatalogLink to={Path.Home}>Tops</StyledCatalogLink>
        </li>
        <li>
          <StyledCatalogLink to={Path.Home}>Bottom</StyledCatalogLink>
        </li>
      </ul>
    </CatalogChoiceSection>
  );
}

const CatalogChoiceSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    text-align: center;
    font-size: 5rem;
  }
`;

const StyledCatalogLink = styled(Link)`
  color: ${(props) => props.theme.colors.gray};
`;
