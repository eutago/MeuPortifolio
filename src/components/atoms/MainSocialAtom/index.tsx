import React from "react";
import { IMainSocialProps } from "./type";
import { StyledMainSocial } from "./style";

export const MainSocialAtom = ({ children, to }: IMainSocialProps) => {
  return <StyledMainSocial href={to}>{children}</StyledMainSocial>;
};
