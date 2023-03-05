import { ReactNode } from "react";

type buttonSize = "lg" | "md";

type borderRadius = "sm" | "xs";

export interface IButtonProps {
  children: ReactNode;
  buttonSize: buttonSize;
  borderRadius: borderRadius;
}
