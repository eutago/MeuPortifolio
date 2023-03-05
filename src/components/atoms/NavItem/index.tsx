import React from "react";
import { Link } from "react-router-dom";
import { StyledText } from "../";
import { INavLinkProps } from "./types";

export const NavItem = ({ className, text, to }: INavLinkProps) => {
  return (
    <StyledText className={className} color='text' fontSize='sm' fontWeight={700} tag='p'>
      <Link to={to}>{text}</Link>
    </StyledText>
  );
};
