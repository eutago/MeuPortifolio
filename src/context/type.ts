import { createContext, ReactNode } from "react";
import { darkTheme } from "../themes/dark";
import { lightTheme } from "../themes/light";

export type Theme = typeof lightTheme | typeof darkTheme;

export type ThemeContextProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: lightTheme,
  setTheme: () => {}
});
