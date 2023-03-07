import { createContext, ReactNode } from "react";
import { darkTheme } from "../themes/dark";
import { lightTheme } from "../themes/light";

export type ThemeContextProps = {
  themeState: boolean;
  setThemeState: (theme: boolean) => void;
  toggleTheme: () => any;
};

export const ThemeContext = createContext<ThemeContextProps>({
  themeState: false,
  setThemeState: () => {},
  toggleTheme: () => {}
});
