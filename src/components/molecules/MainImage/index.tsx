import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { FlexBox } from "../../../styles/";
import { BackgroundYellowImage } from "../../atoms/BackgroundYellowImage";

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
    <FlexBox justify='flex-end' align='flex-start' direction='row'>
      <BackgroundYellowImage className='main-img' />
    </FlexBox>
  );
};
