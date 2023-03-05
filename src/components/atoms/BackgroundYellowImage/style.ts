import styled from "styled-components";

export const YellowContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 500px;
  height: 900px;
  position: relative;
  top: -170px;
  border-bottom-left-radius: ${({ theme }) => theme.spacing.sm};
  border-bottom-right-radius: ${({ theme }) => theme.spacing.sm};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
