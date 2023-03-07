import styled from "styled-components";

export const Cubes = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 10px);
  grid-template-rows: repeat(6, 10px);
  grid-gap: 0.7rem;
`;

export const BackgroundCube = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 0.3;
`;
