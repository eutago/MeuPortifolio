import styled from "styled-components";

export const Circle = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 0.3;
  border-radius: 50%;
`;

export const Circles = styled.div`
  display: grid;
  grid-template-columns: 48px 48px;
  gap: 0.7rem;
`;
