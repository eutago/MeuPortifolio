import React from "react";
import { MainSocial } from "../../molecules/MainSocial";
import { StyledMain } from "./style";
import { MainText } from "../../molecules/MainText";
import { MainImage } from "../../molecules/MainImage";

export const Main = () => {
  return (
    <StyledMain>
      <MainSocial />
      <MainText />
      <MainImage />
    </StyledMain>
  );
};
