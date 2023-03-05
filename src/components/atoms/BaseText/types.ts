import { ReactNode } from "react";

type tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type fontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type fontSize = "xxl" | "xl" | "lg" | "md" | "sm";

type color = "primary" | "secondary" | "text" | "white";

export interface IBaseTextProps {
  children: ReactNode;
  className?: string;
  tag: tag;
  fontWeight: fontWeight;
  fontSize: fontSize;
  color: color;
}
