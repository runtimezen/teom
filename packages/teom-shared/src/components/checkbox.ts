import { cvp } from "../utils/cvp";

export type ReCheckboxColor = "primary" | "accent";
export interface ReCheckboxBaseProps {
  color?: ReCheckboxColor;
}

export const checkboxVariant = cvp({
  slots: {
    root: "chx-root",
    indicator: "chx-indicator",
    icon: "chx-icon",
  },
  variants: {
    color: {
      primary: {
        root: "focus-primary",
        indicator: "chx-indicator-primary",
      },
      accent: {
        root: "focus-accent",
        indicator: "chx-indicator-accent",
      },
    },
  },
});
