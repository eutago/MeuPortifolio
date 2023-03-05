import styled from "styled-components";

export const ThemeButton = styled.button`
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.variant};
  cursor: pointer;
  width: 42px;
  height: 42px;
  transition: 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
