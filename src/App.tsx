import React, { useContext } from "react";
import { Header } from "./components/organisms";
import { Container, FlexBox } from "./styles/";
import { Main } from "./components/organisms/Main";
import { ThemeContext } from "./context/type";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";

export const App = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={toggleTheme()}>
      <GlobalStyles />
      <Container>
        <FlexBox direction='column' justify='center' align='center'>
          <Header />
          <Main />
        </FlexBox>
      </Container>
    </ThemeProvider>
  );
};
