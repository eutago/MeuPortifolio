import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { FlexBox } from "../../../styles/";
import { SixCircles } from "../../atoms/BackgroundDecorations/SixCircles";
import { BackgroundYellowImage } from "../../atoms/BackgroundYellowImage";
import { StyledMain } from "./style";

export const MainImage = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "80px",
      duration: 2500,
      origin: "top"
    });

    sr.reveal(".main-img", {
      delay: 700
    });
  }, []);

  return (
    <StyledMain>
      <FlexBox justify='flex-end' align='flex-start' direction='row'>
        <BackgroundYellowImage className='main-img' />
        <SixCircles />
      </FlexBox>
    </StyledMain>
  );
};
