import styled from "styled-components";

export const StyledMainSocial = styled.a`
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.font.colors.text};

  transition: 0.4s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
