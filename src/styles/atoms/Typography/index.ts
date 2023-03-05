import styled, { css } from "styled-components";
import { BaseText } from "../..";

export const StyledText = styled(BaseText)`
  font-family: "Montserrat", sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight};

  ${({ color }) => {
    switch (color) {
      case "primary": {
        return css`
          color: ${({ theme }) => theme.colors.primary};
        `;
      }
      case "secondary": {
        return css`
          color: ${({ theme }) => theme.colors.secondary};
        `;
      }
      case "text": {
        return css`
          color: ${({ theme }) => theme.font.colors.text};
        `;
      }
      case "white": {
        return css`
          color: ${({ theme }) => theme.colors.white};
        `;
      }
    }
  }}

  ${({ fontSize }) => {
    switch (fontSize) {
      case "xxl": {
        return css`
          font-size: 85px;
        `;
      }
      case "xl": {
        return css`
          font-size: 76px;
        `;
      }
      case "lg": {
        return css`
          font-size: 33px;
        `;
      }
      case "md": {
        return css`
          font-size: 24px;
        `;
      }
      case "sm": {
        return css`
          font-size: 18px;
        `;
      }
    }
  }};
`;
