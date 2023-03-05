import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { FlexBox } from "../../../styles/";
import { StyledCube } from "../../atoms/Cube/style";
import { HeadLine } from "../../atoms/HeadLine";
import { Title } from "../../atoms/Title";
import { DownloadCV } from "../DownloadCV";

export const MainText = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 2500,
      origin: "left"
    });

    sr.reveal(".main-text", { delay: 600 });
  }, []);

  return (
    <div className='main-text'>
      <FlexBox align='flex-start' justify='center' gap='sm' direction='column'>
        <StyledCube />
        <HeadLine />
        <Title />
        <DownloadCV />
      </FlexBox>
    </div>
  );
};
