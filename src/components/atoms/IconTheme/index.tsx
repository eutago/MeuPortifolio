import React, { useContext, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "../../../context/type";
import { ThemeButton } from "./styles";

export const SwitchTheme = () => {
  const { themeState, setThemeState, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeButton
      onClick={() => {
        setThemeState(!themeState);
      }}
    >
      {themeState ? <FiMoon /> : <FiSun />}
    </ThemeButton>
  );
};
