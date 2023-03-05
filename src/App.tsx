import React from "react";
import { Header } from "./components/organisms";
import { Container, FlexBox } from "./styles/";
import { DivTest } from "./test/Div";

import { FiInstagram, FiLinkedin, FiGithub, FiDownload } from "react-icons/fi";
import { StyledCube } from "./components/atoms/Cube/style";
import { HeadLine } from "./components/atoms/HeadLine";
import { Title } from "./components/atoms/Title";
import { StyledButton, StyledText } from "./components/atoms";
import { DownloadCV } from "./components/molecules/DownloadCV";
import { BackgroundYellowImage } from "./components/atoms/BackgroundYellowImage";
import { Main } from "./components/organisms/Main";

export const App = () => {
  return (
    <Container>
      <FlexBox direction='column' justify='center' align='center'>
        <Header />
        <Main />
      </FlexBox>
    </Container>
  );
};
