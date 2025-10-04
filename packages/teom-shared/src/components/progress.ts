import { cvp } from "../utils/cvp";

export type ReProgressColor =
  "primary"
  | "accent";
export interface ReProgressBaseProps {
  color?: ReProgressColor;
}

export const progressVariant = cvp({
  slots: {
    root: "pgs-root",
    indicator: "pgs-indicator",
  },
  variants: {
    color: {
      primary: { indicator: "pgs-primary" },
      accent: { indicator: "pgs-accent" },
    },
  },
});
