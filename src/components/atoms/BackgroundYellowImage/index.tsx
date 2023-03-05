import React from "react";
import { YellowContainer } from "./style";
import { IBackgroundYellowProps } from "./type";

export const BackgroundYellowImage = ({ className }: IBackgroundYellowProps) => {
  return <YellowContainer className={className} />;
};
