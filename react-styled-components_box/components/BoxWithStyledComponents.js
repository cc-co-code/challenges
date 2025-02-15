import styled from "styled-components";

const StyledBox = styled.div`
  background-color: ${({ $isBlack }) => ($isBlack ? "black" : "green")};

  &:hover {
    background-color: ${({ $isBlack }) =>
      $isBlack ? "lightgrey" : "lightgreen"};
  }
`;
export default function BoxWithStyledComponents({ $isBlack }) {
  return <StyledBox $isBlack={$isBlack} />;
}
