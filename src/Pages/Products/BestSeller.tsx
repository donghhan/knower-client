import styled from "styled-components";

export default function BestSeller() {
  return <BestSellerSection></BestSellerSection>;
}

const BestSellerSection = styled.section`
  position: absolute;
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  height: 70vh;
`;
