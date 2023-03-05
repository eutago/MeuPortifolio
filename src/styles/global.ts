import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
}
html,
  body {
    color: ${({ theme }) => theme.font.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0;
    margin-bottom: ${(props) => props.theme.spacing.sm};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: transparent;
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    width: 2px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
