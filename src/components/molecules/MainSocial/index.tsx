import React from "react";
import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { FlexBox } from "../../../styles/";
import { MainSocialAtom } from "../../atoms/MainSocialAtom";

export const MainSocial = () => {
  return (
    <FlexBox align='flex-start' gap='xxxs' justify='center' direction='column'>
      <MainSocialAtom to='https://www.instagram.com/eutago/'>
        <FiInstagram />
      </MainSocialAtom>
      <MainSocialAtom to='https://www.linkedin.com/in/thiagoluiz21/'>
        <FiLinkedin />
      </MainSocialAtom>
      <MainSocialAtom to='https://github.com/eutago'>
        <FiGithub />
      </MainSocialAtom>
    </FlexBox>
  );
};
