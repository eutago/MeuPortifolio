import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/";

import { App } from "./App";
import { GlobalStyles } from "./styles/global";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
