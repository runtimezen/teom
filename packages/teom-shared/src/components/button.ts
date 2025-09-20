import { cvp } from "../utils/cvp";

export type ReButtonColor = 
  "primary"
  | "secondary"
  | "accent"
  | "error";
export type ReButtonSize = "base" | "icon";
export interface ReButtonBaseProps {
  asChild?: boolean;
  color?: ReButtonColor;
  loading?: boolean;
  size?: ReButtonSize;
}

export const buttonVariant = cvp({
  slots: {
    root: "btn",
    stater: "btn-stater",
  },
  variants: {
    size: {
      base: { root: "btn-base" },
      icon: { root: "btn-icon" },
    },
    color: {
      primary: { root: "btn-primary focus-primary" },
      secondary: { root: "btn-secondary focus-primary" },
      accent: { root: "btn-accent focus-accent" },
      error: { root: "btn-error focus-error" },
    },
  },
});
