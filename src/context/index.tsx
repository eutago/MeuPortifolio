import React, { createContext, FC, useState } from "react";
import { lightTheme } from "../themes/light";
import { Theme, ThemeContext } from "./type";

export const ThemeProvider: FC = ({ children }: any) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
  );
};
