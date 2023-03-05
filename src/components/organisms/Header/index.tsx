import React, { useEffect, useState } from "react";
import { Container, FlexBox } from "../../../styles/";
import { Logo, SwitchTheme } from "../../atoms";
import { Navbar } from "../../molecules/";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexBox justify='space-between' align='center' direction='row'>
          <FlexBox align='center' gap='xl' justify='flex-start' direction='row'>
            <Logo />
            <Navbar />
          </FlexBox>
          <SwitchTheme />
        </FlexBox>
      </Container>
    </StyledHeader>
  );
};
