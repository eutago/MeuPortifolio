import React, { useContext, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeButton } from "./styles";

export const SwitchTheme = () => {
  const [themeState, setThemeState] = useState(true);

  return (
    <ThemeButton onClick={() => setThemeState(!themeState)}>
      {themeState ? <FiMoon /> : <FiSun />}
    </ThemeButton>
  );
};
