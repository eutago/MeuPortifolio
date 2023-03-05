import styled from "styled-components";

export const Bar = styled.div`
  width: 3px;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  filter: drop-shadow(0 0 0.4em ${({ theme }) => theme.colors.secondary});
`;
