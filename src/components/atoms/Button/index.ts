import styled, { css } from "styled-components";
import { IButtonProps } from "./types";

export const StyledButton = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  outline: none;
  border: none;
  gap: 1rem;

  transition: 0.2s;

  &:hover {
    padding: 1.5rem;
  }

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "lg": {
        return css`
          padding: 1rem 2rem;
        `;
      }
      case "md": {
        return css`
          padding: 0.7rem 1.5rem;
        `;
      }
    }
  }}

  ${({ borderRadius }) => {
    switch (borderRadius) {
      case "sm": {
        return css`
          border-radius: 8px;
        `;
      }
      case "xs": {
        return css`
          border-radius: 5px;
        `;
      }
    }
  }}
`;
