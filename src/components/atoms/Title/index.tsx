import React from "react";
import { StyledText } from "../../../styles/atoms/Typography";

export const Title = () => {
  return (
    <StyledText fontSize='xl' color='text' fontWeight={800} tag='h1'>
      Olá, eu sou o
      <StyledText fontSize='xl' fontWeight={800} tag='p' color='secondary'>
        Thiago
      </StyledText>
    </StyledText>
  );
};
