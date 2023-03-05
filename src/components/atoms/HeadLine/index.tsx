import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FlexBox } from "../../../styles";
import { StyledText } from "../../../styles/atoms/Typography";
import { Bar } from "./style";

export const HeadLine = () => {
  return (
    <FlexBox direction='row' align='center' justify='flex-start' gap='sm'>
      <Bar />
      <StyledText fontWeight={700} color='text' fontSize='lg' tag='span'>
        <TypeAnimation
          sequence={[
            "Desenvolvedor Front-End",
            2000,
            "Desenvolvedor Freelancer",
            2000,
            () => {}
          ]}
          wrapper='div'
          cursor={true}
          repeat={Infinity}
        />
      </StyledText>
    </FlexBox>
  );
};
