import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { Path } from "../../Utils/path";
import { FetchCategories } from "../../api/api";

export default function CatalogChoicePage() {
  const { isLoading, data: categoriesData } = useQuery(
    "categories",
    FetchCategories
  );

  if (isLoading) {
    return <CatalogChoiceSection>Loading...</CatalogChoiceSection>;
  }

  return (
    <CatalogChoiceSection>
      <ul>
        {categoriesData?.results?.map((category) => (
          <li key={category.id}>
            <StyledCatalogLink to={Path.Home}>
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </StyledCatalogLink>
          </li>
        ))}
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
  z-index: 3000;

  ul {
    text-align: center;
    font-size: 5rem;
  }
`;

const StyledCatalogLink = styled(Link)`
  color: ${(props) => props.theme.colors.lightgray};

  &:hover {
    color: ${(props) => props.theme.colors.gray};
  }
`;
