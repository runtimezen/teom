import { cvp } from "../utils/cvp";

export type ReTextAs =
  "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p";
export type ReTextColor =
  "primary"
  | "secondary";
export type ReTextSize = 
  "huge"
  | "large"
  | "base"
  | "small"
  | "tiny";
export interface ReTextBaseProps {
  as?: ReTextAs;
  color?: ReTextColor;
  size?: ReTextSize;
}

export const textVariant = cvp({
  variants: {
    size: {
      huge: "fnt-huge",
      large: "fnt-large",
      base: "fnt-base",
      small: "fnt-small",
      tiny: "fnt-tiny",
    },
    color: {
      primary: "txt-primary",
      secondary: "txt-secondary",
    },
  },
});
