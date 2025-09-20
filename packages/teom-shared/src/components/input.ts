import { cvp } from "../utils/cvp";

export type ReInputColor =
  "primary"
  | "error"
  | "accent";
export interface ReInputBaseProps {
  asChild?: boolean;
  color?: ReInputColor;
}

export const inputVariant = cvp({
  base: "ipt",
  variants: {
    color: {
      primary: "focus-primary",
      error: "focus-error",
      accent: "focus-accent",
    },
  },
});
