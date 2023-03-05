import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      variant: string;
      primary: string;
      secondary: string;
      background: string;
    };
    font: {
      colors: {
        text: string;
      };
      weight: {
        thin: number;
        extraLight: number;
        light: number;
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
        extrabold: number;
        black: number;
      };
    };
    breakpoints: {
      xsm: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    transitions: {
      time: string;
      type: string;
    };
    spacing: {
      xxxs: string;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
  }
}
