import React, { useState } from "react";
import { darkTheme } from "../themes/dark";
import { lightTheme } from "../themes/light";
import { ThemeContext } from "./type";

export const ThemeProvider = ({ children }: any) => {
  const [themeState, setThemeState] = useState(false);

  const toggleTheme = () => {
    if (themeState) {
      console.log("dark");
      return darkTheme;
    } else {
      console.log("light");
      return lightTheme;
    }
  };

  return (
    <ThemeContext.Provider value={{ themeState, setThemeState, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
