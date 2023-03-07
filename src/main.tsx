import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as StyledProvider } from "./context";

import { App } from "./App";
import { GlobalStyles } from "./styles/global";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledProvider>
        <App />
      </StyledProvider>
    </BrowserRouter>
  </React.StrictMode>
);
